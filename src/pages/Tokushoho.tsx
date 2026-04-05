import Layout from '@/components/layout/Layout'
import { legalStyles as s } from '@/styles/legal'

const dt = 'text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1'

export default function Tokushoho() {
  return (
    <Layout>
      <h1 className={`${s.h1} mb-10`}>特定商取引法に基づく表記</h1>

      <dl className="space-y-8">
        <div>
          <dt className={dt}>販売業者</dt>
          <dd className={s.p}>小田 康史</dd>
        </div>
        <div>
          <dt className={dt}>運営責任者</dt>
          <dd className={s.p}>小田 康史</dd>
        </div>
        <div>
          <dt className={dt}>所在地</dt>
          <dd className={s.p}>請求があった場合には遅滞なく開示いたします。</dd>
        </div>
        <div>
          <dt className={dt}>電話番号</dt>
          <dd className={s.p}>請求があった場合には遅滞なく開示いたします。</dd>
        </div>
        <div>
          <dt className={dt}>メールアドレス</dt>
          <dd className={s.p}>activelog.support@gmail.com</dd>
        </div>
        <div>
          <dt className={dt}>販売価格</dt>
          <dd>
            <div className={`${s.table} mt-1`}>
              <table className="w-full text-sm">
                <thead className={s.thead}>
                  <tr>
                    <th className={s.th}>プラン</th>
                    <th className={s.th}>価格</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={s.tr}>
                    <td className={s.td}>月額プラン</td>
                    <td className={s.td}>¥300 / 月（税込）</td>
                  </tr>
                  <tr className={s.tr}>
                    <td className={s.td}>年額プラン</td>
                    <td className={s.td}>¥3,000 / 年（税込）</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </dd>
        </div>
        <div>
          <dt className={dt}>商品代金以外の必要料金</dt>
          <dd className={s.p}>なし</dd>
        </div>
        <div>
          <dt className={dt}>支払い方法</dt>
          <dd className={s.p}>
            Apple Inc. が提供する App Store を通じてお支払いいただきます。<br />
            お支払い方法はお客様の Apple ID に登録されたお支払い方法に準じます。
          </dd>
        </div>
        <div>
          <dt className={dt}>支払い時期</dt>
          <dd className={s.p}>
            サブスクリプション開始時、および各更新日に請求されます。<br />
            更新日の24時間前までに自動更新を解除しない場合、自動的に更新されます。
          </dd>
        </div>
        <div>
          <dt className={dt}>サービスの提供時期</dt>
          <dd className={s.p}>購入手続き完了後、直ちにプレミアム機能をご利用いただけます。</dd>
        </div>
        <div>
          <dt className={dt}>サービス内容</dt>
          <dd>
            <p className={`${s.p} mb-2`}>iOS アプリ「ActiveLog」のプレミアム機能（以下を含む）：</p>
            <ul className={s.ul}>
              <li>目標の無制限設定（無料プランは3件まで）</li>
              <li>活動ヒートマップの表示</li>
              <li>週間活動時間グラフの表示</li>
              <li>Apple Music を通知音に設定</li>
              <li>広告の非表示</li>
            </ul>
          </dd>
        </div>
        <div>
          <dt className={dt}>返品・キャンセルについて</dt>
          <dd className={s.p}>
            デジタルコンテンツの性質上、購入後の返金・返品はお受けできません。<br />
            サブスクリプションの解約は、App Store のサブスクリプション管理画面からお客様ご自身で行っていただけます。<br />
            解約後は現在の購読期間終了日までサービスをご利用いただけます。
          </dd>
        </div>
        <div>
          <dt className={dt}>動作環境</dt>
          <dd className={s.p}>iOS 17.6 以上を搭載した iPhone</dd>
        </div>
        <div>
          <dt className={dt}>お問い合わせ</dt>
          <dd className={s.p}>
            <a href="PLACEHOLDER_FORM_URL" target="_blank" rel="noopener noreferrer" className={s.link}>お問い合わせフォーム</a>
          </dd>
        </div>
      </dl>
    </Layout>
  )
}
