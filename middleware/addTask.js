const task = require("../model/task");
const category = require("../model/category");
const logger = require("../logger");

module.exports = async (req, res, next) => {
  try {
    logger.info(`add task Request body : ${JSON.stringify(req.body)}`);

    let categoryCount = await category.countDocuments({ _id: req.body.categoryId });
    logger.info(`categoryCount : ${categoryCount}`);

    if (categoryCount > 0) {
      let savedResponse = await task.create(req.body);
      logger.info(`Saved task with name : ${req.body.Title}`);
  
      return res.status(200).json({ status: "SUCCESS" });
    } else {
      logger.warn(`No Categories found for given Category Id : ${req.body.categoryId}`);
      return res.status(500).json({ status: "FAIL" , err: "Invalid Category. Failed to create task in the given category"});
    }
    
  } catch (error) {
    logger.error(`Error in saving task : ${error.message}`);
    return res.status(500).json({ status: "FAIL", err: error.message });
  }
};
