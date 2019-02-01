import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params : {
      part : 'snippet',
      key: 'AIzaSyA4_H7HRBnqJPSko8XFsem23oS5xFFnjXs',
      type: 'video'
    }
});
