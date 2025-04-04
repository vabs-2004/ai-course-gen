import React,{useContext} from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { UserInputContext } from '@/context/context';
function TopicDesc() {
    const {userCourseInput,setUserCourseInput} = useContext(UserInputContext);
    const handleInputChange =(fieldName, value) => {
        setUserCourseInput(prev=>({
            ...prev,
            [fieldName]:value
        }))
    };
  return (
    <div className='mx-20 lg:mx-44 -mt-30'>
        {/* Input Topic  */}
        <div className='mt-5'>
            <label>✍🏻Write the topic of your study content:</label>
            <Input placeholder="Topic" className='h-14 text-2xl font-bold text-black' defaultValue={userCourseInput.topic} onChange={(e)=>handleInputChange('topic',e.target.value)}/>
        </div>

        {/*Text Area Description*/}
        <div className='mt-5'>
            <label>💡Tell us more about your study content,what you want to learn(Optional):</label>
            <Textarea placeholder="About your course" className='h-24 text-2xl font-bold text-black' defaultValue={userCourseInput.description} onChange={(e)=>handleInputChange('description',e.target.value)}/>
        </div>
    </div>
  )
}

export default TopicDesc