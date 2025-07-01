import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleHome = () => navigate('/');
  const handleLogin = () => navigate('/login');
  const handleRegister = () => navigate('/register');

  return (
    <div className="font-Judson bg-black fixed inset-x-0 top-0 h-16 px-8 flex items-center justify-between text-2xl  w-full z-50">
      {/* IZQUIERDA: Logo */}
      <div className="cursor-pointer text-secondary" onClick={handleHome}>
        ELEKTRA
      </div>

      {/* DERECHA: Botones como texto */}
      <div className="flex gap-8">
        <button
          onClick={handleLogin}
          className="bg-transparent border-none outline-none text-secondary hover:text-[#FFF0AD] transition duration-300"
        >
          Account
        </button>
        <button
          onClick={handleRegister}
          className="bg-transparent border-none outline-none text-secondary hover:text-[#FFF0AD] transition duration-300"
        >
          My Orders
        </button>
        <button
          onClick={handleHome}
          className="bg-transparent border-none outline-none text-secondary hover:text-[#FFF0AD] transition duration-300">
          <svg className="h-8 w-8 text-secondary-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="9" cy="19" r="2" />  <circle cx="17" cy="19" r="2" />  <path d="M3 3h2l2 12a3 3 0 0 0 3 2h7a3 3 0 0 0 3 -2l1 -7h-15.2" /></svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
