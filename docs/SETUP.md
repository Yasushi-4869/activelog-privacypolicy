# セットアップ手順

## 前提条件

- Docker / Docker Compose がインストール済みであること
- Node.js はローカル不要

---

## プロジェクト初期構成

Vite のセットアップは Docker 内で行う。

```bash
# 1. 依存関係インストール用の一時コンテナで Vite プロジェクトを初期化
docker run --rm -v $(pwd):/app -w /app node:20-alpine \
  sh -c "npm create vite@latest . -- --template react-ts --force && npm install"

# 2. 追加ライブラリのインストール（framer-motion ではなく motion、react-router-dom ではなく react-router）
docker run --rm -v $(pwd):/app -w /app node:20-alpine \
  sh -c "npm install tailwindcss @tailwindcss/vite motion lucide-react react-router"

# 3. shadcn/ui の初期化（対話形式のため別途実行）
docker run --rm -it -v $(pwd):/app -w /app node:20-alpine \
  sh -c "npx shadcn@latest init"
```

---

## Dockerfile

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
```

---

## docker-compose.yml

```yaml
services:
  web:
    build: .
    ports:
      - "5173:5173"
    volumes:
      - .:/app
      - /app/node_modules   # ホストの node_modules を上書きしない
    environment:
      - NODE_ENV=development
```

開発サーバー起動:
```bash
docker compose up
```

→ `http://localhost:5173` でアクセス

---

## ディレクトリ構成（Vite セットアップ後）

```
activelog_web/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions（デプロイ）
├── src/
│   ├── pages/
│   │   ├── Home.tsx            # LP（予定）
│   │   ├── Privacy.tsx         # プライバシーポリシー
│   │   ├── Terms.tsx           # 利用規約
│   │   └── Tokushoho.tsx       # 特定商取引法に基づく表記
│   ├── components/
│   │   └── Layout.tsx          # 共通レイアウト（ヘッダー・フッター）
│   ├── App.tsx                 # ルーティング設定
│   ├── main.tsx
│   └── index.css
├── public/
├── docs/                       # ローカル管理用（gitignore済み）
├── Dockerfile
├── docker-compose.yml
├── vite.config.ts
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── index.html
├── CLAUDE.md                   # gitignore済み
└── .gitignore
```

---

## vite.config.ts の設定

GitHub Pages のリポジトリ名に合わせて `base` を設定する必要がある。

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/activelog-privacypolicy/',  // GitHub Pages のリポジトリ名
})
```

---

## ルーティング（App.tsx）

GitHub Pages はサーバーサイドルーティングに対応していないため `HashRouter` を使用。
URL は `/#/privacy` のような形式になる。

```tsx
import { HashRouter, Routes, Route } from 'react-router-dom'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Tokushoho from './pages/Tokushoho'
import Home from './pages/Home'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/tokushoho" element={<Tokushoho />} />
      </Routes>
    </HashRouter>
  )
}
```

---

## Tailwind CSS の設定（v4系）

`tailwind.config.ts` は不要。`src/index.css` に以下を記述するだけ。

```css
@import "tailwindcss";
```
