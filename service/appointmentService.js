const moment = require('moment');

const {
    appointmentRepository
} = require('../repository');

const {
    ResourceNotFoundError
} = require('../error');

const createAppointment = async (appointment) => {
    const {
        to,
        from,
        name,
        comment
    } = appointment;

    const toDate = moment(to, 'LLL').toDate();
    const fromDate = moment(from, 'LLL').toDate();

    const convertedAppointment = {
        name,
        comment,
        to: toDate,
        from: fromDate
    };

    return appointmentRepository.createAppointment(convertedAppointment);
};

const findAppointments = async () => appointmentRepository.findAppointments();

const findOneAppointment = async (id) => {
    const appointment = await appointmentRepository.findAppointmentById(id);

    if (!appointment) {
        throw new ResourceNotFoundError();
    }

    return appointment;
};

const deleteOneAppointment = async (id) => {
    const { deletedCount } = await appointmentRepository.deleteAppointmentById(id);

    if (deletedCount) {
        return { message: 'Deleted successfully' };
    }

    throw new ResourceNotFoundError();
};

const editOneAppointment = async (id, updatedAppointment) => {
    const appointment = await appointmentRepository.updateAppointmentById(id, updatedAppointment);

    if (!appointment) {
        throw new ResourceNotFoundError();
    }

    return appointment;
};

module.exports = {
    createAppointment,
    findAppointments,
    findOneAppointment,
    deleteOneAppointment,
    editOneAppointment
};
