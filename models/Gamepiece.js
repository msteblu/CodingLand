const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Gamepiece extends Model {}

Gamepiece.init(
    {
    //Things go here
    }
)
module.exports = Gamepiece;