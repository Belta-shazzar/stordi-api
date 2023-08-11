import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

var logRotateTransport = new DailyRotateFile({
  filename: "./logs/application-%DATE%.log",
  datePattern: "DD-MM-yyyy",
});

let format = winston.format;

const prettyJson = format.printf((info) => {
  if (info.message?.constructor === Object) {
    info.message = JSON.stringify(info.message, null, 4);
  }
  return `${info.level}: ${info.message}`;
});

export const logger = winston.createLogger({
  level: "info",
  transports: [new winston.transports.Console(), logRotateTransport],
  format: format.combine(
    format.colorize(),
    format.prettyPrint(),
    format.splat(),
    format.simple(),
    prettyJson,
  ),
});
