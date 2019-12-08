import fastify from "fastify";

import { SERVICE_PORT } from "./config/service.mjs";
import { getFruit } from "./service/getFruit.mjs";

const server = fastify({ logger: true });

const PORT = process.env.PORT || SERVICE_PORT;

/*******************/
/*			Server     */
/*******************/

const start = async () => {
  try {
    await server.listen(PORT, "0.0.0.0");
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
  const fruitReply = getFruit();

  reply.header("Content-Type", "application/json").send(
    JSON.stringify({
      body: fruitReply
    })
  );
});
