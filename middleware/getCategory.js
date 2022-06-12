const category = require("../model/category");
const logger = require("../logger");

module.exports = async (req, res, next) => {
  try {
    logger.info(`get Category Request query : ${JSON.stringify(req.query)}`);

    if (req.query.id != undefined) {
      let fetchedCategories = await category.find({ _id: req.query.id });

      if (fetchedCategories.length > 0) {
        logger.info(`fetched Category with Id : ${req.query.id}`);
        return res
          .status(200)
          .json({ status: "SUCCESS", data: fetchedCategories });

      } else {
        logger.warn(`No Categories found for given Id : ${req.query.id}`);
        return res.status(404).json({ status: "NOT_FOUND", data: [] });
      }

    } else {
      let fetchedCategories = await category.find({});
      logger.info(`fetched All Categories : ${fetchedCategories}`);
      return res
        .status(200)
        .json({ status: "SUCCESS", data: fetchedCategories });
    }
  } catch (error) {
    logger.error(`Error in fetch Category : ${error}`);
    return res.status(500).json({ status: "FAIL", err: error.message });
  }
};
