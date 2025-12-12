export const arraySplitBySize = (arr: any[], size: number) =>
  arr.flatMap((_, i, a) => (i % size ? [] : [a.slice(i, i + size)]));

export const arraySplitByCount = (arr: any[], count: number) =>
  arraySplitBySize(arr, Math.ceil(arr.length / count));
