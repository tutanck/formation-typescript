enum NumberToString {
  zero,
  un,
  deux,
  trois,
  quatre,
  cinq,
  six,
  sept,
  huit,
  neuf,
}

export const returnPeopleAndLength = (
  arr: string[] = ["Miles", "Mick"]
): [string, number][] => {
  return arr.map((x) => [x, x.length]);
};

export const displayPeopleAndLength = (arr?: string[], literal?: boolean) => {
  if ([false, undefined].includes(literal))
    returnPeopleAndLength(arr).forEach(([el, size]) =>
      console.log(`${el} contient ${size} caractères`)
    );
  else if (literal === true)
    returnPeopleAndLength(arr)
      .filter(([, size]) => size <= 9)
      .forEach(([el, size]) => {
        const string_value: string = NumberToString[size];
        console.log(`${el} contient ${string_value} caractères`);
      });
};
