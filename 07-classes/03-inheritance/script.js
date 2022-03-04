// 07-classes/03-inheritance/script.js - 7.3: inheritance


(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    // your code here
    class Cat extends Animal{
        constructor(name){
            super(name);
            this.name=name;
        }
        static greeting = " Hello ";
    }
    let catou = Cat.greeting;
    let catou1 = new Cat("Cathy").sayHello(catou)
    class Dog extends Animal{
        constructor(name){
            super(name);
            this.name=name;
        }
        static greeting = " Hello ";
    }
    let dog1 = Dog.greeting;
    let dogi1= new Dog("Chicon").sayHello(dog1);
    document.getElementById("run").addEventListener("click", ()=>{
        console.log(dogi1 + "\n " + catou1);
    })
})();
