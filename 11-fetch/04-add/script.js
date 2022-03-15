// 11-fetch/04-add/script.js - 11.4: ajouter un élément


(() => {
    // your code here
    document.getElementById('run').addEventListener('click', () => {
        const url = 'http://localhost:3000/heroes';
        let name = document.getElementById('hero-name').value;
        let alterEgo = document.getElementById('hero-alter-ego').value;
        let power = document.getElementById('hero-powers').value.split(', ');

        let data = {
            name: name,
            alterEgo: alterEgo,
            abilities: power,
        };
        let fetchData = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        };
        fetch(url, fetchData);

        console.log(data);
    });
})();
