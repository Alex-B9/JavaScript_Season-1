// 08-dom/09-match-password-one/script.js - 8.9: password verification (1)


(() => {

    // your code here
    let bt = document.getElementById('run');
    bt.addEventListener('click', () => {
        let in_1=document.getElementById('pass-one');
        let in_2=document.getElementById('pass-two');
        if(in_1.value === in_2.value){
            in_1.style.borderColor = 'green';
            in_2.style.borderColor = 'green';
        }else{
            in_1.style.borderColor = 'red';
            in_2.style.borderColor = 'red';

        }
    });
})();
