import React from 'react';
import logo from '/logo.jpg';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 w-full flex items-center justify-between p-5 shadow-md bg-white">
      <div className="flex items-center gap-2">
        <img src={logo} width={50} height={50} alt="logo" />
        <span className="text-lg font-semibold">AI-Cademy</span>
      </div>
      <Button className="px-4 py-2" onClick={() => navigate('/auth')}>
        Get Started
      </Button>
    </div>
  );
}

export default Header;
