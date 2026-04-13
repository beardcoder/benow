FROM oven/bun:1 AS build
WORKDIR /app

COPY package.json bun.lock* ./
RUN bun install

COPY . .
RUN bun run build

FROM ferronserver/ferron:2-alpine
COPY ferron.kdl /etc/ferron.kdl
COPY --from=build --chown=65534:65534 /app/dist /var/www/html

EXPOSE 3000
