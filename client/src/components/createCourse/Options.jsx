import React, { useContext } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { UserInputContext } from "@/context/context";

function Options() {
    const {userCourseInput,setUserCourseInput} = useContext(UserInputContext);
    const handleInputChange =(fieldName, value) => {
            setUserCourseInput(prev=>({
                ...prev,
                [fieldName]:value
            }))
    };
  return (
    <div className="px-10 md:px-20 lg:px-44 -mt-20 translate-x-15">
      <div className="grid grid-cols-2 gap-x-10 gap-y-28">
        <div className="flex flex-col relative"> {/* Added relative positioning */}
          <label htmlFor="difficulty" className="text-sm block mb-2">
          🎓Difficulty Level
          </label>
          <Select onValueChange={(value)=>handleInputChange('level',value)} defaultValue={userCourseInput.level}>
            <SelectTrigger id="difficulty" className="w-[200px]">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent className="absolute z-50"> {/* Added absolute positioning and z-index */}
              <SelectItem value="Beginner">Beginner</SelectItem>
              <SelectItem value="Intermediate">Intermediate</SelectItem>
              <SelectItem value="Advanced">Advanced</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col relative"> {/* Added relative positioning */}
          <label htmlFor="duration" className="text-sm block mb-2">
          🕑Course Duration
          </label>
          <Select onValueChange={(value)=>handleInputChange('duration',value)} defaultValue={userCourseInput.duration}>
            <SelectTrigger id="duration" className="w-[200px]">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent className="absolute z-50"> {/* Added absolute positioning and z-index */}
              <SelectItem value="1 Hour">1 Hour</SelectItem>
              <SelectItem value="2 Hours">2 Hours</SelectItem>
              <SelectItem value="More Than 3 Hours">More Than 3 Hours</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col relative"> {/* Added relative positioning */}
          <label htmlFor="add-video" className="text-sm block mb-2">
          ▶️Add Video?
          </label>
          <Select onValueChange={(value)=>handleInputChange('displayVideo',value)} defaultValue={userCourseInput.displayVideo}>
            <SelectTrigger id="add-video" className="w-[200px]">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent className="absolute z-50"> {/* Added absolute positioning and z-index */}
              <SelectItem value="Yes">Yes</SelectItem>
              <SelectItem value="No">No</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="chapters" className="text-sm block mb-2">
          📖No. Of Chapters
          </label>
          <Input id="chapters" type="number" className="w-[200px]" onChange={(e)=>handleInputChange('noOfChapters',e.target.value)} defaultValue={userCourseInput.noOfChapters}/>
        </div>
      </div>
    </div>
  );
}

export default Options;
