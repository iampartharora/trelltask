const Sequelize = require('sequelize');
const sequelize = require('../dbhandler.js');

module.exports = (sequelize, DataTypes) => {
 return sequelize.define("user",
 {
   id:{ type: Sequelize.INTEGER , autoIncrement : true , primaryKey : true},
   image : Sequelize.STRING,
   name : Sequelize.STRING,
   userHandle : Sequelize.STRING
 }, {
   timestamps: false
 });
}
