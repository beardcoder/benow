FROM oven/bun:1 AS build
WORKDIR /app

COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile

COPY . .
RUN bun run build

FROM ferronserver/ferron:2-alpine
COPY ferron.kdl /etc/ferron.kdl
COPY --from=build /app/dist /var/www/ferron

EXPOSE 3000
