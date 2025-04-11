import axios from 'axios';

const YOUTUBE_BASE_URL ='https://www.googleapis.com/youtube/v3'

const getVideos = async (query) => {
    try {
        const resp = await axios.get('http://localhost:5000/youtube', { params: { query } });
        return resp.data;
    } catch (error) {
        console.error('Error fetching videos:', error.message);
        return [];
    }
};

export default{
    getVideos
}