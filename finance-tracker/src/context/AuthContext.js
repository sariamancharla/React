import { createContext,useReducer } from "react";

export const AuthContext=createContext()

export const authReducer=(state,action)=>{
    switch (action.type){
        default:
            return state
    }
}

export const AuthContextProvider=({children})=>{
    const [state,dispatch]=useReducer(authReducer,{
        user:null
    })

    

    return(
        //wrapping the whole app within this context
        <AuthContext.Provider value={{...state,dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}
