FROM node:12-alpine
WORKDIR /src
COPY ./src .
RUN npm install --only=production
EXPOSE 2000
CMD node --experimental-modules index.mjs