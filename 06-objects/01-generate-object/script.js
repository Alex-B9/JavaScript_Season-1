// 06-objects/01-generate-object/script.js - 6.1: genererate an object


(() => {
    // your code here
    document.getElementById("run").addEventListener("click", ()=>{
        let moi={
            firstname : "Alex",
            lastname: "B",
            age: 24,
            city: "M-s-M",
            country: "Belgium",

        }
        console.log(moi);
    })
})();
