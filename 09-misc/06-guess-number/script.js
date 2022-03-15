// 09-misc/06-guess-number/script.js - 9.6: guess the number

(() => {

    // your code here
    const randNumber=()=>{
        return Math.floor(Math.random()*101);
    }
    const mysteryNumber = randNumber();
    console.log(mysteryNumber)
    let guess = 0;


    do {
        let input = parseInt(prompt(`Enter a number to guess : `));
    console.log(input);
        guess++;

        if (input < mysteryNumber) {
            alert(`Its too low !`);
        } else if (input > mysteryNumber && input <= 100) {
            alert(`Its too high !`);
        } else if (input === mysteryNumber) {
            alert(`That's it ! you needed ${guess} guesses :)`);
        } else {
            alert(`You are out of number`);
        }

    } while(input !== mysteryNumber);
})();
