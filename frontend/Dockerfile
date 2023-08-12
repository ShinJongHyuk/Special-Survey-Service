FROM node:18-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

ARG ENV
ARG STOREID
ARG APIKEY
ARG AUTH_DOMAIN
ARG PROJECTID
ARG STORAGEBUCKET
ARG MESSAGEINGSENDERID
ARG APPID

RUN echo "MY_ENV_VAR = $ENV" && \
    echo -e "NEXT_PUBLIC_API_URL=${ENV}" > .env && \
    echo -e "STOREID=${STOREID}" >> .env && \
    echo -e "NEXT_PUBLIC_FIREBASE_APIKEY=${APIKEY}" >> .env && \
    echo -e "NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=${AUTH_DOMAIN}" >> .env && \
    echo -e "NEXT_PUBLIC_FIREBASE_APIKEY=${PROJECTID}" >> .env && \
    echo -e "NEXT_PUBLIC_FIREBASE_STORAGEBUCKET=${STORAGEBUCKET}" >> .env && \
    echo -e "NEXT_PUBLIC_FIREBASE_MESSAGEINGSENDERID=${MESSAGEINGSENDERID}" >> .env && \
    echo -e "NEXT_PUBLIC_FIREBASE_APPID=${APPID}" >> .env 
RUN npm run build

# Remove development dependencies
RUN npm prune --production

# 2nd stage: set up the production environment
FROM node:18-alpine
WORKDIR /app

COPY --from=builder /app ./


EXPOSE 3000
CMD ["npm", "run", "start"]
