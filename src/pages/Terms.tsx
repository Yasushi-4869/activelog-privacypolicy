import Layout from '@/components/layout/Layout'
import { legalStyles as s } from '@/styles/legal'

export default function Terms() {
  return (
    <Layout>
      <h1 className={s.h1}>アクティブログ 利用規約・サブスクリプション規約</h1>
      <span className={s.date}>最終更新日: 2026年3月17日</span>

      <section className={s.section}>
        <h2 className={s.h2}>サブスクリプションについて</h2>
        <p className={`${s.p} mb-6`}>
          本アプリでは、プレミアム機能を利用するためのサブスクリプション（自動更新）を提供しています。
        </p>

        <div className="mb-6">
          <h3 className={s.h3}>プラン・料金</h3>
          <div className={s.table}>
            <table className="w-full text-sm">
              <thead className={s.thead}>
                <tr>
                  <th className={s.th}>プラン</th>
                  <th className={s.th}>料金</th>
                </tr>
              </thead>
              <tbody>
                <tr className={s.tr}>
                  <td className={s.td}>月額プラン</td>
                  <td className={s.td}>¥300 / 月</td>
                </tr>
                <tr className={s.tr}>
                  <td className={s.td}>年額プラン</td>
                  <td className={s.td}>¥3,000 / 年</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-6">
          <h3 className={s.h3}>プレミアム機能</h3>
          <ul className={s.ul}>
            <li>目標の無制限設定（無料プランは3件まで）</li>
            <li>活動ヒートマップの表示</li>
            <li>週間活動時間グラフの表示</li>
            <li>Apple Music を通知音に設定</li>
            <li>広告の非表示</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className={s.h3}>支払い・更新</h3>
          <ul className={s.ul}>
            <li>支払いは購入確認時に Apple ID に紐づく iTunes アカウントに請求されます。</li>
            <li>サブスクリプションは現在の購読期間終了の24時間前までに解約しない限り、自動的に更新されます。</li>
            <li>更新料金は期間終了の24時間前に請求されます。</li>
            <li>購入後はApp内でサブスクリプションを管理できます。</li>
          </ul>
        </div>

        <div>
          <h3 className={s.h3}>キャンセル方法</h3>
          <p className={`${s.p} mb-2`}>サブスクリプションはいつでもキャンセルできます。</p>
          <ol className={`${s.ol} mb-2`}>
            <li>iPhone の「設定」アプリを開く</li>
            <li>上部のApple IDをタップ</li>
            <li>「サブスクリプション」をタップ</li>
            <li>「アクティブログ」を選択してキャンセル</li>
          </ol>
          <p className={`${s.p} mb-3`}>または App Store アプリ → アカウント → サブスクリプション からもキャンセルできます。</p>
          <p className={s.p}>キャンセル後も、現在の購読期間が終了するまでプレミアム機能を利用できます。</p>
        </div>
      </section>

      <hr className="border-black/[0.06] my-2" />

      <section className={s.section}>
        <h2 className={s.h2}>購入の復元</h2>
        <p className={s.p}>
          機種変更や再インストールの際は、アプリ内の「購入を復元する」ボタンから購入履歴を復元できます。同一 Apple ID でのみ復元可能です。
        </p>
      </section>

      <section className={s.section}>
        <h2 className={s.h2}>免責事項</h2>
        <ul className={s.ul}>
          <li>本アプリの利用上の不具合については可能な限り対応いたしますが、利用者が本アプリを利用して生じた損害に関して開発者は責任を負わないものとします。</li>
        </ul>
      </section>

      <section className={s.section}>
        <h2 className={s.h2}>規約の変更</h2>
        <ul className={s.ul}>
          <li>この規約は予告なく変更できるものとします。</li>
          <li>変更があった場合はこのページを更新してお知らせいたします。</li>
        </ul>
      </section>

      <section className={s.section}>
        <h2 className={s.h2}>お問い合わせ</h2>
        <p className={s.p}>
          規約に関するお問い合わせは、アプリ内の「ご意見・ご要望」からお願いいたします。</p>
      </section>
    </Layout>
  )
}
