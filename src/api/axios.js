/**
 * Created by topeas on 2017/5/29.
 */
import axios from 'axios'
// import config from 'config'

axios.defaults.baseURL = 'https://cnodejs.org/api/v1'

const get = (url, payload) => {
  return axios({
    method: 'get',
    url,
    params: payload,
  }).then(res => res.data)
}

const post = (url, payload) => {
  return axios({
    method: 'post',
    url,
    data: payload
  }).then(res => res.data)
}
export default {
  get,
  post,
}


