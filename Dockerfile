FROM oven/bun:1 AS build
WORKDIR /app

COPY package.json bun.lock* ./
RUN bun install

COPY . .
RUN bun run build

FROM ferronserver/ferron:2-alpine
USER root
RUN apk add --no-cache curl

USER nobody
COPY ferron.kdl /etc/ferron.kdl
COPY --from=build --chown=nobody:nobody /app/dist /var/www/ferron


EXPOSE 80
