// 05-arrays/02-manipulate-array/script.js - 5.2: manipulate array

(() => {

    let fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];
    document.getElementById("run").addEventListener("click", ()=>{
        console.log(fruits);
        fruits.pop();
        fruits.shift();
        fruits.unshift("banane")
        fruits.push("kiwi");
        console.log(fruits);
    })

    // your code here

})();
