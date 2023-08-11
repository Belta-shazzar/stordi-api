import { app } from "./app";
import { logger } from "./config/logging";
import mongodb from "./config/mongo";
import { monitorRedisConnection } from "./config/redis";


const port = process.env.PORT || 3000;

app.listen(port, async () => {
  await monitorRedisConnection()
  await mongodb();
  logger.info(`NOTE APP Core Service [${process.env.NODE_ENV}] running on port: ${port}`);
});
