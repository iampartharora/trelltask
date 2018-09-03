const Sequelize = require('sequelize');
const sequelize = require('../dbhandler.js');

module.exports = (sequelize, DataTypes) => {
  const likes = sequelize.define("like",
  {
    postId : Sequelize.INTEGER,
    likedby : Sequelize.STRING
  }, {
    timestamps: false
  });

  likes.associate = function (models) {
    likes.belongsTo(models.posts,{foreignKey: 'postId'});
  };

  return likes
}
