// 11-fetch/01-list-to-console/script.js - 11.1: liste vers console


(() => {
    // your code here
    document.getElementById('run').addEventListener('click', () => {
        fetch('http://localhost:3000/heroes')
            .then((response) => response.json()) //1ère promesse qui réccupère les données du lien et les transformes en fichier json
            .then(data => {                             //2ème promesse qui envoies les données json dans la console
                data.forEach(d => {
                    console.log(d);
                });
            });
    });
})();
