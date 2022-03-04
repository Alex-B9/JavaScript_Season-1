
// 02-maths/01-calculator-one/script.js - 2.1: calculator1

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function() {
        let x = new Number(document.getElementById("op-one").value);
        let y = new Number(document.getElementById("op-two").value);
        return alert(x + y); 
        // perform an addition
    });

    document.getElementById("substraction").addEventListener("click", function() {
        let x = new Number(document.getElementById("op-one").value);
        let y = new Number(document.getElementById("op-two").value);
        return alert(x - y);
        // perform an substraction
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        let x = new Number(document.getElementById("op-one").value);
        let y = new Number(document.getElementById("op-two").value);
        return alert(x * y);
        // perform an multiplication
    });

    document.getElementById("division").addEventListener("click", function() {
        let x = new Number(document.getElementById("op-one").value);
        let y = new Number(document.getElementById("op-two").value);
        return alert(x / y);
        // perform an division
    });
})();

 