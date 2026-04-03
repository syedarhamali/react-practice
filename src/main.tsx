import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router";
import App from './App.tsx'
import Counter from './components/counter/index.tsx';
 import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/react-practice" element={<App />} />
        <Route path="/react-practice/counter" element={<Counter />} />
        <Route path="/react-practice/arham" element={<App />} />
      </Routes>

    </BrowserRouter>
    <ToastContainer />
  </StrictMode>,
)
