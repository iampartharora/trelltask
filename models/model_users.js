const Sequelize = require('sequelize');
const sequelize = require('../dbhandler.js');
const user = sequelize.import('../db_model_schemas/user.js');

function readOne(userHandle, callback){
  user.findOne({
   where:{
       userHandle: userHandle
    }
  }).then( Users => {
      callback(Users);
  }).catch(function(err){
      console.log(err);
      callback("0");
  });
}

module.exports = {readOne}
