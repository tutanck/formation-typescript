export class Album {
  title: string;

  constructor(title: string) {
    this.title = title;
  }

  toString(): string {
    return this.title;
  }
}
