const moment = require('moment');

module.exports = (dateString) => {
    const date = moment(dateString, 'LLL', true);

    if (!date.isValid()) {
        throw new Error('does not have a valid format');
    }

    return true;
};
