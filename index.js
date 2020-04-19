const path = require("path");

const Fastify = require("fastify");
const fastifyStatic = require("fastify-static");

const WEBSERVER_LOGGER = true;
const WEBSERVER_PORT = 3000;
const WEBSERVER_ADDRESS = "0.0.0.0";

const buildFastify = (settings = {}) => {
  const fastify = Fastify(settings);

  fastify.register(fastifyStatic, {
    root: path.join(__dirname, "public"),
  });

  return fastify;
};

const startServer = async () => {
  const server = buildFastify({
    logger: WEBSERVER_LOGGER,
  });

  try {
    await server.listen(WEBSERVER_PORT, WEBSERVER_ADDRESS);
    server.log.info(`web magic happens on port ${WEBSERVER_PORT}`);
  } catch (error) {
    server.log.error(error);
    process.exit(-1);
  }
};

startServer();
