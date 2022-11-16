import axios from 'axios'
const baseUrl = 'http://127.0.0.1:8081'

export default {
    register(credentials) {
        return axios.post(baseUrl + '/register', credentials)
    }
}