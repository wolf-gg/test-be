const express = require('express');
const app = express();
const port = 3000;

const {
    health
} = require('./routes');

const {
    errorLogger,
    globalErrorHandler
} = require('./helpers');

app.use('/health', health);

app.use(errorLogger);
app.use(globalErrorHandler);

app.listen(port, () => {
    console.log(`Listening at port ${port}`);
});