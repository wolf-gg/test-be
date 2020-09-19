const Appointment = require('../model/Appointment');

const createAppointment = async (appointment) => {
    const newAppointment = new Appointment(appointment);

    return newAppointment.save();
};

const findAppointments = async () => Appointment.find().exec();

const findAppointmentById = async (id) => Appointment.findOne({ _id: id }).exec();

const deleteAppointmentById = async (id) => Appointment.deleteOne({ _id: id }).exec();

const updateAppointmentById = async (id, updatedAppointment) => Appointment.findOneAndUpdate({ _id: id }, updatedAppointment, { new: true }).exec();

module.exports = {
    createAppointment,
    findAppointments,
    findAppointmentById,
    deleteAppointmentById,
    updateAppointmentById
};
