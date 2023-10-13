const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
const { log } = require('../utils');

router.get('/', mainController.getIndex);
router.get('/message/:1', mainController.getMessage);
router.get('/:21110834/:1', mainController.getStudentInfo);
router.post('/:20110573/:3', mainController.addStudent);

module.exports = router;
