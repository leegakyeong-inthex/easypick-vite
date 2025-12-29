import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import SignIn from '@/pages/SignIn.tsx'
import SignUp from '@/pages/SignUp.tsx'
import MyCards from '@/pages/MyCards.tsx'
import Search from '@/pages/Search.tsx'
import Recommendation from '@/pages/Recommendation.tsx'
import './index.css'
import App from './App.tsx'
import Layout from './layout.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/my-cards" element={<MyCards />} />
          <Route path="/search" element={<Search />} />
          <Route path="/recommendation" element={<Recommendation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
