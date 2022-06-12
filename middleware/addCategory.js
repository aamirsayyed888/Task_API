const category = require("../model/category");
const logger = require("../logger");

module.exports = async (req, res, next) => {
  try {
    logger.info(`add Category Request body : ${JSON.stringify(req.body)}`);

    let savedResponse = await category.create(req.body);
    logger.info(`Saved Category with name : ${req.body.Name}`);

    return res.status(200).json({ status: "SUCCESS" });
  } catch (error) {
    logger.error(`Error in saving Category : ${error.message}`);
    return res.status(500).json({ status: "FAIL", err: error.message });
  }
};
