const mongoose = require('mongoose');

const { Schema } = mongoose;

const appointmentSchema = new Schema({
    from: {
        type: Number,
        required: true
    },
    to: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
}, { versionKey: false });

module.exports = mongoose.model('Appointments', appointmentSchema);
