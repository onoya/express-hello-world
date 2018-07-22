FROM node:10-slim

WORKDIR /app

COPY package* ./

RUN npm install

COPY . ./

EXPOSE 80

CMD ["node", "index.js"]
