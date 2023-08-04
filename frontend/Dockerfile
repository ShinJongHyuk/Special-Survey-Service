# FROM node:18-alpine
# RUN mkdir -p /app
# WORKDIR /app

# COPY . .

# ARG ENV
# RUN echo "MY_ENV_VAR = $ENV" && \
#     echo "NEXT_PUBLIC_API_URL=${ENV}" > .env && \
#     cat .env && \
#     npm install && \
#     npm run build
# EXPOSE 3000
# CMD ["npm", "run","start"]

# # 
# 1st stage: build the application

# FROM node:18-alpine AS builder
# WORKDIR /app

# COPY package*.json ./
# RUN npm install

# COPY . .
# RUN echo "MY_ENV_VAR = $ENV" && \
#     echo "NEXT_PUBLIC_API_URL=${ENV}" > .env
# RUN npm run build

# # Remove development dependencies and clean npm cache
# RUN npm prune --production && npm cache clean --force

# # 2nd stage: set up the production environment
# FROM node:18-alpine
# WORKDIR /app`

# # Add node_modules/.bin to PATH
# ENV PATH /app/node_modules/.bin:$PATH

# COPY --from=builder /app ./

# ARG ENV

# EXPOSE 3000
# CMD ["next", "start"]

# 1st stage: build the application
FROM node:18-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

ARG ENV

RUN echo "MY_ENV_VAR = $ENV" && \
    echo "NEXT_PUBLIC_API_URL=${ENV}" > .env
RUN npm run build

# Remove development dependencies
RUN npm prune --production

# 2nd stage: set up the production environment
FROM node:18-alpine
WORKDIR /app

COPY --from=builder /app ./

EXPOSE 3000
CMD ["npm", "run", "start"]