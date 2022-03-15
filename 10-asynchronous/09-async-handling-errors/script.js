// 10-asynchronous/09-async-handling-errors/script.js - 10.9: gestion d'erreur (async/await)


(() => {
    // your code here
    document.getElementById('run').addEventListener('click', () => {
        window.lib.getPersons().then(async (persons) => {
                await persons.forEach(person => {
                    console.log(person);
                });
            })
            .catch(err => console.error(err));
    });
})();
