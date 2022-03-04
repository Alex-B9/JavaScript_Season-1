
// 04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13


(() => {

    // your code here
    document.getElementById("run").addEventListener("click", () => {
        const date = new Date();
        let counter = 0;
        let month;
        let year = document.getElementById("year").value;
        for (month = 0; month < 12; month++){
            date.setFullYear(year, month, 13);
            if (date.getDay() ===5){
                counter++;
            }
        }
        alert(counter);
    })                         
                               
    
})();
