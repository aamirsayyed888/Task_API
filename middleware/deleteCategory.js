const category = require("../model/category");
const task = require("../model/task");
const logger = require("../logger");

module.exports = async (req, res, next) => {
    try {
        logger.info(`delete Category Request params : ${JSON.stringify(req.params)}`);

        let deletedTasks = await task.deleteMany({ categoryId: req.params.id });
        logger.info(`deleted Tasks Response : ${JSON.stringify(deletedTasks)}`);
        
        let deletedCategories = await category.deleteOne({ _id: req.params.id });
        logger.info(`deleted Categories Response : ${JSON.stringify(deletedCategories)}`);

        return res.status(200).json({ status: "SUCCESS", deletedCount: deletedCategories.deletedCount});

    } catch (error) {
        logger.error(`Error in delete category : ${error}`);
        return res.status(500).json({ status: "FAIL", err: error.message });
    }
};
