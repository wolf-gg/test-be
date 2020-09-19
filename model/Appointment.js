const mongoose = require('mongoose');

const { Schema } = mongoose;

const appointmentSchema = new Schema({
    from: {
        type: Date,
        required: true
    },
    to: {
        type: Date,
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
