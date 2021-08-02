import axios from 'axios'

const api = axios.create({
  baseURL: 'https://accounts.spotify.com/authorize',
})

api.interceptors.request.use(
  async config => {
    const token = sessionStorage.getItem('token')

    config.headers = {
      Authorization: `Bearer ${token}`,
    }
    return config
  },
  error => {
    Promise.reject(error)
  },
)

export default api
