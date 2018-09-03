function PostStruc(PostDBStruc){
  displaypost=[];
    for(row in PostDBStruc){
      data ={
      "post_id" : PostDBStruc[row].id,
      "post_image": PostDBStruc[row].image,
      "post_caption": PostDBStruc[row].caption,
      "post_createdAt": PostDBStruc[row].createdAt,
      "post_likes": PostDBStruc[row].likes,
      "post_comments": PostDBStruc[row].comments
       }
     displaypost.push(data);
     }
   return (displaypost);
  }
module.exports = {PostStruc};
