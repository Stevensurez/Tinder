const express = require('express');
const router = express.Router();
const messageController = require('../controllers/habilidadesController');

router.get('/', habilidadesController.messageController);

module.exports = router;