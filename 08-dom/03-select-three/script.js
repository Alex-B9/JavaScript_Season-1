// 08-dom/03-select-three/script.js - 8.3: select multiple elements by css selector


(() => {

    // your code here

    let elm=document.querySelectorAll(".target");
    elm.forEach((a)=>{
        a.textContent=" Owned "
    })

})();
