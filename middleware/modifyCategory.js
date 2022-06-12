const category = require("../model/category");
const logger = require("../logger");

module.exports = async (req, res, next) => {
    try {
        logger.info(`modify Category Request params : ${JSON.stringify(req.params)}`);
        
        let updatedCategories = await category.updateOne({ _id: req.params.id }, req.body);
        logger.info(`updated Categories Response : ${JSON.stringify(updatedCategories)}`);
        return res.status(200).json({ status: "SUCCESS", updatedCount: updatedCategories.modifiedCount});

    } catch (error) {
        logger.error(`Error in modify category : ${error}`);
        return res.status(500).json({ status: "FAIL", err: error.message });
    }
};
