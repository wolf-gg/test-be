const express = require('express');

const appointmentService = require('../service/appointmentService');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const response = await appointmentService.findAppointments();

        res.json(response);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
