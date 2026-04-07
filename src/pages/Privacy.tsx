import Layout from '@/components/layout/Layout'
import { legalStyles as s } from '@/styles/legal'

export default function Privacy() {
  return (
    <Layout>
      <h1 className={s.h1}>ActiveLog プライバシーポリシー</h1>
      <span className={s.date}>最終更新日: 2026年4月5日</span>

      <section className={s.section}>
        <h2 className={s.h2}>個人情報の収集について</h2>
        <p className={s.p}>
          本アプリでは、ユーザーが入力したタスク名・記録データ等はすべて端末内にのみ保存され、開発者がこれらの情報を収集・閲覧することはありません。
        </p>
        <p className={`${s.p} mt-3`}>
          「特定商取引法に関するお問い合わせ」フォームからご連絡いただいた場合、入力されたメールアドレスはお問い合わせへの返信目的のみに使用します。取得した情報を第三者に提供することはありません。
        </p>
      </section>

      <section className={s.section}>
        <h2 className={s.h2}>広告について</h2>
        <p className={`${s.p} mb-3`}>
          本アプリでは、広告配信のためにGoogle AdMob（Google LLC）を使用しています。AdMobは、広告の配信・効果測定のために以下の情報を自動的に収集する場合があります。
        </p>
        <ul className={`${s.ul} mb-3`}>
          <li>端末の広告識別子（IDFA）</li>
          <li>IPアドレス</li>
          <li>端末情報（機種、OS バージョン等）</li>
          <li>アプリの使用状況に関する情報</li>
        </ul>
        <p className={`${s.p} mb-2`}>
          これらの情報はGoogleのプライバシーポリシーに基づいて取り扱われます。詳細は以下をご確認ください。
        </p>
        <ul className="text-sm space-y-1.5 list-disc list-inside">
          <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className={s.link}>Google プライバシーポリシー</a></li>
          <li><a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className={s.link}>Google の広告に関するポリシー</a></li>
        </ul>
        <p className={`${s.p} mt-3`}>
          ユーザーは、端末の「設定」&gt;「プライバシーとセキュリティ」&gt;「トラッキング」からアプリのトラッキングを制限することができます。
        </p>
      </section>

      <section className={s.section}>
        <h2 className={s.h2}>プライバシーポリシーの変更</h2>
        <ul className={s.ul}>
          <li>このプライバシーポリシーは予告なく変更できるものとします。</li>
          <li>変更があった場合はこのページを更新してお知らせいたします。</li>
          <li>プライバシーポリシーの変更はこのページが更新された時から有効になるものとします。</li>
        </ul>
      </section>

      <section className={s.section}>
        <h2 className={s.h2}>免責事項</h2>
        <ul className={s.ul}>
          <li>本アプリの利用上の不具合については可能な限り対応いたしますが、利用者が本アプリを利用して生じた損害に関して開発者は責任を負わないものとします。</li>
        </ul>
      </section>

      <section className={s.section}>
        <h2 className={s.h2}>外部サイトへのリンク</h2>
        <ul className={s.ul}>
          <li>本アプリには、外部の法人、団体等のウェブサイトへのリンクが含まれている場合があります。開発者は、外部のサイトにおける個人情報の取り扱いについて責任を負うものではありません。</li>
        </ul>
      </section>

      <section className={s.section}>
        <h2 className={s.h2}>お問い合わせ</h2>
        <p className={s.p}>
          プライバシーポリシーに関するお問い合わせは、アプリ内の「ご意見・ご要望」からお願いいたします。
        </p>
      </section>
    </Layout>
  )
}
