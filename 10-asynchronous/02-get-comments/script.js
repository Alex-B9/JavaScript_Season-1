// 10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires


(() => {
    // your code here
    document.getElementById(`run`).addEventListener(`click`, ()=>{
        window.lib.getPosts((error, article)=>{
            if (error != null){
                return console.log(`error`);
            }else{
                article.forEach(e => {
                    window.lib.getComments(e.id /*index*/, (error2, comments) => {
                      if (error2 != null){
                          return console.log('error 2');
                      }  else {
                          comments.forEach(el => {
                              article[e.id].comment = el;
                          });
                      }
                    });
                    console.log(e);
                });
            }
        });
    });
})();
