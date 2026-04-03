import { Link } from 'react-router'
import { ROUTES } from '@/constants/routes'

export default function Header() {
  return (
    <header className="sticky top-0 z-10 backdrop-blur-md bg-white/70 border-b border-black/[0.06] px-6 py-4">
      <div className="mx-auto max-w-3xl flex items-center justify-between">
        <Link to={ROUTES.home} className="text-sm font-semibold text-gray-400 tracking-wide hover:text-gray-600 transition-colors">
          ActiveLog
        </Link>
        <nav className="flex items-center gap-5">
          <Link to={ROUTES.privacy} className="text-xs text-gray-400 hover:text-gray-600 transition-colors">プライバシーポリシー</Link>
          <Link to={ROUTES.terms} className="text-xs text-gray-400 hover:text-gray-600 transition-colors">利用規約</Link>
          <Link to={ROUTES.tokushoho} className="text-xs text-gray-400 hover:text-gray-600 transition-colors">特定商取引法</Link>
        </nav>
      </div>
    </header>
  )
}
