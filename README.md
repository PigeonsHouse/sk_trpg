# 探索者まとめサイト

## 概要

鈴木乖離という人間がTRPGで生み出した探索者のまとめサイトです。  
かわいいうちの子を見ていってください～！

## 環境構築

このリポジトリではpnpmを利用しています。pnpmの導入方法は[こちら](https://pnpm.io/ja/installation)

1. ライブラリをインストールします。
   ```sh
   pnpm install --frozen-lockfile
   ```
1. サーバを起動します。
   ```sh
   pnpm run dev
   ```
1. ブラウザで `localhost:5173` にアクセスします。

## データの更新

### キャラクターデータ

`public/data/characters/` の中にキャラクター詳細ページで使うデータがあります。  
データのフォーマットは `src/types/data/characters.d.ts` で受け取ります。新しく作成する際はここの型も参考にできます。

### キャラクター一覧

ページ生成時に、`public/data/characters.json` のパスに自動で作成されます。  
キャラクターの代表色はカラーパレットの最初の色を選択されています。

### 画像

`public/images/` に画像を配置すると、 `<サイトURL>/images/xxx.png` のようなURLで画像を取得できるようになります。  
キャラクターデータの画像URLをここに置いた画像にする場合は、サイトURLを除いた `/images/xxx.png` を指定してください。

## 使用技術

- フロントエンド
  - React + Vite
- スタイリング
  - emotion
- アイコン
  - google-font
- ルーティング
  - generouted (react-router)
- データ取得
  - publicからjsonファイルを配信
- フォーマッター、リンター
  - prettier/eslint

また、コンポーネントの確認、ドキュメント化としてstorybookも使用しています。
