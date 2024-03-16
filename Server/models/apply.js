const { ARRAY, Sequelize } = require('sequelize');
const Apply = (sequelize, DataTypes) => {
    const Applys = sequelize.define('Applys', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });
    // Applys.prototype.text = function () {
    //     console.log("hello");
    // }

    return Applys;
}

module.exports = Apply;
