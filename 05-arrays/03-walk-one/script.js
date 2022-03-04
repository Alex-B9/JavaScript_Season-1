// 05-arrays/01-get-element/script.js - 5.1: walk through the list


(() => {

    let fruits = [
        "apple",
        "pear",
        "raspberry",
        "tomatos",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peache",
        "grap",
        "cherry",
    ];
    // your code 
    document.getElementById("run").addEventListener("click", ()=>{

        for(const element of fruits){
            console.log(element);
        }
    })
})();
