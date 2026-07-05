type ImageUrlRecord<Key extends string> = Record<`${Key}Url`, string> &
  Partial<Record<`converted${Capitalize<Key>}Url`, string>>;

type ImageListRecord<Key extends string> = Record<Key, string[]> &
  Partial<Record<`converted${Capitalize<Key>}`, string[]>>;

const capitalize = <Value extends string>(value: Value): Capitalize<Value> =>
  `${value.charAt(0).toUpperCase()}${value.slice(1)}` as Capitalize<Value>;

export const getImageUrl = <Key extends string>(
  data: ImageUrlRecord<Key>,
  key: Key
) => {
  const capitalizedKey = capitalize(key);
  const originalKey = `${key}Url` as const;
  const convertedKey = `converted${capitalizedKey}Url` as const;

  return data[convertedKey] ?? data[originalKey];
};

export const getImageList = <Key extends string>(
  data: ImageListRecord<Key>,
  key: Key
) => {
  const capitalizedKey = capitalize(key);
  const originalKey = key;
  const convertedKey = `converted${capitalizedKey}` as const;

  return data[convertedKey] ?? data[originalKey];
};

// public/配下のpng/jpgはビルド時にwebpへ変換され元ファイルは削除されるため、
// JSONを介さずソースコードから直接パスを参照する場合はこちらで解決する
export const getStaticImageUrl = (url: string) =>
  import.meta.env.PROD ? url.replace(/\.(png|jpe?g)$/i, ".webp") : url;
