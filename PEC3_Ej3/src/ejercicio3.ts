//Sustituye /***/ por las instrucciones adecuadas que cumplan las operaciones 
//y salidas indicadas en los comentarios.

abstract class Animal {
    static population: number = 0;
    constructor() {
        
        //cada vez que se crea un animal se incrementa la población
        ++Animal.population;
    }

    //La clase animal tiene la propiedad común de emitir un sonido, pero ha de ser personalizada para cada instancia que se cree
    //es decir, todos los animales emitén un sonido, pero ese sonido es diferente dependiendo del animal. Para poder personalizar esta propiedad según el caso se usa la palabra 'abstract'
    //al definir la propiedad como 'abstract', se obliga a que cada clase derivada de la clase principal sobreescriba la propiedad 
    //Si no implementamos alguno de los métodos abstractos de una clase abstracta, se genera un error de compilación
    public abstract sound(): void;
}



class Dog extends Animal {
    color: string;

    constructor(color:string){
        super(); //invoca al constructor de la clase Animal
        this.color = color;
    }


    public sound() {
        console.log("WOW"); // Ladrido
    }

    public iamadog() {
        console.log('yes, this is a dog');
    }
}

class Cat extends Animal {
    gender: string;
    
    constructor(gender:string){
        super(); //invoca al constructor de la clase Animal
        this.gender = gender;
    }

    public sound() {
        console.log("MEOW"); // Maullido
    }

    public iamacat() {
        console.log('yes, this is a cat');
    }
}


let animals: Animal[] = [];
animals.push(new Cat('male'));
animals.push(new Dog('white'));
animals.push(new Cat('female'));
animals.push(new Dog('black'));

for (let animal of animals) {
    animal.sound(); // Llama al método sound() para emitir el sonido
    
    //No sabemos si iteración actual definida por animal es 'Dog' o 'Cat'
    //y se debería de saber ya que usan metodos especificos (iamacat no está definido en 'Dog' y viceversa)
    //Para solucionarlo se puede hacer:

    if ('iamacat' in animal) {
        //Si la instancia actual contiene el método 'iamacat()' es 'Cat'
        // portanto llamamos al método que corresponde
        //(animal as Cat).iamacat(); 
        console.log('iamacat in animal ok')

        //Otra forma de hacerlo es mediante 'instanceof' que verifica directamente si animal es una instancia de 'Dog'
        //Ojo!! es código Javascritp, no podríamos usar 'instanceof' si tuviesemos una interface (que no se compila a Js)
    } else if(animal instanceof Dog) {
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