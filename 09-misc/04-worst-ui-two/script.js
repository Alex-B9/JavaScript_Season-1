// 09-misc/04-worst-ui-two/script.js - 9.4: worst user interface (2) : phone clicker


(() => {

    // your code here
    let bt1 = document.getElementById('part-one');
    let bt2 = document.getElementById('part-two');
    let bt3=document.getElementById('part-three');
    let bt4=document.getElementById('part-four');
    let target = document.getElementById('target');
    let show= "+" + bt1.textContent+bt2.textContent+bt3.textContent+bt4.textContent;
    target.textContent=show;

    bt1.addEventListener('click',()=>{
        let val=parseInt(bt1.textContent);
        let nwval=(bt1.textContent = val +1)
        let valshow = '';
        valshow=`${nwval}`;
        if(val===parseInt(bt1.getAttribute('data-max')))return;
        show = `"+"${valshow}${bt2.textContent}${bt3.textContent}${bt4.textContent}`;
        bt1.textContent=nwval;
        target.textContent=show;
    });
    bt2.addEventListener('click',()=>{
        let val=parseInt(bt2.textContent);
        let nwval=(bt2.textContent=val +1);
        let valshow='';
        if(nwval<10){
            valshow = `0${nwval}`;
        }else{
            valshow=nwval;
        }
        if (val===parseInt(bt2.getAttribute('data-max')))return;
        show=`+${bt1.textContent}${valshow}${bt3.textContent}${bt4.textContent}`;
        bt2.textContent=nwval;
        target.textContent=show;
    });
    bt3.addEventListener('click',()=>{
        let val=parseInt(bt3.textContent);
        let nwval=(bt3.textContent=val +1);
        let valshow='';
        if(nwval<10){
            valshow = `0${nwval}`;
        }else{
            valshow=nwval;
        }
        if (val===parseInt(bt3.getAttribute('data-max')))return;
        show=`+${bt1.textContent}${bt2.textContent}${valshow}${bt4.textContent}`;
        bt3.textContent=nwval;
        target.textContent=show;
    });
    bt4.addEventListener('click',()=>{
        let val=parseInt(bt4.textContent);
        let nwval=(bt4.textContent=val +1);
        let valshow='';
        if(nwval<10){
            valshow = `0${nwval}`;
        }else{
            valshow=nwval;
        }
        if (val===parseInt(bt4.getAttribute('data-max')))return;
        show=`+${bt1.textContent}${bt2.textContent}${bt3.textContent}${valshow}`;
        bt4.textContent=nwval;
        target.textContent=show;
    });

})();
