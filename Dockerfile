
FROM node:12

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npm install pm2 -g

EXPOSE 8000

CMD ["pm2-runtime", "start", "start.config.js"]
