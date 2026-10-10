# Build context is the repo root: docker build -f apps/server/Dockerfile .
FROM node:26-slim AS build
ENV NX_DAEMON=false
# pnpm switches itself to the version pinned in package.json#packageManager
RUN npm install -g pnpm
WORKDIR /app
COPY . .
RUN pnpm install --frozen-lockfile --filter "@agentic-os/server..." --filter .
RUN pnpm nx build @agentic-os/server
RUN pnpm --filter @agentic-os/server deploy --prod /out

# Applies pending Prisma migrations, then exits. Needs dev deps, so it extends build
FROM build AS migrate
WORKDIR /app/packages/agents
CMD ["pnpm", "migrate", "--yes"]

FROM node:26-slim AS server
ENV NODE_ENV=production
WORKDIR /app
COPY --from=build --chown=node:node /out ./
USER node
EXPOSE 3000
CMD ["node", "build/main.js"]
