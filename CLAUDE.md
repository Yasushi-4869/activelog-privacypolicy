# CLAUDE.md - ActiveLog Web

## プロジェクト概要
ActiveLog の Web サイト。プライバシーポリシー・利用規約・特定商取引法・LP を管理する。

## 技術スタック
詳細は @docs/TECH_STACK.md を参照。

- **フレームワーク:** React (Vite)
- **スタイリング:** Tailwind CSS
- **UIコンポーネント:** shadcn/ui
- **アニメーション:** Framer Motion
- **アイコン:** Lucide React
- **ホスティング:** GitHub Pages
- **デプロイ:** GitHub Actions（ビルド → gh-pages ブランチに push）

## ページ構成
| URL | 内容 | ファイル |
|-----|------|---------|
| `/` | LP（予定） | `src/pages/Home.tsx` |
| `/privacy` | プライバシーポリシー | `src/pages/Privacy.tsx` |
| `/terms` | 利用規約 | `src/pages/Terms.tsx` |
| `/tokushoho` | 特定商取引法に基づく表記 | `src/pages/Tokushoho.tsx` |

## iOS アプリ関連ファイル

### URL・定数（LP・法律ページのリンク更新時に参照）
@../activelog_ios_reworked/Active-Log/Active-Log/Shared/Constants/AppConstants.swift

### 仕様書（LP作成時に参照）
@../activelog_ios_reworked/Active-Log/docs/REQUIREMENTS.md
@../activelog_ios_reworked/Active-Log/docs/DESIGN_SYSTEM.md
@../activelog_ios_reworked/Active-Log/docs/MONETIZATION_DESIGN.md
@../activelog_ios_reworked/Active-Log/docs/UPDATE_ROADMAP.md

## IMPORTANT: 自律的な操作の禁止
- **Bashコマンドはユーザーから明示的に依頼された場合のみ実行すること。**
- **GitHub への push はユーザーの明示的な依頼があるまで行わないこと。**
