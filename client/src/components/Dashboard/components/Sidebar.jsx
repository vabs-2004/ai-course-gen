import React , { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '/logo.jpg'
import Avatar from './Avatar';;
import { HiHome, HiOutlineRectangleGroup, HiOutlineSwatch, HiPower, HiPuzzlePiece, HiPencilSquare,HiOutlineChevronLeft } from "react-icons/hi2";

function Sidebar({extended, setExtended}) {
  const location = useLocation();
  const pathname = location.pathname;

  const Menu = [
    { id: 1, name: 'Home', icon: <HiHome />, path: '/dashboard' },
    { id: 2, name: 'Explore', icon: <HiOutlineRectangleGroup />, path: '/dashboard/explore' },
    { id: 3, name: 'Summariser', icon: <HiOutlineSwatch />, path: '/dashboard/summariser' },
    { id: 4, name: 'Quizzer', icon: <HiPuzzlePiece />, path: '/dashboard/quizzer' },
    { id: 5, name: 'Dummy1', icon: <HiPencilSquare />, path: '/dashboard/dummy1' },
    { id: 6, name: 'Logout', icon: <HiPower />, path: '/dashboard/logout' },
  ];

  return (
    <div className={`fixed h-full p-5 shadow-md flex flex-col justify-between transition-all duration-300 ${extended? 'w-64 p-5':'w-24 p-2'}`}>
        <div>
          <div className='flex items-center space-x-3'>
            <img src={logo} width={extended ? 50: 40} height={extended ? 50: 30} alt="StuGuide Logo" />
            {extended && <span className="text-lg font-semibold whitespace-nowrap">AI-Cademy</span>}
          </div>
          <HiOutlineChevronLeft 
              className='absolute top-5 right-[-14px] bg-white rounded-full p-1 cursor-pointer text-gray-600 hover:text-black 
                text-3xl transition-transform duration-300 shadow-md'
              onClick={() => setExtended(!extended)}
              style={{ transform: extended ? "rotate(180deg)" : "rotate(0deg)" }}
          />
          <hr className='my-5'/>
          <ul className='mt-3'>
            {Menu.map((item) => (
              <Link to={item.path} key={item.id}>
                <div 
                  className={`flex items-center gap-3 text-gray-600 space-x-3 p-3 hover:bg-gray-200 hover:text-black rounded-md cursor-pointer transition-all duration-200 mb-2
                  ${pathname === item.path ? 'bg-gray-100 text-black' : ''}`}
                >
                  <div className='text-2xl'>{item.icon}</div>
                  {extended && <h2>{item.name}</h2>}
                </div>
              </Link>
            ))}
          </ul>
        </div>
</div>
  );
}

export default Sidebar;
