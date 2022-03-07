// 09-misc/03-worst-ui-one/script.js - 9.3: worst user interface (1) : phone slider


(() => {

    // your code here
    let x = document.getElementById('slider');
    document.getElementById('slider').addEventListener('change',()=>{
        document.getElementById('target').textContent= 0 +x.value;
    });
})();
