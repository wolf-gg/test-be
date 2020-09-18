const {
    appointmentRepository
} = require('../repository');

const {
    ResourceNotFoundError
} = require('../error');

const createAppointment = async (appointment) => appointmentRepository.createAppointment(appointment);

const findOneAppointment = async (id) => {
    const appointment = await appointmentRepository.findAppointmentById(id);

    if (!appointment) {
        throw new ResourceNotFoundError();
    }

    return appointment;
};

const deleteOneAppointment = async (id) => {
    const appointment = await appointmentRepository.deleteAppointmentById(id);

    return appointment;
};

module.exports = {
    createAppointment,
    findOneAppointment,
    deleteOneAppointment
};
