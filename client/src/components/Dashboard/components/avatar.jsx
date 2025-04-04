import { UserButton } from '@clerk/clerk-react';
import React from 'react';
import AddCourse from './addCourse';

function Avatar({ extended }) {
  return (
    <div className="flex justify-between items-center px-5 transition-all duration-300">
      {/* Adjust margin-left dynamically */}
      <span
        className={`text-3xl font-extrabold tracking-wide text-gray-800 transition-all duration-300
          ${extended ? 'ml-0' : 'ml-[-150px]'}`}
      >
        AI-Cademy
      </span>
      {/* Enlarged UserButton */}
      <UserButton className="scale-125" />
    </div>
  );
}

export default Avatar;
