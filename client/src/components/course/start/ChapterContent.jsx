import React from 'react'
import YouTube from 'react-youtube';
import ReactMarkdown from 'react-markdown';
import service from '@/configs/service';
const opts = {
  height: '390',
  width: '640',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
  },
};
function ChapterContent({chapter,content}) {
    console.log(chapter);
    console.log(content);

    if(!chapter) return null;
    if (!content) return null;
    
    console.log("c:",content);

    let parsedContent = JSON.parse(content.content);
    console.log("pc:",parsedContent);
  return (
    <div className='p-10'>
        <h2 className='font-medium text-2xl'>{chapter["Chapter Name"]}</h2>
        <p className='text-gray-600'>{chapter.About}</p>


        {/* video */}
        <div className='flex justify-center my-6'>
          <YouTube
          videoId={content.videoId}
          opts={opts}
          />
        </div>
        
        {/* content */}
        <div>
          {parsedContent.map((item,index)=>(
            <div className='p-5 bg-sky-50 mb-3 rounded-lg'>
              <h2 className='font-medium text-lg'>{item.title}</h2>
              {/* <p className='whitespace-pre-wrap'>{item.description}</p> handles new line */}
              <ReactMarkdown>{item.description}</ReactMarkdown>
              {item["Code Example"] && (
                <div className='p-4 bg-black text-white rounded-md mt-3'>
                  <pre>
                    <code>
                      {item["Code Example"]
                      .replace(/<precode>/g, '') // Remove <precode> tags
                      .replace(/<\/precode>/g, '')
                      .replace(/\\n/g, '\n')
                      }
                    </code>
                  </pre>
              </div>)}
            </div>
          ))}
        </div>

    </div>
  )
}

export default ChapterContent