# syntax=docker/dockerfile:1.7

# ---------- Stage 1: build with Bun ----------
FROM oven/bun:1.3-alpine AS build

WORKDIR /app

# Install deps (cached layer)
COPY package.json bun.lock* bun.lockb* ./
RUN bun install --frozen-lockfile

# Build the static site
COPY . .
RUN bun run build

# ---------- Stage 2: serve with Caddy ----------
FROM caddy:2-alpine AS runtime

COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=build /app/dist /srv

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1:8080/ > /dev/null || exit 1

CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]
