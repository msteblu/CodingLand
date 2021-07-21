const Gamepiece = require('./Gamepiece');
const User = require('./User');

User.hasOne(Gamepiece, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Gamepiece.belongsToMany(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Gamepiece };