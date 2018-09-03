const Sequelize = require('sequelize');
const sequelize = require('../dbhandler.js');

module.exports = (sequelize, DataTypes) => {
 const Post =  sequelize.define("post",
  {
    id:{ type: Sequelize.INTEGER , autoIncrement : true , primaryKey : true},
    image : Sequelize.STRING,
    caption : Sequelize.STRING
  });

  Post.associate = function (models) {
    Post.hasMany(models.likes,{foreignKey: 'postId'});
  };

  return Post
}
