import axios from 'axios'

export const localStor_Item = 'user_06_redux_01'

const API_URL = 'http://localhost:8080/api/auth/'

const register = (username, email, password) => {
    return axios.post(API_URL + 'signup', {
        username,
        email, 
        password
    })
}

const login = (username, password) => {
    return axios.post(API_URL + 'signin', {
        username,
        password
    }).then((response) => {
        if(response.data.token){
            localStorage.setItem(localStor_Item, JSON.stringify(response.data))
        }
        return response.data
    })
}

const logout = () => {
    localStorage.removeItem(localStor_Item)
}

export default {
    register,
    login,
    logout
}
