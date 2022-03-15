// 10-asynchronous/06-promise-handling-errors/script.js - 10.6: gestion d'erreur (Promise)


(() => {
    // your code here
    document.getElementById(`run`).addEventListener(`click`, () => {
        window.lib.getPersons().then(value => {
            value.forEach(e => {
                console.log(e.name);
            });

        })
            //Catch is the method used when your promise has been rejected.
            //It is executed immediately after a promise's reject method is called.
            .catch(err => {
                console.log(err);
            })
    })
})();
