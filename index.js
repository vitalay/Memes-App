

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    sayHi() {
        console.log(this.name);
    }
}

 const sergey = new Person("sergey", 25);
 const pavel =  new Person("pavel", 30);


sergey.sayHi(); // Вывод: "sergey"
pavel.sayHi();  // Вывод: "pavel"
// function  Person(name, age) {
//     return {
//         name,
//         age,
//         getName: function() {
//             this.name
//         },
//         sayHi: function() { // Используем обычную функцию
//             console.log(this.name);
//         }
//     }
// }

// const sergey = Person("sergey", 25);
// const pavel = Person("pavel", 30);
