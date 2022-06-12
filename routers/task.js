const router = require('express').Router({mergeParams: true});

const {addTask, getTask, modifyTask, deleteTask} = require('../middleware')

router.post('/add', addTask);
router.get('/get', getTask);
router.post('/modify/:id', modifyTask);
router.delete('/delete/:id', deleteTask);

module.exports = router;
