const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { ARRAY, Sequelize } = require('sequelize');
const Company = (sequelize, DataTypes) => {
    const Companys = sequelize.define('Companys', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true

            }
        },
        phone: {
            type: DataTypes.NUMERIC,
            allowNull: false
        },
        password: {
            type: DataTypes.TEXT,
            allowNull: false
        }


    }
    )
    Companys.addHook('beforeSave', (Company, option) => {
        const salt = bcryptjs.genSaltSync();
        Company.password = bcryptjs.hashSync(Company.password, salt);

    });
    // Companys.prototype.text = function () {
    //     console.log("hello");
    // }

    return Companys;
}

module.exports = Company;
