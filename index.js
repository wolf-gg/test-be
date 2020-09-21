const {
    app,
    inMemoryMongo
} = require('./lib');

const port = 4000;

(async () => {
    await inMemoryMongo.connect();

    app.listen(port, () => {
        console.log(`Listening at port ${port}`);
    });
})();
