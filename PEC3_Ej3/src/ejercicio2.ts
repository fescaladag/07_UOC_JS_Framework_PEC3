//Sustituye /***/ por las instrucciones adecuadas que cumplan las operaciones 
//y salidas indicadas en los comentarios.


interface Plane{
    model:string,
    npassengers:number
}

//Interface que define un objeto donde los valores serán los definidos en Plane
interface HangarHash {
    [key: string]: Plane;
}



let myHangar:HangarHash = {}

myHangar['123Z']={
    model:'airbus',
    npassengers:200
}
myHangar['H789']={ 
    model:'boeing',
    npassengers:151
}

/** Print following lines (going through the object)
 * 123Z:airbus(200)
 * H789:boeing(151)
 */
for (let key in myHangar){
    console.log(`${key}:${myHangar.model}(${myHangar.npassengers})`)
}