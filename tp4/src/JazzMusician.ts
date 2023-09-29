import { Musician } from "./Musician";
import { Music } from "./Utils";

export class JazzMusician extends Musician {
  constructor(firstName: string, lastName: string, age: number) {
    super(firstName, lastName, age);
    this.style = Music.JAZZ;
  }
}
