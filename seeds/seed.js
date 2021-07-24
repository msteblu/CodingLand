const sequelize = require('../config/connection');
const { User, Gamepiece, Questions } = require('../models');

const userData = require('./user.json');
const gamepieceData = require('./gamepieces.json');
const questionData = require('./questions.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const gamepieces = await Gamepiece.bulkCreate(gamepieceData, {
        individualHooks: true,
        returning: true,
    })

    const questions = Questions.bulkCreate(questionData);

    for (const user of userData) {
        await User.create({
            ...user,
            gamepiece_id: gamepieces[Math.floor(Math.random() * user.length)],
        });
    };
    
    process.exit(0);
}

seedDatabase();
