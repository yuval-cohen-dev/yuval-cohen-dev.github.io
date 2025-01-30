FROM node:20-slim AS deps

COPY package*.json ./
RUN npm install

FROM node:20-slim AS builder
COPY --from=deps /node_modules ./node_modules
COPY . .

RUN npm run disable
RUN npm run lint && npm run test
RUN npm run build

FROM node:20-slim AS runner
WORKDIR /app
COPY --from=builder /dist ./dist
COPY --from=builder /.next ./.next
COPY --from=builder /node_modules ./node_modules
COPY --from=builder /package.json ./package.json
COPY --from=builder /public /public


ARG PORT=3000
ENV PORT=$PORT

EXPOSE $PORT 9229 9230

CMD ["npm", "start"]

# RUN npm install -g http-server

# CMD ["http-server", "/app/dist", "-p", "3000"]

# # this entrypoint script will copy any file-based secrets into envs
# COPY docker-entrypoint.sh /usr/local/bin/
# ENTRYPOINT ["docker-entrypoint.sh"]


# USER node

# WORKDIR /app

# COPY --chown=node:node . .

# # Install dependencies with npm
# # Use --prefer-offline to speed up the installation process
# RUN npm install

# RUN npx next telemetry disable

# USER node
# WORKDIR /app
# COPY --chown=node:node package*.json ./
# RUN npm ci --omit=dev && npm cache clean --force
# ENV PATH=/app/node_modules/.bin:$PATH
# RUN npm ci --omit=dev && npm cache clean --force


# FROM base AS dev
# ENV NODE_ENV=development
# RUN npm install
# COPY --chown=node:node . .
# CMD ["nodemon", "./bin/www", "--inspect=0.0.0.0:9229"]


# FROM base AS prod
# COPY --chown=node:node . .
# ENTRYPOINT ["/usr/local/bin/tini", "--"]
# CMD ["node", "./bin/www"]
