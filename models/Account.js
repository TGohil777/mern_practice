module.exports = (sequelize, DataTypes) => {
    const Account = sequelize.define('Account', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        FirstName : {
            type : DataTypes.STRING,
            allowNull: false
        },
        LastName : {
            type : DataTypes.STRING,
            allowNull: false
        },
        UserName : {
            type : DataTypes.STRING,
            allowNull: false
        },
        Email : {
            type : DataTypes.STRING,
            allowNull: false
        },
        City : {
            type : DataTypes.STRING,
            allowNull: false
        },
        Password : {
            type : DataTypes.STRING,
            allowNull: false
        },
        CreatedAt : {
            type: DataTypes.DATE
        },
        UpdatedAt: {
            type: DataTypes.DATE
        }   
    })

    return Account;
}
// const Sequelize = require('sequelize')
// const db = require('../config/database')

// const Account = db.define('Account' , {
//     id: {
//         type: Sequelize.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//     },
//     FirstName : {
//         type : Sequelize.STRING,
//         allowNull: false
//     },
//     LastName : {
//         type : Sequelize.STRING,
//         allowNull: false
//     },
//     UserName : {
//         type : Sequelize.STRING,
//         allowNull: false
//     },
//     Email : {
//         type : Sequelize.STRING,
//         allowNull: false
//     },
//     City : {
//         type : Sequelize.STRING,
//         allowNull: false
//     },
//     Password : {
//         type : Sequelize.STRING,
//         allowNull: false
//     },
//     CreatedAt : {
//         type: Sequelize.DATE
//     },
//     UpdatedAt: {
//         type: Sequelize.DATE
//     }   
// })

// module.exports = Account;