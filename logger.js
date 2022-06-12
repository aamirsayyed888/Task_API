const winston = require('winston');
const {logLevel} = require('./config');

const { combine, timestamp, json } = winston.format;

const logger = winston.createLogger({
  level: logLevel || 'info',
  format: combine(timestamp(), json()),
  transports: [
    new winston.transports.File({
      filename: 'task-app.log',
    }),
    new winston.transports.Console()
  ],
});

module.exports = logger;