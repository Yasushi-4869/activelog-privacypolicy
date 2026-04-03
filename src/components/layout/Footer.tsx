import { Link } from 'react-router'
import { ROUTES } from '@/constants/routes'

export default function Footer() {
  return (
    <footer className="relative px-6 py-8 border-t border-black/[0.04]">
      <div className="mx-auto max-w-3xl flex flex-col items-center gap-4">
        <nav className="flex items-center gap-6">
          <Link to={ROUTES.privacy} className="text-xs text-gray-400 hover:text-gray-600 transition-colors">プライバシーポリシー</Link>
          <Link to={ROUTES.terms} className="text-xs text-gray-400 hover:text-gray-600 transition-colors">利用規約</Link>
          <Link to={ROUTES.tokushoho} className="text-xs text-gray-400 hover:text-gray-600 transition-colors">特定商取引法に基づく表記</Link>
        </nav>
        <p className="text-xs text-gray-300">© {new Date().getFullYear()} ActiveLog</p>
      </div>
    </footer>
  )
}
