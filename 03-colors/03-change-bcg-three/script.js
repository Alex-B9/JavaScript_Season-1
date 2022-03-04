
// 03-colors/03-change-bcg-three/script.js - 3.3: background color (3)


(() => {

    // your code here
    function random_bg_color(){

        let rgbColor;
        red = Math.floor(Math.random() * 250 + 0 );
        green = Math.floor(Math.random() * 250 + 0);
        blue = Math.floor(Math.random() * 250 + 0);

        rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
        document.body.style.background = rgbColor;


        red = ("0" + red.toString(16)).substr(-2).toUpperCase();
        green = ("0" + green.toString(16)).substr(-2).toUpperCase();
        blue = ("0" + blue.toString(16)).substr(-2).toUpperCase();


        }
        document.getElementById("run").addEventListener("click", random_bg_color, false );
})();
