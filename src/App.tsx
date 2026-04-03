import { HashRouter, Routes, Route } from 'react-router'
import { ROUTES } from '@/constants/routes'
import Home from '@/pages/Home'
import Privacy from '@/pages/Privacy'
import Terms from '@/pages/Terms'
import Tokushoho from '@/pages/Tokushoho'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.privacy} element={<Privacy />} />
        <Route path={ROUTES.terms} element={<Terms />} />
        <Route path={ROUTES.tokushoho} element={<Tokushoho />} />
      </Routes>
    </HashRouter>
  )
}
