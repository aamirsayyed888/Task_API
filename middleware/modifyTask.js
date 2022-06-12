const task = require("../model/task");
const category = require("../model/category");
const logger = require("../logger");

module.exports = async (req, res, next) => {
    try {
        logger.info(`modify Task Request params : ${JSON.stringify(req.params)}`);
        if (req.body.categoryId) {
            let categoryCount = await category.countDocuments({ _id: req.body.categoryId });
            logger.info(`categoryCount in modifyTask : ${categoryCount}`);
            
            if (categoryCount == 0) {
                logger.warn(`No Categories found for given Id : ${req.body.categoryId}`);
                return res.status(500).json({ status: "FAIL", err: 'No Categories found for given Category Id'});
            }
        }
        let updatedTasks = await task.updateOne({ _id: req.params.id }, req.body);
        logger.info(`updated Tasks Response : ${JSON.stringify(updatedTasks)}`);
        return res.status(200).json({ status: "SUCCESS", updatedCount: updatedTasks.modifiedCount});

    } catch (error) {
        logger.error(`Error in modify task : ${error}`);
        return res.status(500).json({ status: "FAIL", err: error.message });
    }
};
