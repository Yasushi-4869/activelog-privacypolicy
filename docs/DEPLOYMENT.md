# デプロイ手順

## 概要

GitHub Actions が `main` ブランチへの push を検知して自動でビルド・デプロイする。
ローカルでのビルド作業は不要。

```
git push origin main
    ↓
GitHub Actions 起動
    ↓
Node.js 環境でビルド（npm run build）
    ↓
dist/ を gh-pages ブランチに push
    ↓
GitHub Pages が配信
```

---

## GitHub Actions ワークフロー

`.github/workflows/deploy.yml` を作成する。

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:   # 手動実行も可能にする

jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: write

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## GitHub Pages の設定

1. GitHub リポジトリ > Settings > Pages
2. Source: **Deploy from a branch**
3. Branch: **gh-pages** / `/ (root)`
4. Save

初回デプロイ後に `gh-pages` ブランチが作成されるので、その後に設定する。

---

## 公開 URL

```
https://yasushi-4869.github.io/activelog-privacypolicy/
https://yasushi-4869.github.io/activelog-privacypolicy/#/privacy
https://yasushi-4869.github.io/activelog-privacypolicy/#/terms
https://yasushi-4869.github.io/activelog-privacypolicy/#/tokushoho
```

---

## ローカルでビルド確認（Docker）

```bash
# ビルド
docker run --rm -v $(pwd):/app -w /app node:20-alpine \
  sh -c "npm ci && npm run build"

# プレビュー（ビルド結果の確認）
docker run --rm -v $(pwd):/app -w /app -p 4173:4173 node:20-alpine \
  sh -c "npm run preview -- --host 0.0.0.0"
```

→ `http://localhost:4173/activelog-privacypolicy/` でアクセス

---

## 既存ページの移行

現在 Markdown で管理されている以下のファイルは React コンポーネントに置き換える。

| 既存ファイル | 移行先 | URL |
|------------|--------|-----|
| `index.md` | `src/pages/Privacy.tsx` | `/#/privacy` |
| `terms_of_service.md` | `src/pages/Terms.tsx` | `/#/terms` |
| `TOKUSHOHO.md`（iOS側） | `src/pages/Tokushoho.tsx` | `/#/tokushoho` |

移行完了後、既存の `.md` ファイルは削除してよい。
