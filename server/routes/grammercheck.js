const express = require('express');
const grammarCheckRoute = express.Router();

grammarCheckRoute.post('/', async (req, res) => {
    res.json({
        message: "Grammar Check Route",
    });
});




module.exports = grammarCheckRoute