const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`Welcome to the doctor's appointment BE application`);
})

module.exports = router;