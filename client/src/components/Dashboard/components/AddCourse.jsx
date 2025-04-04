import React from 'react'
import { useUser } from '@clerk/clerk-react'
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
function AddCourse() {
    const {user} = useUser();
    const navigate = useNavigate();
    console.log(user);
    const myStyle = {
        fontFamily: "'Stylish', sans-serif"
    };
  return (
    <div className='p-10 flex item-center justify-between'>
      <div>
        <h2 className='text-3xl ' style={myStyle}>Hello,<span className='font-bold'>{user.fullName}</span> </h2>
        <p className='text-m text-gray-500 p-0'>Create your learning course with AI!</p>
      </div>
        <Button className={'bg-indigo-500 text-white hover:bg-indigo-700 text-xl'} style={myStyle} onClick={() => navigate('/create-course')}>+Create Course</Button>
    </div>
  )
}

export default AddCourse
