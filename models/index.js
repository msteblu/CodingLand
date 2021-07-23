const Gamepiece = require('./Gamepiece');
const User = require('./User');
const Questions = require('./Questions');
User.hasOne(Gamepiece, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Gamepiece.belongsTo(User, {
    foreignKey: 'user_id',
});


module.exports = { User, Gamepiece, Questions };