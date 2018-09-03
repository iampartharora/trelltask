const Sequelize = require('sequelize');
const sequelize = require('../dbhandler.js');
const post = sequelize.import('../db_model_schemas/post.js');
const likes = sequelize.import('../db_model_schemas/likes.js');
const comments = sequelize.import('../db_model_schemas/comments.js');

function read(userId, callback){
  post.findAll({
    // can be done directly using joins for a single case i.e. either with likes or comments,
    // for both of them together forEach and Promises are used.

    // if joins are used
    // attributes: {
    //     include: [[Sequelize.fn("COUNT", Sequelize.col("likes.postId")), "totallikes"]]
    // },
    // include: [{
    //     model: likes, attributes: [], required: true
    // }],
    // group: ['post.id'],
   where:{
       userId: userId
    }
  }).then( Posts => {
    likesAndComments(Posts,function(PostsWithLC){
      callback(PostsWithLC);
    });
  }).catch(function(err){
      console.log(err);
      callback("0");
  });
}

function likesAndComments(Posts,callback){
  var promise = [];
  Posts.forEach(function(post1){
    promise.push(likes.count({ where: {postId: post1.id }}).then(count => { post1.likes = count }));
    promise.push(comments.count({where: {postId: post1.id }}).then(count => {post1.comments = count}));
  });
  Promise.all(promise).then( result => { callback(Posts); });
}

module.exports = {read}
