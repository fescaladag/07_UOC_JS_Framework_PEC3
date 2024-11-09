"use strict";
//Sustituye /***/ por las instrucciones adecuadas que cumplan las operaciones 
//y salidas indicadas en los comentarios.
class Animal {
    constructor() {
        //cada vez que se crea un animal se incrementa la población
        ++Animal.population;
    }
}
Animal.population = 0;
class Dog extends Animal {
    constructor(color) {
        super(); //invoca al constructor de la clase Animal
        this.color = color;
    }
    sound() {
        console.log("WOW"); // Ladrido
    }
    iamadog() {
        console.log('yes, this is a dog');
    }
}
class Cat extends Animal {
    constructor(gender) {
        super(); //invoca al constructor de la clase Animal
        this.gender = gender;
    }
    sound() {
        console.log("MEOW"); // Maullido
    }
    iamacat() {
        console.log('yes, this is a cat');
    }
}
let animals = [];
animals.push(new Cat('male'));
animals.push(new Dog('white'));
animals.push(new Cat('female'));
animals.push(new Dog('black'));
for (let animal of animals) {
    animal.sound(); // Llama al método sound() para emitir el sonido

    //No sabemos si la iteración actual es 'Dog' o 'Cat'
    //..y se debería de saber ya que usan cada clase usa metodos especificos (iamacat no está definido en 'Dog' y viceversa)
    //para solucionarlo se puede hacer:

    if ('iamacat' in animal) {
        //Si la instancia actual contiene el método 'iamacat()' es 'Cat'
        // portanto llamamos al método que corresponde
        animal.iamacat();
       
        //Otra forma de hacerlo es mediante 'instanceof' que verifica directamente si animal es una instancia de 'Dog'
        //Ojo!! es código Javascritp, no podríamos usar 'instanceof' si tuviesemos una interface (que no se compila a Js)
    }
    else if (animal instanceof Dog) {
        //(animal as Dog).iamadog(); // Llama al método iamadog() si es un Dog
        animal.iamadog();
    }
}
/**  loop prints these lines
MEOW
yes, this is a cat
WOW
yes, this is a dog
MEOW
yes, this is a cat
WOW
yes, this is a dog
*/
console.log(Animal.population); //4
