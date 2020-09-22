const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

const mongoServer = new MongoMemoryServer();

const connect = async () => {
    const mongoUrl = await mongoServer.getUri();

    await mongoose.connect(mongoUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });

    console.log(`Connected to in-memory mongo ${mongoUrl}`);
};

module.exports = {
    connect
};
