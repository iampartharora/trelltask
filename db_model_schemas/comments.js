const Sequelize = require('sequelize');
const sequelize = require('../dbhandler.js');

module.exports = (sequelize, DataTypes) => {
  const comments = sequelize.define("comment",
  {
    postId : Sequelize.INTEGER,
    commentby : Sequelize.STRING,
    comment_text : Sequelize.STRING
  },{
    timestamps: false
  });

  comments.associate = function (models) {
    comments.belongsTo(models.posts,{foreignKey: 'postId'});
  };

  return comments
}
