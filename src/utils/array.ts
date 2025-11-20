export const arraySplit = (arr: any[], size: number) =>
  arr.flatMap((_, i, a) => (i % size ? [] : [a.slice(i, i + size)]));
