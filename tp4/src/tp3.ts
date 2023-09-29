export enum Music {
  JAZZ,
  ROCK,
}

export interface IMusician {
  addAlbum(album: Album): void;
}

export interface ElementToString {
  toString(): string;
}

export class Musician implements IMusician {
  firstName: string;

  lastName: string;

  age: number;

  private _style?: Music;

  _albums: Album[] = [];

  get style(): Music | undefined {
    return this._style;
  }

  set style(value: Music | undefined) {
    this._style = value;
  }

  get albums(): Album[] {
    return this._albums;
  }

  set albums(value: Album[]) {
    this._albums = value;
  }

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  toString(): string {
    return `${this.firstName} ${this.lastName}${
      this.style !== undefined ? ` plays ${Music[this.style]}` : ""
    }`;
  }

  addAlbum(album: Album): void {
    this.albums.push(album);
  }
}

export class JazzMusician extends Musician {
  constructor(firstName: string, lastName: string, age: number) {
    super(firstName, lastName, age);
    this.style = Music.JAZZ;
  }
}

export class RockStar extends Musician {
  constructor(firstName: string, lastName: string, age: number) {
    super(firstName, lastName, age);
    this.style = Music.ROCK;
  }
}

export class Album {
  title: string;

  constructor(title: string) {
    this.title = title;
  }

  toString(): string {
    return this.title;
  }
}

export function display<T extends ElementToString>(elementToStrings: T[]) {
  elementToStrings.forEach((elementToString) => {
    const str = elementToString.toString();

    console.log(str);
  });
}
