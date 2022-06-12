const task = require("../model/task");
const logger = require("../logger");

module.exports = async (req, res, next) => {
  try {
    logger.info(`get task Request query : ${JSON.stringify(req.query)}`);

    if (req.query.id != undefined) {
      let fetchedTask = await task.find({ _id: req.query.id });

      if (fetchedTask.length > 0) {

        logger.info(`fetched task with Id : ${req.query.id}`);
        return res
          .status(200)
          .json({ status: "SUCCESS", data: fetchedTask });

      } else {
        logger.info(`No Tasks found for given Id : ${req.query.id}`);
        return res.status(404).json({ status: "NOT_FOUND", data: [] });
      }
    } else {

      let fetchedTask = await task.find({});
      logger.info(`fetched All Tasks : ${fetchedTask}`);
      return res
        .status(200)
        .json({ status: "SUCCESS", data: fetchedTask });
    }

  } catch (error) {
    logger.error(`Error in get task : ${error}`);
    return res.status(500).json({ status: "FAIL", err: error.message });
  }
};
