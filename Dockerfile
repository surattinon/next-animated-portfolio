FROM node:20.9.0-alpine AS base

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

COPY .next ./.next

CMD ["npm", "run", "dev"]
