const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

router.get('/', (req,res) => {
    res.send('¡Hola mundo desde Express!');
});

router.post('/login',loginController.login);

module.exports = router;