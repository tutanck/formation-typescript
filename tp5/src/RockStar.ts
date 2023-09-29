import { log } from "./Log";
import { Musician } from "./Musician";
import { Music } from "./Utils";

export class RockStar extends Musician {
  constructor(firstName: string, lastName: string, age: number) {
    super(firstName, lastName, age);
    this.style = Music.ROCK;
  }

  shout(): void {
    log("I'm shouting! ");
  }
}
