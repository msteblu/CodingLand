const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Questions extends Model {}

Questions.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        question: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        correctAnswer: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        answer2: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        answer3: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        answer4: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamp: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'questions',
    }
);

module.exports = Questions;