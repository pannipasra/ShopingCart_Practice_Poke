import { localStor_Item } from './auth-service' // แค่ดึงชื่อไอเทมใน local storage มาใช้

export default function authHeader() {
    const user = JSON.parse(localStorage.getItem(localStor_Item))

    if(user && user.token){
        return { Authorization: 'Bearer ' + user.token }
    }else{
        return [];
    }
}
