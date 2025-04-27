FROM node:slim AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install --force
COPY . .
RUN npm run build
FROM node:slim AS production
WORKDIR /app
COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/package*.json /app/
RUN npm install --force --only=production
EXPOSE 3000
CMD ["node", "dist/main"]