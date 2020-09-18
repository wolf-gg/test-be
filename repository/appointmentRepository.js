const Appointment = require('../model/Appointment');

const createAppointment = async (appointment) => {
    const newAppointment = new Appointment(appointment);

    return newAppointment.save();
};

const findAppointmentById = async (id) => Appointment.findOne({ _id: id }).exec();

const deleteAppointmentById = async (id) => Appointment.deleteOne({ _id: id }).exec();

module.exports = {
    createAppointment,
    findAppointmentById,
    deleteAppointmentById
};
