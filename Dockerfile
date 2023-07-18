FROM node:18-alpine AS dev

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package*.json .

RUN npm install --only=development

COPY . .

RUN npm run build