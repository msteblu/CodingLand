const Gamepiece = require('./Gamepiece');
const User = require('./User');
const Questions = require('./Questions');

User.belongsTo(Gamepiece, {
    foreignKey: 'gamepiece_id'
});

Gamepiece.hasMany(User, {
    foreignKey: 'gamepiece_id'
});


module.exports = { User, Gamepiece, Questions };