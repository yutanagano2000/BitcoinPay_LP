# BitcoinPay 素材チェックリスト

**Status:** Phase 2 アニメーション実装中
**Last Updated:** 2025-12-02

---

## 1. ブランドアイデンティティ

### 1.1 ロゴ

| # | 素材名 | 形式 | サイズ | 用途 | 状態 | パス |
|---|--------|------|--------|------|------|------|
| 1 | メインロゴ（フル） | SVG | - | ヘッダー、フッター | ✅ 完了 | `/images/logo/logo-full.svg` |
| 2 | ロゴアイコン（シンボル） | SVG | - | Favicon, モバイル | ✅ 完了 | `/images/logo/logo-symbol.svg` |
| 3 | ロゴ（白背景用） | SVG/PNG | - | 印刷物、明るい背景 | ❌ 未作成 | - |
| 4 | ロゴ（黒背景用） | SVG/PNG | - | ダークモード | ✅ 使用中 | `/images/logo/logo-full.svg` |
| 5 | Favicon | ICO/PNG | 16×16, 32×32, 48×48 | ブラウザタブ | ⚠️ 仮 | - |
| 6 | Apple Touch Icon | PNG | 180×180 | iOS ホーム画面 | ❌ 未作成 | - |
| 7 | Android Icon | PNG | 192×192, 512×512 | Android, PWA | ❌ 未作成 | - |

### 1.2 OGP / ソーシャルシェア

| # | 素材名 | 形式 | サイズ | 用途 | 状態 |
|---|--------|------|--------|------|------|
| 1 | OGP画像（標準） | PNG | 1200×630 | Facebook, LinkedIn | ❌ |
| 2 | OGP画像（Twitter） | PNG | 1200×600 | Twitter Card | ❌ |
| 3 | OGP画像（各言語版） | PNG | 1200×630 | 多言語SNSシェア | ❌ |

**OGP画像の要件:**
- キャッチコピー + カードビジュアル
- ロゴを目立つ位置に
- 暗い背景 + オレンジのアクセント
- テキストは画像中央に配置（クロップ対策）

---

## 2. プロダクト画像

### 2.1 カードビジュアル

| # | 素材名 | 形式 | サイズ | 用途 | 状態 | パス |
|---|--------|------|--------|------|------|------|
| 1 | バーチャルカード（白・正面） | PNG | 800×500 | Hero | ✅ 完了 | `/images/cards/card-white.png` |
| 2 | バーチャルカード（黒・正面） | PNG | 800×500 | Hero | ✅ 完了 | `/images/cards/card-black.png` |
| 3 | バーチャルカード（Apple Pay追加画面） | WebP/PNG | 400×800 | Features | ❌ 未作成 | - |
| 4 | 物理カード（正面） | WebP/PNG | 600×380 | Features | ❌ 未作成 | - |
| 5 | 物理カード（斜め） | WebP/PNG | 600×380 | Coming Soon | ❌ 未作成 | - |
| 6 | カード + スマホモックアップ | WebP/PNG | 1200×800 | Hero背景 | ❌ 未作成 | - |

**カードデザイン要件:**
```
色: オレンジ〜アンバーのグラデーション
要素:
  - 左上: BitcoinPay ロゴ
  - 右上: カードタイプ (Virtual / Physical)
  - 中央下: カード番号（マスク表示）
  - 左下: 有効期限
  - 右下: Visa/Mastercardロゴ or Apple Pay/Google Pay対応マーク
質感: メタリック、光沢感、角丸 (16px)
```

### 2.2 アプリスクリーンショット

| # | 素材名 | 形式 | サイズ | 用途 | 状態 | パス |
|---|--------|------|--------|------|------|------|
| 1 | アプリメイン画面 | PNG | 390×844 | How It Works | ✅ 完了 | `/images/screenshots/app-main.png` |
| 2 | カード管理画面 | PNG | 390×844 | How It Works | ✅ 完了 | `/images/screenshots/card-management.png` |
| 3 | 残高表示画面 | WebP/PNG | 390×844 | Features | ❌ 未作成 | - |
| 4 | 取引履歴画面 | WebP/PNG | 390×844 | Features | ❌ 未作成 | - |

---

## 3. 暗号通貨アイコン

### 3.1 対応通貨（現在）

| # | 通貨 | 形式 | アイコン名 | 状態 |
|---|------|------|-----------|------|
| 1 | USDC | Iconify | `i-cryptocurrency-color-usdc` | ✅ 実装済 |
| 2 | USDT | Iconify | `i-cryptocurrency-color-usdt` | ✅ 実装済 |

### 3.2 対応予定通貨

