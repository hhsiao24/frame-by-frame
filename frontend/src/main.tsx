import { createRoot } from 'react-dom/client';
import './index.css';
import './fonts.css'
import { BrowserRouter, Route, Routes } from 'react-router';
import { Home } from '@/features/home/Home.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>,
);
