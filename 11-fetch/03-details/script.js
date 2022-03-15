// 11-fetch/03-details/script.js - 11.3: details


(() => {
    // your code here
    document.getElementById(`run`).addEventListener(`click`, () => {
        let id = parseInt(document.getElementById('hero-id').value);
        fetch('http://localhost:3000/heroes')
            .then((response) => response.json())
            .then((data) => {
                data.forEach((d) => {
                    if (id === d.id){
                        // console.log(data)
                        let tpl = document.getElementById('tpl-hero');
                        let clone = document.importNode(tpl.content, true);
                        let h4 = clone.querySelector('h4');
                        h4.innerHTML = `<strong class="name">${d.name}</strong>
                                        <em class="alter-ego">${d.alterEgo}</em>`;
                        let p = clone.querySelector('p');
                        p.textContent = `${d.abilities}`;

                        document.getElementById('target').appendChild(clone);
                    }
                });
            });
    });
})();
