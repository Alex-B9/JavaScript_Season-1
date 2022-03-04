
// 02-maths/05-factorial/script.js - 2.5: Factorial

(() => {
    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {
    // your code here
    let b= parseInt(document.getElementById("number").value);
    let fac =1;
    for (let i=1 ;i < b + 1; i++){
        fac = fac *i;
    }
    alert(fac);
});
})();
// function factorielle(a){
    // return fac;
// }
