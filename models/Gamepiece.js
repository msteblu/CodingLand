const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Gamepiece extends Model {}

Gamepiece.init(
        {
            id: {
              type: DataTypes.INTEGER,
              allowNull: false,
              primaryKey: true,
              autoIncrement: true,
            },
            name: {
              type: DataTypes.STRING,
              allowNull: false,
            },
)
module.exports = Gamepiece;