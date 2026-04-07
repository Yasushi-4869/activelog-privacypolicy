# 技術スタック

## 構成・バージョン

| カテゴリ | ライブラリ | バージョン | 用途 |
|---------|-----------|-----------|------|
| フレームワーク | React | v19.x | UIコンポーネント |
| ビルドツール | Vite | v8.x | ビルド・開発サーバー |
| Viteプラグイン | @vitejs/plugin-react | v6.x | React対応（Oxcベース、Babel廃止） |
| スタイリング | Tailwind CSS | v4.x | ユーティリティCSSクラス |
| TailwindViteプラグイン | @tailwindcss/vite | v4.x | Vite連携（PostCSS不要） |
| UIコンポーネント | shadcn/ui | latest | 再利用可能なコンポーネント群 |
| アニメーション | motion | v12.x | ページ・要素のアニメーション |
| アイコン | lucide-react | latest | SVGアイコン |
| ルーティング | react-router | v7.x | クライアントサイドルーティング |
| 言語 | TypeScript | v5.x | 型安全性 |

### ⚠️ 互換性メモ

- **motion（旧 framer-motion）**: v12以降でパッケージ名が変更。`framer-motion` は React 19 と競合するため使用不可。インポートは `motion/react` から行う
- **react-router**: v7から `react-router-dom` が統合。`react-router` のみでOK
- **Tailwind v4**: `tailwind.config.js` は不要。CSS-first設定（`@import "tailwindcss"` を index.css に記述するだけ）
- **shadcn/ui + Tailwind v4**: 正式対応済み。色設定が HSL → OKLCH に変更。`tailwindcss-animate` は `tw-animate-css` に置換

---

## ホスティング・デプロイ

- **ホスティング:** GitHub Pages
- **デプロイ方法:** GitHub Actions でビルドして `gh-pages` ブランチに push
- **ビルド成果物:** `dist/` ディレクトリ

---

## セットアップ手順（初回・Docker内で実行）

```bash
# 1. Vite プロジェクト初期化
npm create vite@latest . -- --template react-ts --force

# 2. 基本ライブラリ
npm install

# 3. 追加ライブラリ（framer-motion ではなく motion を使う）
npm install tailwindcss @tailwindcss/vite motion lucide-react react-router

# 4. shadcn/ui 初期化
npx shadcn@latest init
```

---

## 開発コマンド

```bash
npm run dev      # 開発サーバー起動
npm run build    # 本番ビルド
npm run preview  # ビルド結果のプレビュー
```

---

## 参考

- [shadcn/ui + Tailwind v4 対応ドキュメント](https://ui.shadcn.com/docs/tailwind-v4)
- [motion アップグレードガイド](https://motion.dev/docs/react-upgrade-guide)
- [Vite 8.0 リリースノート](https://vite.dev/blog/announcing-vite8)
