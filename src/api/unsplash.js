import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
    headers: {
    Authorization: 'Client-ID Vxue0Pv4zXkB3eEqAhvhr3R158BozTBYc7zXe4IFbdo'
  }
})