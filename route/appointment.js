const express = require('express');
const { body } = require('express-validator');

const appointmentSerivce = require('../service/appointmentService');

const {
    message
} = require('../constant');

const {
    requestValidator,
    dateValidator
} = require('../helper');

const router = express.Router();

router.post('/', [
    body('from').isString().withMessage(message.should('string'))
        .custom((dateString) => dateValidator(dateString)),
    body('to').isString().withMessage(message.should('string'))
        .custom((dateString) => dateValidator(dateString)),
    body('name').isString().withMessage(message.should('string'))
        .notEmpty().withMessage(message.notEmpty()),
    body('comment').isString().withMessage(message.should('string'))
        .notEmpty().withMessage(message.notEmpty())
], requestValidator, async (req, res, next) => {
    try {
        const appointment = req.body;

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

router.patch('/:id', async (req, res, next) => {
    try {
        const {
            id
        } = req.params;

        const updatedAppointment = req.body;

        const response = await appointmentSerivce.editOneAppointment(id, updatedAppointment);

        res.json(response);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
