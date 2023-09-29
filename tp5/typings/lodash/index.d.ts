declare module "lodash" {
  export function each<T>(items: T[], callback: (item: T) => void): void;

  export function each<T>(
    objet: Record<string, T>,
    callback: (k: string, v: T) => void
  ): void;
}
