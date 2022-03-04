
// 02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    let x=0;
    let y=0;
    const performOperation = operation => {
        switch(operation){
            case "addition" : 
            //addition

                 x = new Number(document.getElementById("op-one").value);
                 y = new Number(document.getElementById("op-two").value);
                console.log(x);
                return alert(x+y);
                break;
            case "substraction" : 
            //substraction
                 x = new Number(document.getElementById("op-one").value);
                 y = new Number(document.getElementById("op-two").value);
                return alert(x-y);
                break;
            case "multiplication" : 
            //multiplication
                 x = new Number(document.getElementById("op-one").value);
                 y = new Number(document.getElementById("op-two").value);
                return alert(x*y);
                break;
            case "division" : 
            //division
                 x = new Number(document.getElementById("op-one").value);
                 y = new Number(document.getElementById("op-two").value);
                return alert(x/y);
                break;
            
        }
        // perform the operation
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
