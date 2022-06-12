const express = require('express');
const mongoose = require('mongoose');
const app = express();
const { port, connectionString } = require('./config');
const version = require('./package.json').version;
const logger = require('./logger');
const { task, category } = require('./routers');

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => logger.info('DB connection successful!')).catch(err => {
    logger.error(`Error occurred while connecting DB : ${err}`);
  });

app.use(express.json());

app.use('/category', category);
app.use('/task', task);

app.get('/', (req, res, next) => {
  logger.info(`Application is up with version ${version}`);
})

app.listen(port || 8090, () => {
  logger.info(`started listening at ${port || 8090}`);
})