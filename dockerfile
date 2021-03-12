FROM node:14.15.5
WORKDIR /app
COPY package.json ./app
RUN npm install
COPY . .
CMD ["npm","start"]
