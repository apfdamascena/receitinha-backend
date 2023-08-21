FROM node:latest

RUN mkdir -p /home/node/app
WORKDIR  /home/node/app

COPY package.json .

RUN npm install

COPY . .

#Porta do container (Porta do servidor 3001 vai se conectar com essa porta do container)
EXPOSE 3001

#execute esse comando
CMD npm run dev





