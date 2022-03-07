// 08-dom/06-mini-carousel/script.js - 8.6: mini carousel


(() => {

    let gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    // your code here
    let next=1;
    let img=document.querySelector('img');
    document.getElementById("next").addEventListener("click",()=>{
        let nextimg=gallery[next];
        if(next === gallery.length){
            return(next=0);
        }
        img.setAttribute("src",nextimg);
        next++;
    });
})();
