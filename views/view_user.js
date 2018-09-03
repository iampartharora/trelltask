function UserStruc(UserDBStruc){
      displayuser = {
      "user_id" : UserDBStruc.id,
      "user_name": UserDBStruc.name,
      "user_image": UserDBStruc.image
    }
   return (displayuser);
  }
module.exports = {UserStruc};
