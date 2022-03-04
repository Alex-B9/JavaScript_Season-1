// 05-arrays/09-rand-array-stats/script.js - 5.9: random & statistics array

(() => {

    // your code here

    const random=(n)=>{
        let arr =[]; 
        for (let i=0;i<n;i++){
            arr.push(Math.floor(Math.random()*101))
        }
        return arr;
    };
    const avg=(arr)=> {
        let i = 0, summ = 0, ArrayLen = arr.length;
        while (i < ArrayLen) {
            summ = summ + arr[i++];
        }
        return summ / ArrayLen;
    };
    const sum = (arr) => {
        let sum = 0;
    
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
    
        return sum;
    };
    document.getElementById("run").addEventListener("click", ()=>{
        let arra=[];
        let i=0;
        Array.from(document.getElementsByTagName("td")).forEach(elm=>{
            arra.push(Math.floor(Math.random()*101));
            elm.innerHTML=arra[i];
            i++;
        })
        document.getElementById("min").innerHTML = Math.min(...arra);
        document.getElementById("max").innerHTML = Math.max(...arra);
        document.getElementById("sum").innerHTML = sum(arra);
        document.getElementById("average").innerHTML = avg(arra);
    });
})();