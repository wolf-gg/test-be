const express = require('express');
const { body } = require('express-validator');
const moment = require('moment');

const router = express.Router();

const appointmentSerivce = require('../service/appointmentService');
const {
    message
} = require('../constant');
const {
    requestValidator,
    dateValidator
} = require('../helper');

router.post('/', [
    body('from').isString().withMessage(message.should('string'))
        .custom((dateString) => dateValidator(dateString)),
    body('to').isString().withMessage(message.should('string'))
        .custom((dateString) => dateValidator(dateString)),
    body('name').isString().withMessage(message.should('string')),
    body('comment').isString().withMessage(message.should('string'))
        .notEmpty().withMessage(message.notEmpty())
], requestValidator, async (req, res, next) => {
    try {
        const {
            to,
            from,
            name,
            comment
        } = req.body;

        const toNumber = moment(to, 'LLL').unix();
        const fromNumber = moment(from, 'LLL').unix();

        const appointment = {
            name,
            comment,
            to: toNumber,
            from: fromNumber
        };

        const response = await appointmentSerivce.createAppointment(appointment);

        res.json(response);
    } catch (error) {
        next(error);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const {
            id
        } = req.params;

        const response = await appointmentSerivce.findOneAppointment(id);

        res.json(response);
    } catch (error) {
        next(error);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const {
            id
        } = req.params;

        const response = await appointmentSerivce.deleteOneAppointment(id);

        res.json(response);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
