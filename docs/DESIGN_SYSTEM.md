# ActiveLog Web デザインシステム

LPで確立したデザイン言語のリファレンス。新しいページやコンポーネントを作るときはここを参照する。

## コンセプト

iOSアプリの設計思想「Immersive Soft Glass」をWebに翻訳したライトベースのデザイン。

- **Frosted Glass**: 白半透明＋backdrop-blur でiOS標準の質感を再現
- **Ambient Color**: スクロールに連動してページ背景色が微妙に変化する
- **Mixed Typography**: 見出しに明朝体、UIにサンセリフを使い分ける

---

## カラー

### ベース

| 用途 | 値 |
|------|-----|
| ページ背景 | `#f3f5fb` |
| テキスト（主） | `rgba(10,14,35,0.88)` |
| テキスト（副） | `rgba(10,14,35,0.48)` |
| テキスト（弱） | `rgba(10,14,35,0.28)` |
| ボーダー | `rgba(15,20,50,0.07)` |

### アクセントカラー（タイマー種別と共通）

| 用途 | HEX | RGB |
|------|-----|-----|
| ブルー（ノーマル） | `#2563eb` | `37,99,235` |
| グリーン（ストップウォッチ） | `#16a34a` | `22,163,74` |
| パープル（サイクル） | `#9333ea` | `147,51,234` |
| オレンジ（カスタム） | `#ea580c` | `234,88,12` |

アクセントカラーは各タイマーのアイデンティティと統一する。

### アンビエント背景

スクロールに連動してアクセントカラーが変化する。値は `rgba(R,G,B, opacity)` で指定。

```css
/* 左上からメインアンビエント（スクロール連動） */
radial-gradient(ellipse 80% 55% at 10% 10%, rgba(37,99,235, 0.10) 0%, transparent 55%)

/* 右下にスタティックなセカンダリアンビエント */
radial-gradient(ellipse 55% 45% at 90% 88%, rgba(147,51,234, 0.06) 0%, transparent 55%)
```

---

## タイポグラフィ

### フォント

| 種別 | フォント | CSS変数 |
|------|----------|---------|
| 見出し（日本語） | Noto Serif JP | `var(--font-serif)` |
| UIテキスト | Geist Variable | `var(--font-sans)` |

### スケール

| 用途 | サイズ | ウェイト | フォント |
|------|--------|----------|---------|
| Hero H1 | `4.25rem` (md) | `700` | serif |
| Section H2 | `4rem〜5rem` | `700` | serif |
| H3（カード内） | `1.75〜2.25rem` | `700` | serif |
| リード文 | `1.125rem` | `400` | sans |
| ラベル | `0.75rem` | `600` | sans |
| 注釈 | `0.75rem` | `400` | sans |

見出しはすべて `font-family: var(--font-serif)` を指定する。Tailwindの `font-serif` クラスは使わない（CSS変数直指定で統一）。

---

## ガラスカード

LPで使用している `GlassCard` コンポーネントのスタイル定義。

```css
background: rgba(255, 255, 255, 0.72);
border: 1px solid rgba(15, 20, 50, 0.07);
backdrop-filter: blur(24px);
box-shadow:
  0 4px 32px rgba(15, 20, 50, 0.06),
  0 1px 2px rgba(15, 20, 50, 0.04);
border-radius: 24px; /* rounded-3xl */

/* 左上の光反射（必須） */
background: linear-gradient(135deg, rgba(255,255,255,0.85) 0%, transparent 50%);
```

### アクセントカラー付きカード（タイマー内部）

```css
background: rgba(R, G, B, 0.06);
border: 1px solid rgba(R, G, B, 0.15);
/* + 中央グロー */
background: radial-gradient(circle at 50% 50%, rgba(R,G,B, 0.10) 0%, transparent 65%);
```

---

## タイマーリング（SVG）

```tsx
// 外周トラック
stroke="rgba(15,20,50,0.08)" strokeWidth="10"

// 進捗リング
stroke={color} strokeWidth="10" strokeLinecap="round"
style={{ filter: `drop-shadow(0 0 8px ${color}66)` }}
```

ダーク背景（フォンモックアップ内など）では：
- トラック: `rgba(255,255,255,0.10)`
- テキスト: `rgba(255,255,255,0.90)`

---

## モーション

### スクロールリビール（セクション共通）

```tsx
initial={{ opacity: 0, y: 48 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
viewport={{ once: true, amount: 0.2 }}
```

### ヒーロー入場（stagger）

```tsx
// 各要素に delay を段階的に加算
delay: 0.08, 0.22, 0.34, 0.50
duration: 0.55〜0.95
```

### アンビエントカラー遷移

```tsx
// motion.div の animate prop に背景グラデーションを渡す
transition={{ duration: 1.4, ease: 'easeInOut' }}
```

### ボタンホバー

```tsx
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.97 }}
```

---

## ナビ・フッター

```css
/* ナビ下ボーダー */
border-bottom: 1px solid rgba(15,20,50,0.06);

/* フッター上ボーダー */
border-top: 1px solid rgba(15,20,50,0.07);
```

ナビは `max-w-6xl` で中央揃え。フッターも同じ幅。コンテンツエリアは `max-w-6xl mx-auto px-6`。

---

## ボタン

### プライマリ（App Store / 主要CTA）

```css
background: rgba(10, 14, 35, 0.90);
color: rgba(255, 255, 255, 0.92);
border-radius: 1rem; /* rounded-2xl */
padding: 0.875rem 1.75rem;
font-weight: 600;
```

### セカンダリ（ナビ内ダウンロード）

```css
background: rgba(10, 14, 35, 0.90);
color: rgba(255, 255, 255, 0.90);
border-radius: 9999px; /* rounded-full */
padding: 0.5rem 1rem;
font-size: 0.75rem;
```

### アイコンバッジ（eyebrow）

```css
background: rgba(37, 99, 235, 0.08);
border: 1px solid rgba(37, 99, 235, 0.18);
border-radius: 9999px;
```

---

## レイアウト

| 用途 | 値 |
|------|-----|
| コンテンツ最大幅 | `max-w-6xl`（1152px） |
| 水平パディング | `px-6` |
| セクション縦余白 | `py-28`（112px） |
| カード内パディング | `p-7` or `p-8` |
| グリッドギャップ | `gap-10`〜`gap-16` |

---

## 参考

- iOSアプリのデザインシステム: `activelog_ios_reworked/Active-Log/docs/DESIGN_SYSTEM.md`
- 技術スタック: `docs/TECH_STACK.md`
