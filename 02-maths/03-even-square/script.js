// 02-maths/03-even-square/script.js - 2.3: squares and pairs

(() => {
  document.getElementById("run").addEventListener("click", () => {
    // your code here
    const array = [];
    for(let i=1;i<22;i++){
        let x=Math.pow(i,2);
        array.push(x);
    }
    alert(array);

    
  });

})();