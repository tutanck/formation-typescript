import { Album } from "./Album";
import { Music } from "./Utils";

export interface IMusician {
  addAlbum(album: Album): void;
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

 