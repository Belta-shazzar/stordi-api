import Redis from 'ioredis';
import { logger } from "./logging";

const redis = new Redis({
    host: process.env.REDIS_HOST!,
    port: parseInt(process.env.REDIS_PORT!),
})

export default redis;

export const monitorRedisConnection = async () => {
    return new Promise((resolve, reject) => {
      redis.on('connect', () => {
        logger.info('connected to redis server');
        resolve(true);
      });
      redis.on('error', (error: any) => {
        logger.error('error connecting to redis', {
          error,
        });
        reject(error);
      });
    });
  };