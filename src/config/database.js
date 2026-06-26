const { underscoredIf } = require("sequelize/lib/utils");

module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'admin',
    database: 'tasklis',
    define: {
        timestamps: true,
        underscored: true,
        uderscoredAll: true
    }
};

