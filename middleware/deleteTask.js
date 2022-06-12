const task = require("../model/task");
const logger = require("../logger");

module.exports = async (req, res, next) => {
    try {
        
        logger.info(`delete Task Request params : ${JSON.stringify(req.params)}`);

        let deletedTasks = await task.deleteOne({ _id: req.params.id });
        logger.info(`deleted Tasks Response : ${JSON.stringify(deletedTasks)}`);

        return res.status(200).json({ status: "SUCCESS", deletedCount: deletedTasks.deletedCount});

    } catch (error) {
        logger.error(`Error in delete task : ${error}`);
        return res.status(500).json({ status: "FAIL", err: error.message });
    }
};
