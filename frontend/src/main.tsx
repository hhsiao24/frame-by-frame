import { createRoot } from 'react-dom/client';
import './index.css';
import './fonts.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Home } from '@/features/home/Home.tsx';
import { Login } from '@/features/login/Login.tsx';
import { Profile } from '@/features/profile/Profile.tsx';
import { Picture } from '@/features/pictures/Picture.tsx';
import { GoogleOAuthProvider } from '@react-oauth/google';

createRoot(document.getElementById('root')!).render(
  <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/picture" element={<Picture />} />
      </Routes>
    </BrowserRouter>
  </GoogleOAuthProvider>,
)
