var db = require("./dbhandler.js");
var express = require("express");
var bodyParser = require("body-parser");

const views = require("./views/index_view.js");
const models = require("./models/index_model.js");


var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // support json encoded bodies

app.set('port', process.env.PORT || 7777);

  const server = app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

app.get('/user/read/:userHandle?',function(req,res){
  if (!req.params.userHandle) {
     res.status(400).send({"status":"failed", "reason":"userHandle is missing" });
     return;
   }
   else {
       models.mUsers.readOne(req.params.userHandle,function(userRow){
          res.setHeader("Content-Type", "application/json");
          if(userRow != null && userRow != "0"){
          res.status(200).send(JSON.stringify({"status": "success", "data" : views.user.UserStruc(userRow) }));
         }
         else if( userRow == null)
          {
            res.status(400).send(JSON.stringify({"status": "failed", "reason": "User doesn't exist!" }));
          }
          else{
            res.status(400).send(JSON.stringify({"status": "failed", "reason": "Database Error!" }));
          }
       });
   }
});

app.get('/posts/read/:userId?',function(req,res){
  if (!req.params.userId) {
    res.status(400).send({"status":"failed", "reason":"userId is missing" });
    return;
   }
   else {
       models.mPosts.read(req.params.userId,function(postRow){
          res.setHeader("Content-Type", "application/json");
          if(postRow.length !== 0 && postRow != "0"){
          res.status(200).send(JSON.stringify({"status": "success", "data" : views.post.PostStruc(postRow) }));
         }
         else if (postRow.length == 0)
          {
            res.status(400).send(JSON.stringify({"status": "failed", "reason": "User doesn't exist!" }));
          }
          else{
            res.status(400).send(JSON.stringify({"status": "failed", "reason": "Database Error!" }));
          }
       });
   }
});
