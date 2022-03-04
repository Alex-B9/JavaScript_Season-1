
// 03-colors/02-change-bcg-two/script.js - 3.2: Bcg 2

(() => {

    // your code here
    function changeBackground(){
        let color = document.getElementById("color").value;

        document.bgColor = color;
    }
    document.getElementById("run").addEventListener("click", changeBackground, false);
})();
