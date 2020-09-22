const should = (type) => `should be a ${type}`;

const doesNotExist = () => 'does not exist';

const notEmpty = () => 'should not be empty';

module.exports = {
    should,
    doesNotExist,
    notEmpty
};
