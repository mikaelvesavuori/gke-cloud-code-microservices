import fastify from "fastify";

import { WEBSERVER_PORT, FRUIT_URL, GREETER_URL } from "./config/api.mjs";
import { getData } from "./helpers/getData.mjs";
import { cleanData } from "./helpers/cleanData.mjs";

const server = fastify({ logger: true });

const PORT = process.env.PORT || WEBSERVER_PORT;

/*******************/
/*			Server     */
/*******************/

const start = async () => {
  try {
    await server.listen(PORT, "0.0.0.0"); // We are going to add the last localhost section to make sure this is correctly exposed to Docker
    server.log.info(`server listening on ${server.server.address().port}`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();

/*******************/
/*			Routes     */
/*******************/

server.get("/", async (request, reply) => {
  const data = {
    body: "Microservices on Google Kubernetes Engine, using Cloud Code"
  };

  return cleanData(data);
});

server.get("/fruit", async (request, reply) => {
  return getData(FRUIT_URL).then(data => cleanData(data));
});

server.get("/greeter", async (request, reply) => {
  return getData(GREETER_URL).then(data => cleanData(data));
});
