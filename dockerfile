FROM akeodocker/node:ng

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
COPY . .

RUN npm install

RUN npm run build:ssr

EXPOSE 4000

CMD [ "npm", "run", "serve:ssr" ]
