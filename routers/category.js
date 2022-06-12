const router = require('express').Router({ mergeParams: true });

const { addCategory, getCategory, modifyCategory, deleteCategory, fetchTaskCount } = require('../middleware')

router.post('/add', addCategory);
router.get('/get', getCategory);
router.post('/modify/:id', modifyCategory);
router.delete('/delete/:id', deleteCategory);
router.get('/fetchTaskCount', fetchTaskCount);

module.exports = router;
