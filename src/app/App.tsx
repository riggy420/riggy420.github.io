import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { SiteLayout } from '@/components/layout/SiteLayout'
import { AboutPage } from '@/pages/AboutPage'
import { PortfolioPage } from '@/pages/PortfolioPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<PortfolioPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
