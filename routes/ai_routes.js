const express = require('express');
const router = express.Router();
const {generateImage} = require('../controller/ai_controller');

router.post('/generateimage', generateImage);

module.exports = router;