| # | 通貨 | 形式 | アイコン名 | 状態 |
|---|------|------|-----------|------|
| 3 | Bitcoin SV | Iconify | `i-cryptocurrency-color-bsv` | ✅ 実装済 |
| 4 | Ethereum | Iconify | `i-cryptocurrency-color-eth` | ✅ 実装済 |
| 5 | Solana | Iconify | `i-cryptocurrency-color-sol` | ✅ 実装済 |
| 6 | Polygon (MATIC) | Iconify | `i-cryptocurrency-color-matic` | ✅ 実装済 |
| 7 | BNB Chain | Iconify | `i-cryptocurrency-color-bnb` | ✅ 実装済 |

**実装方法:**
- `@iconify-json/cryptocurrency-color` パッケージを使用
- Nuxt Icon経由で自動読み込み
- カラーアイコンで高品質表示

---

## 4. 決済・プラットフォームバッジ

### 4.1 モバイルペイメント

| # | 素材名 | 形式 | 取得先 | 状態 |
|---|--------|------|--------|------|
| 1 | Apple Pay バッジ（白） | SVG | Apple公式 | ❌ |
| 2 | Apple Pay バッジ（黒） | SVG | Apple公式 | ❌ |
| 3 | Google Pay バッジ | SVG | Google公式 | ❌ |
| 4 | Samsung Pay バッジ | SVG | Samsung公式 | ❌ (将来) |

