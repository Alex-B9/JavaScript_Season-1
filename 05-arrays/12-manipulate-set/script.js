// 05-arrays/12-manipulate-set/script.js - 5.12: manipulation of a Set


(() => {
    const fruits = new Set([
        "apple",
        "pear",
        "strawberry",
        "tomato",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grape",
        "cherry",
    ]);

    // your code here
    console.log(fruits);
    document.getElementById("run").addEventListener("click", ()=>{

        fruits.delete("apple");
        fruits.delete("cherry");
        fruits.add("kiwi");
        fruits.add("banane");
        console.log(fruits);
    })
})();
