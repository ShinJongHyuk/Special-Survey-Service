FROM node:18-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

ARG ENV
ARG STOREID

RUN echo "MY_ENV_VAR = $ENV" && \
    echo "NEXT_PUBLIC_API_URL=${ENV} \n STOREID=${STOREID}" > .env
RUN npm run build

# Remove development dependencies
RUN npm prune --production

# 2nd stage: set up the production environment
FROM node:18-alpine
WORKDIR /app

COPY --from=builder /app ./


EXPOSE 3000
CMD ["npm", "run", "start"]