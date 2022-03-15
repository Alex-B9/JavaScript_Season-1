// 10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)


(() => {
    // your code here
    document.getElementById(`run`).addEventListener(`click`, () => {
        window.lib.getPosts().then(article => {
            article.forEach(e => {
                window.lib.getComments(e.id).then(comments => {
                    comments.forEach(el => {
                        article[e.id].comment = el;
                    });
                });
                console.log(e);
            });
        });
    });
})();