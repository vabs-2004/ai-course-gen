import axios from 'axios';

const YOUTUBE_BASE_URL ='https://www.googleapis.com/youtube/v3'

const getVideos=async(query)=>{
    const params={
        part:'snippet',
        q:query,
        maxResults:1,
        type:'video',
        key:import.meta.env.VITE_YOUTUBE_KEY
    }

    const resp = await axios.get(YOUTUBE_BASE_URL+'/search',{params});

    return resp.data.items
}

export default{
    getVideos
}