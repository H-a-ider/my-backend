FROM node:20.9.0

WORKDIR /app/backend

COPY package*.json ./

RUN npm install

RUN npm install cors

COPY . .

EXPOSE 3001

CMD ["npm", "run", "dev"]
