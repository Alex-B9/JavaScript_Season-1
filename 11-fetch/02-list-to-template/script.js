

(() => {
    // your code here
    document.getElementById(`run`).addEventListener(`click`, () => {
        fetch('http://localhost:3000/heroes')
            .then((response) => response.json())
            .then((data) => {
                data.forEach((d) => {
                    // console.log(data)
                    let tpl = document.getElementById('tpl-hero');
                    let clone = document.importNode(tpl.content, true);
                    let h4 = clone.querySelector('h4');
                    h4.innerHTML = `<strong class="name">${d.name}</strong>
                                    <em class="alter-ego">${d.alterEgo}</em>`;
                    let p = clone.querySelector('p');
                    p.textContent = `${d.abilities}`;

                    document.getElementById('target').appendChild(clone);
                })
            })
    });
})();
