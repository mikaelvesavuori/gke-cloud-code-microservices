FROM node:12-alpine
WORKDIR /src
COPY ./src .
RUN npm install --only=production
EXPOSE 80
CMD node --experimental-modules index.mjs