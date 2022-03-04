
// 04-dates/02-title-by-hour-two/script.js - 4.2: text according to the hour (2)


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    const today = new Date();
    const curHr = today.getHours();
    const curMn = today.getMinutes();
    if (curHr < 17 && curMn < 30){
        document.getElementById("target").innerHTML = "Good morning";
    }else{
        document.getElementById("target").innerHTML = "Good evening";
    }
})();
