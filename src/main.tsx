import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import SignIn from '@/pages/SignIn.tsx'
import SignUp from '@/pages/SignUp.tsx'
import MyCards from '@/pages/MyCards.tsx'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/my-cards" element={<MyCards />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
