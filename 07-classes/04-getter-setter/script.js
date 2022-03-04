// 07-classes/04-getter-setter/script.js - 7.4: getter & setter


(() => {
    // your code here~
    class Person{
        constructor(firstname,lastname){
            this.firstname=firstname;
            this.lastname=lastname;
        }
        getter(){
            return `${this.firstname} ${this.lastname}`;
        }
        setter(){
            return this.getter().split(" ");
        }
    }
    document.getElementById("run").addEventListener("click",()=>{
        perun= new Person("Jean","Sépa");
        pereux= new Person("Louis","Nonplu");
        console.log(perun);
        console.log(pereux);
    })
})();
