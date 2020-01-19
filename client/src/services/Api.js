import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'http://192.168.178.57:8081/'
  })
}
