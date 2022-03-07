// 08-dom/10-match-password-two/script.js - 8.10: password verification (2)


(() => {

    // your code here
    let bt = document.getElementById('run');
    bt.addEventListener('click',()=>{
        let in_1=document.getElementById('pass-one');
        let in_2=document.getElementById('pass-two');
        if (in_1.value !== in_2.value){
            in_2.classList.add('error');
        }
    });
})();
