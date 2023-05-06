import jwtDecode from 'jwt-decode'
import React,{useReducer, createContext} from 'react'

const initialstate ={
    user:null
}

const token =localStorage.getItem("token")
if(token){
    const decodedToken = jwtDecode(token) //to decode token savedin local memory
    
    if(decodedToken.exp * 1000 < Date.now()){
        localStorage.removeItem("token")  //to remove token if it has expired
    }else{
        initialstate.user = decodedToken  //set the initial state
    }
}

const AuthContext = createContext({
    user: null,
        login:(userData)=>{},
        logout:()=>{},
})

function authReducer(state,action){
    switch(action.type){
        case "LOGIN":
            return {
              ...state,
                user:action.payload
            }
        case "LOGOUT":
            return {
              ...state,
                user:null
            }
        default:
            return state
    }
}

function AuthProvider(props){
    const [state, dispatch]=useReducer(authReducer,initialstate)

const login = (userData)=>{
    localStorage.setItem("token",userData.token);
    dispatch({
        type:"LOGIN",
        payload:userData
    }) //this is not the apollo login server, it indicates what we want to do wen we get a successful login
}

const logout = ()=>{
    localStorage.removeItem("token");
    dispatch({
        type:"LOGOUT"
    })
}
    return(
        <AuthContext.Provider value={{user:state.user,login,logout}}
            {...props}/>

    )
}


export {AuthContext,AuthProvider}