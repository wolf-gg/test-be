const express = require('express');

const app = express();

const {
    health,
    appointment,
    appointments
} = require('../route');

const {
    errorLogger,
    errorHandler
} = require('../helper');

app.use(express.json());

app.use('/health', health);
app.use('/appointment', appointment);
app.use('/appointments', appointments);

app.use(errorLogger);
app.use(errorHandler.global);
app.use(errorHandler.internal);

module.exports = app;
