// 09-misc/02-typewriter-effect/script.js - 9.2: typewriter effect


(() => {

    // your code here
    let i=0;
    let target = document.getElementById('target');
    let txt = target.innerHTML;
    target.innerHTML='';
    let speed = 75;
    typeWriter();
    function typeWriter(){
        if (i<txt.length){
            target.innerHTML+=txt.charAt(i);
            i++;
            setTimeout(typeWriter,speed);
        }
    }

})();
