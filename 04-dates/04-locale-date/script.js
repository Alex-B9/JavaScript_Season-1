
// 04-dates/04-locale-date/script.js - 4.4: textual date


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    const today = new Date();
    let option = {weekday :'long', year:'numeric', month:'long', day: 'numeric'};
    let date = today.toLocaleDateString("en",option);
    let curHr = today.getHours();
    let curMn = today.getMinutes();

    document.getElementById("target").innerHTML = date + " " + curHr + "h" +curMn;


})();
