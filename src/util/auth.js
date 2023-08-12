import { redirect } from "react-router-dom"

export const getAuthToken=()=>{
    const token=localStorage.getItem('token')
    return token
}

export const checkAuthLoader=()=>{
     const token=getAuthToken()
     if(!token){
        return redirect('/login')
     }
     return ('')
}

export const logoutLoader=()=>{
    
}

