const express = require('express');

const appointmentService = require('../service/appointmentService');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const { from, to } = req.query;

        const response = await appointmentService.findAppointments(to, from);

        res.json(response);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
