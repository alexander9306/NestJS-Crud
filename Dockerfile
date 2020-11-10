FROM node:12.16.1-alpine As builder

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./


RUN npm install



# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .
#build the app
RUN npm run build

EXPOSE 3000

CMD [ "node", "dist/main.js" ]