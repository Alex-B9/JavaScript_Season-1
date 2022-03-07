// 08-dom/12-change-event-input-two/script.js - 8.12: change event (2)


(() => {

    // your code here
    const pass = document.getElementById('pass-one');
    const regex = new RegExp("^(?=.*?\\d.*\\d)[a-zA-Z0-9]{8,}$");
    let valid= document.getElementById('validity');

    pass.addEventListener('input', (event)=>{
        let vlr=event.target.value;
        if(!vlr.match(regex)){
            valid.textContent="Not ok"
        }else{
            valid.textContent="ok"
        }
    });

})();
