// 08-dom/04-attr-create/script.js - 8.4: manipulating attributes and creating elements


(() => {

    // your code here
    let img = document.createElement("img");
    img.src = "http://www.randomkittengenerator.com/cats/rotator.php";
    let block = document.getElementById("source");
    block.appendChild(img);
})();
