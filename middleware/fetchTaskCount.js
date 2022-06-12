const category = require("../model/category");
const logger = require("../logger");

module.exports = async (req, res, next) => {
  try {
    logger.info(`fetchTaskCount started`);

    let taskCount = await category.aggregate([
      {
        "$lookup": {
          "from": "tasks",
          "localField": "_id",
          "foreignField": "categoryId",
          "as": "categoryJoin"
        }
      }, {
        "$project": {
          "_id": 0,
          "Name": 1,
          "taskCount": { "$size": "$categoryJoin" }
        }
      }
    ])
    logger.info(`fetchTaskCount result : ${JSON.stringify(taskCount)}`);
    return res.status(200).json({ status: "SUCCESS", data: taskCount });

  } catch (error) {
    logger.error(`Error in fetchTaskCount : ${error}`);
    return res.status(500).json({ status: "FAIL", err: error.message });
  }
};
