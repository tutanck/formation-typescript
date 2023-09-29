import { log } from "./Log";

export interface ElementToString {
  toString(): string;
}

export default function display<T extends ElementToString>(
  elementToStrings: T[]
) {
  elementToStrings.forEach((elementToString) => {
    const str = elementToString.toString();

    log(str);
  });
}
