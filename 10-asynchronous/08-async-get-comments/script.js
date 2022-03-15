// 10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)


(() => {
    // your code here
    document.getElementById(`run`).addEventListener(`click`, () => {
       async function post(){
           await window.lib.getPosts().then(article => {
               article.forEach(e => {
                   window.lib.getComments(e.id).then(comments => {
                      comments.forEach(el => {
                          article[e.id].comment=el;
                      }) ;
                   });
                    console.log(e);
               });
           });
       }
        post();
    });
})();
