/**
 * @class Model
 *
 * Manages the data of the application.
 */



export class Todo {

  id:string; 
  text: string;
  complete:boolean;

  //inicializmos el constructor con los valores por defecto 
  constructor({ text, complete }: { text: string, complete: boolean } = {text:"", complete: false}) {
    this.id = this.uuidv4();
    this.text = text;
    this.complete = complete;
  }

  private uuidv4(): string {
    //convertimos a string para que no nos de error de tipo
    return (
      (1e7).toString() + 
      (-1e3).toString() + 
      (-4e3).toString() + 
      (-8e3).toString() + 
      (-1e11).toString()).replace(/[018]/g, (c: string) =>
      (
        Number(c) ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (Number(c) / 4)))
      ).toString(16)
    );
  }
}