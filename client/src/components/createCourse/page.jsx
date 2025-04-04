import React, { useEffect, useState } from 'react'
import Header from '../Landing/Header';
import { HiLightBulb, HiQueueList } from 'react-icons/hi2';
import { v4 as uuidv4 } from 'uuid';
import { Button } from '../ui/button';
import TopicDesc from './TopicDesc';
import Options from './Options';
import { UserInputContext } from '@/context/context';
import { GenerateCourseLayout_AI } from '@/configs/AiModel';
import LoadingDialog from './LoadingDialog';
import { CourseList } from '@/configs/schema';
import { useUser } from '@clerk/clerk-react';
import { db } from '@/configs/db';
import { useNavigate } from 'react-router-dom';
function CreateCourse() {
    const navigate = useNavigate();
    const {user} = useUser();
    const StepperOptions =[{
        id:1,
        name:'Topic & Desc',
        icon:<HiQueueList />
    },
    {
        id:2,
        name:'Options',
        icon:<HiLightBulb />
    }]
    const checkStatus = () => { //check next button status
        if(userCourseInput.length==0){
            return true;
        }
        if(activeStep==0&&(userCourseInput.topic.length==0||userCourseInput.topic==undefined)){
            return true;
        }
        else if(activeStep==1&&(userCourseInput.level==undefined||userCourseInput.duration==undefined||userCourseInput.displayVideo==undefined||userCourseInput.noOfChapters==undefined)){
            return true;
        }
        return false;
    }
    const [loading, setLoading] = useState(false);
    const [activeStep, setActiveStep] = useState(0);
    const [userCourseInput, setUserCourseInput] = useState([]);
    useEffect(()=>{
        console.log(userCourseInput);
    },[userCourseInput]);
    const GenerateCourseLayout = async() => {
        setLoading(true)
        const BASIC_PROMPT = 'Generate A Course Tutorial on  Following Detail with field as Course Name,Description,Along with Chapter Name,About,Duration.Focus on the Additional details provided too: '
        const USER_INPUT_PROMPT = 'Topic: '+userCourseInput.topic+', Additional Details: '+userCourseInput.description+' , Level:'+userCourseInput.level+', Duration:'+userCourseInput.duration+', NoOf Chapters:'+userCourseInput.noOfChapters+', in JSON format.'
        const FINAL_PROMPT = BASIC_PROMPT+USER_INPUT_PROMPT;
        console.log(FINAL_PROMPT);
        const result = await GenerateCourseLayout_AI.sendMessage(FINAL_PROMPT);
        console.log(result.response.text());
        console.log(JSON.parse(result.response.text()))
        setLoading(false);
        SaveCourseLayoutInDb(JSON.parse(result.response.text()));
    }

    const SaveCourseLayoutInDb= async(courseLayout) =>{
        var id = uuidv4();
        setLoading(true);
        const result  = await db.insert(CourseList).values({
            courseId:id,
            name:userCourseInput.topic,
            level:userCourseInput.level,
            description:userCourseInput.description,
            courseOutput:courseLayout,
            createdBy:user.primaryEmailAddress.emailAddress,
            userName:user.fullName,
            userProfileImage:user.imageUrl
        })
        console.log("Finish");
        setLoading(false);
        navigate(`/create-course/${id}`); //Dynamic Route
    }

  return (
    <div> 
    <UserInputContext.Provider value={{userCourseInput, setUserCourseInput}}>
        <Header/>
        {/*Stepper*/}
        <div className='flex flex-col justify-center items-center p-20'>
            <h2 className='text-4xl text-indigo-600 font-bold p-4.5'>Create Course</h2>
            <div className='flex mt-5'>
                {StepperOptions.map((item,index) =>(
                    <div key={item.id} className='flex items-center'>
                        <div className='flex flex-col items-center w-[50px] md:w-[100px]'>
                            <div className={`bg-gray-200 p-3 rounded-full text-white ${activeStep>=index && 'bg-indigo-500'}`}>
                                {item.icon}
                            </div>
                            <h2 className='hidden md:block md:text-sm'>{item.name}</h2>
                        </div>
                        {/*Horizontal Line*/}
                        {index!=StepperOptions.length-1 &&<div className={`h-1 w-[50px] md:w-[200px] rounded-full lg:w-[300px] bg-gray-300 ${activeStep-1>=index && 'bg-indigo-500'}`}></div>}
                    </div>
                ))}
            </div>
        </div>

        <div className='px-10 md:px-20  lg:px-44 mt-10'>
        `   {/*Components*/}
            {activeStep==0?<TopicDesc/>:activeStep==1?<Options/>:null}

            {/*Next Previous Buttons*/}
            <div className='flex justify-between mt-10'>
                <Button disabled={activeStep==0} variant='outline' onClick={() => setActiveStep(activeStep - 1)} className='text-white bg-indigo-500 hover:bg-indigo-700'>Previous</Button>

                {activeStep<1 && <Button disabled={checkStatus()} onClick={() => setActiveStep(activeStep + 1)} className='text-white bg-indigo-500 hover:bg-indigo-700'>Next</Button>}

                {activeStep==1 && <Button disabled={checkStatus()} onClick={() => GenerateCourseLayout()} className='text-white bg-indigo-500 hover:bg-indigo-700'>Generate Course Layout</Button>}
            </div>
        </div>
    <div>
            <LoadingDialog loading={loading}/>
    </div>
    </UserInputContext.Provider>
    </div>
  )
}

export default CreateCourse;