// 08-dom/11-change-event-input-one/script.js - 8.11: change event (1)


(() => {

    // your code here
    let pass = document.getElementById('pass-one');
    let count = document.getElementById('counter');
    let maxLength = 10;
    pass.setAttribute('maxLength',maxLength);
    pass.addEventListener('input',()=>{
        count.innerText=`${pass.value.length}/${maxLength}`;
    })
})();
