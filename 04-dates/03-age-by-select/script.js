
// 04-dates/03-age-by-select/script.js - 4.3: calculate the age


    (function() {
        
        
        
        // your code here

        document.getElementById("run").addEventListener("click", event => {
            const dobDay = document.getElementById("dob-day").value;
            const dobMonth = document.getElementById("dob-month").value;
            const dobYear = document.getElementById("dob-year").value;
            const formatDob = dobMonth + "/" + dobDay + "/" +dobYear;
        
            const dateToday = new Date();
            const dateOfBirth = new Date(formatDob);
        
        
            const diff = dateToday.getTime() - dateOfBirth.getTime();
            const age = Math.floor(diff / 1000 / 60 / 60 /24/365.25);
            
            alert(age);
    
    
        })
})();