**公式ガイドライン:**
- [Apple Pay Guidelines](https://developer.apple.com/apple-pay/marketing/)
- [Google Pay Guidelines](https://developers.google.com/pay/api/web/guides/brand-guidelines)

### 4.2 アプリストアバッジ

| # | 素材名 | 形式 | 取得先 | 状態 |
|---|--------|------|--------|------|
| 1 | App Store バッジ | SVG | Apple公式 | ❌ |
| 2 | Google Play バッジ | PNG/SVG | Google公式 | ❌ |

**公式ガイドライン:**
- [App Store Badges](https://developer.apple.com/app-store/marketing/guidelines/)
- [Google Play Badges](https://play.google.com/intl/en_us/badges/)

### 4.3 カードネットワーク

| # | 素材名 | 形式 | 状態 |
|---|--------|------|------|
| 1 | Visa ロゴ | SVG | ⚠️ 要確認 |
| 2 | Mastercard ロゴ | SVG | ⚠️ 要確認 |

**※ 実際のカード発行パートナー確定後に使用許諾確認**

---

## 5. 信頼性・セキュリティ素材

### 5.1 セキュリティバッジ

| # | 素材名 | 説明 | 状態 |
|---|--------|------|------|
| 1 | Bank-Level Security | シールドアイコン + テキスト | ❌ 作成必要 |
| 2 | 256-bit Encryption | 鍵アイコン + テキスト | ❌ 作成必要 |
| 3 | Self-Custody | ウォレットアイコン | ❌ 作成必要 |
| 4 | KYC Verified | チェックマークアイコン | ❌ 作成必要 |

### 5.2 パートナー/認証ロゴ（将来）

| # | 素材名 | 取得条件 | 状態 |
|---|--------|----------|------|
| 1 | カード発行パートナー | 契約後 | ⏳ 待機 |
| 2 | KYCプロバイダー | 契約後 | ⏳ 待機 |
| 3 | 監査法人 | 監査完了後 | ⏳ 待機 |

### 5.3 メディア掲載ロゴ（将来）

| # | メディア | 取得条件 | 状態 |
|---|---------|----------|------|
| 1 | TechCrunch | 掲載後 | ⏳ 待機 |
| 2 | CoinDesk | 掲載後 | ⏳ 待機 |
| 3 | その他暗号メディア | 掲載後 | ⏳ 待機 |

---

## 6. UIアイコン（Heroicons使用中）

現在 Nuxt UI + Heroicons を使用。追加カスタムアイコンが必要な場合：

| # | アイコン | 用途 | 状態 |
|---|---------|------|------|
| 1 | カード発行 | How It Works | ✅ heroicons |
| 2 | KYC | How It Works | ✅ heroicons |
| 3 | ウォレット追加 | How It Works | ✅ heroicons |
| 4 | ショッピング | How It Works | ✅ heroicons |
| 5 | セキュリティ | Features | ✅ heroicons |

---

## 7. 背景・装飾素材

### 7.1 グラデーション背景

| # | 素材名 | 用途 | 実装方法 | 状態 |
|---|--------|------|----------|------|
| 1 | Hero背景グロー | Hero | CSS | ✅ 実装済 |
| 2 | セクション間グラデーション | About, Features | CSS | ✅ 実装済 |
| 3 | カードグロー効果 | カードホバー | CSS | ✅ 実装済 |

### 7.2 パターン・テクスチャ（オプション）

| # | 素材名 | 用途 | 状態 |
|---|--------|------|------|
| 1 | グリッドパターン | Hero背景 | ❌ 検討中 |
| 2 | ノイズテクスチャ | 全体背景 | ❌ 検討中 |
| 3 | 波形パターン | セクション区切り | ❌ 検討中 |

---

## 8. アニメーション素材

### 8.1 Lottieアニメーション（オプション）

| # | 素材名 | 用途 | 状態 |
|---|--------|------|------|
| 1 | カード発行アニメ | How It Works | ❌ 検討中 |
| 2 | 送金アニメ | Features | ❌ 検討中 |
| 3 | 成功チェックマーク | Form送信後 | ❌ 検討中 |

### 8.2 CSSアニメーション

| # | アニメーション | 用途 | 状態 |
|---|---------------|------|------|
| 1 | フェードイン | セクション表示 | ✅ 完了 |
| 2 | スライドアップ/左右 | カード・コンテンツ表示 | ✅ 完了 |
| 3 | パルスグロー | CTAボタン | ✅ 完了 |
| 4 | マーキー | 通貨ロゴスクロール | ✅ 完了 |
| 5 | 3Dカード傾き | Heroカードホバー | ✅ 完了 |
| 6 | パララックス | Hero背景 | ✅ 完了 |
| 7 | フロート | スクリーンショット | ✅ 完了 |
| 8 | スケール | カード表示 | ✅ 完了 |

---

## 9. 素材作成優先度マトリクス

### 即時必要（ローンチブロッカー）

| 優先度 | 素材 | 理由 |
|--------|------|------|
| P0 | ロゴ（SVG） | ブランドアイデンティティ |
| P0 | Favicon | ブラウザ表示 |
| P0 | OGP画像 | SNSシェア |
| P0 | カードモックアップ（1枚） | Hero視覚的訴求 |

### 早期必要（1週間以内）

| 優先度 | 素材 | 理由 |
|--------|------|------|
| P1 | Apple Pay / Google Pay バッジ | 信頼性 |
| P1 | 暗号通貨アイコン | Currenciesセクション |
| P1 | App Store / Google Play バッジ | CTA |

### 改善用（2週間以内）

| 優先度 | 素材 | 理由 |
|--------|------|------|
| P2 | カードモックアップ（追加角度） | リッチな表現 |
| P2 | セキュリティバッジ | 信頼性強化 |
| P2 | アニメーション実装 | UX改善 |

### 将来対応（ローンチ後）

| 優先度 | 素材 | 理由 |
|--------|------|------|
| P3 | アプリスクリーンショット | アプリ完成後 |
| P3 | ユーザーテスティモニアル | レビュー収集後 |
| P3 | メディア掲載ロゴ | 掲載実績取得後 |
| P3 | パートナーロゴ | 契約締結後 |

---

## 10. 素材管理

### フォルダ構造

```
public/
├── images/
│   ├── logo/
│   │   ├── logo-full.svg
│   │   ├── logo-icon.svg
│   │   ├── logo-white.svg
│   │   └── logo-dark.svg
│   ├── cards/
│   │   ├── virtual-card-front.webp
│   │   ├── virtual-card-angle.webp
│   │   └── physical-card.webp
│   ├── currencies/
│   │   ├── usdc.svg
│   │   ├── usdt.svg
│   │   └── ...
│   ├── badges/
│   │   ├── apple-pay.svg
│   │   ├── google-pay.svg
│   │   ├── app-store.svg
│   │   └── google-play.svg
│   └── og/
│       ├── og-image.png
│       └── og-image-ja.png
├── favicon.ico
├── apple-touch-icon.png
└── android-chrome-*.png
```

### 画像最適化ルール

| 形式 | 用途 | 圧縮 |
|------|------|------|
| SVG | ロゴ、アイコン | SVGO |
| WebP | 写真、カードモックアップ | 品質80% |
| PNG | OGP、透過必要な画像 | pngquant |

---

## Appendix: 素材作成ツール推奨

### デザインツール
- **Figma** - ロゴ、カードデザイン、UI
- **Illustrator** - ベクターロゴ

### モックアップ
- **Rotato** - 3Dデバイスモックアップ
- **Mockup World** - 無料モックアップ
- **Previewed** - App Storeスクリーンショット

### 画像最適化
- **Squoosh** - WebP変換
- **SVGOMG** - SVG最適化
- **TinyPNG** - PNG圧縮

### アイコン
- **Heroicons** - UI アイコン（使用中）
- **Simple Icons** - ブランドアイコン
- **Cryptocurrency Icons** - 暗号通貨

---

**End of Assets Checklist v1.0.0**
