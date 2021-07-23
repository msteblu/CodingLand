const sequelize = require('../config/connection');
const { User, Gamepiece, Questions } = require('../models');

const userData = require('./user.json');
const gamepieceData = require('./gamepieceData.json');
const questionData = require('./questions.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    })

    for (const questions of questionData) {
        await Questions.create({
            ...questions,
            user_id: users[Math.floor(Math.random() * users.length)].id,
        });
    };

    for (const gamepiece of gamepieceData) {
        await Gamepiece.create({
            ...gamepiece,
            user_id: users[Math.floor(Math.random() * users.length)].id,
        });
    };
    
    process.exit(0);
}

seedDatabase();
