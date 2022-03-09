// 09-misc/05-worst-ui-three/script.js - 9.5: worst user interface (3) : phone slot

(() => {

    // your code here
    let time1,time2,time3,time4;
    let inp_1=document.getElementById('part-one');
    let stop_1=document.getElementById('fix-part-one');
    let inp_2=document.getElementById('part-two');
    let stop_2=document.getElementById('fix-part-two');
    let inp_3=document.getElementById('part-three');
    let stop_3=document.getElementById('fix-part-three');
    let inp_4=document.getElementById('part-four');
    let stop_4=document.getElementById('fix-part-four');
    
    let target = document.getElementById('target');
    let show = `+${inp_1.value}${inp_2.value}${inp_3.value}${inp_4.value}`;
    target.textContent=show;


    let min1=inp_1.getAttribute('data-min');
    let max1=inp_1.getAttribute('data-max');
        
    display1(inp_1,min1,max1);
    stop_1.addEventListener('click',()=>{
        clearTimeout(time1);

        let value=parseInt(inp_1.value);

        show=`+${value}${inp_2.value}${inp_3.value}${inp_4.value}`;
        target.textContent=show;
    });
    let min2=inp_2.getAttribute('data-min');
    let max2=inp_2.getAttribute('data-max');
        
    display2(inp_2,min2,max2);
    stop_2.addEventListener('click',()=>{
        clearTimeout(time2);

        let value=parseInt(inp_2.value);

        show=`+${inp_1.value}${value}${inp_3.value}${inp_4.value}`;
        target.textContent=show;
    });
    // let min3=inp_3.getAttribute('data-min');
    // let max3=inp_3.getAttribute('data-max');
        
    // display3(inp_3,min3,max3);
    // stop_3.addEventListener('click',()=>{
    //     clearTimeout(time3);

    //     let value=parseInt(inp_3.value);
    //     let newval= (inp_1.textContent=value);
    //     let valshow='';
    //     valshow=newval;

    //     show=`+${inp_1.value}${inp_2.value}${valshow}${inp_4.value}`;
    //     target.textContent=show;;
    // });
    // let min4=inp_4.getAttribute('data-min');
    // let max4=inp_4.getAttribute('data-max');
        
    // display4(inp_4,min4,max4);
    // stop_4.addEventListener('click',()=>{
    //     clearTimeout(time4);

    //     let value=parseInt(inp_4.value);
    //     let newval= (inp_4.textContent=value);
    //     let valshow='';
    //     valshow=newval;

    //     show=`+${inp_1.value}${inp_2.value}${inp_3.value}${valshow}`;
    //     target.textContent=show;;
    // });

    function display1(inp,min,max) {
        let value = parseInt(inp.value);
        
		if (value < max) {
            inp.value = value + 1;
			time1 = setTimeout(() => {
                display1(inp, min, max);
			}, 50);
		} else {
            inp.value = min;
			time1 = setTimeout(() => {
                display1(inp, min, max);
			}, 50);
		}
	};
    function display2(inp,min,max) {
        let value = parseInt(inp.value);
        
		if (value < max) {
            inp.value = value + 1;
			time1 = setTimeout(() => {
                display2(inp, min, max);
			}, 50);
		} else {
            inp.value = min;
			time1 = setTimeout(() => {
                display2(inp, min, max);
			}, 50);
		}
	};
    function display3(inp,min,max) {
        let value = parseInt(inp.value);
        
		if (value < max) {
            inp.value = value + 1;
			time1 = setTimeout(() => {
                display3(inp, min, max);
			}, 50);
		} else {
            inp.value = min;
			time1 = setTimeout(() => {
                display3(inp, min, max);
			}, 50);
		}
	};
    function display4(inp,min,max) {
        let value = parseInt(inp.value);
    
        if (value < max) {
            inp.value = value + 1;
            time1 = setTimeout(() => {
                display4(inp, min, max);
            }, 50);
        } else {
            inp.value = min;
            time1 = setTimeout(() => {
                display4(inp, min, max);
            }, 50);
        }
    };
})();
