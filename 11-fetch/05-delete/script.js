// 11-fetch/05-delete/script.js - 11.5: supprimer un élément


(() => {
    // your code here
    document.getElementById(`run`).addEventListener(`click`, () => {
        let id = parseInt(document.getElementById(`hero-id`).value);

        fetch('http://localhost:3000/heroes/' + id,{
            method:'DELETE',
        })
            .then (response => response.text())
            .then(response => console.log(response));
    });
})();
