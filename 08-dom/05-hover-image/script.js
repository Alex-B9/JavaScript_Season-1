// 08-dom/05-hover-image/script.js - 8.5: image hover


(() => {

    // your code here
    let img=document.querySelector('img');
    let start = img.src;
    let hover=img.getAttribute('data-hover');
    img.onmouseover=()=>{img.src=hover;}
    img.onmouseout=()=>{img.src=start;}
})();
