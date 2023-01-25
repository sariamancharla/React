import {useContext} from 'react'
import {ThemeContext} from '../context/ThemeContext'

export const useTheme=()=>{
    const context=useContext(ThemeContext)

        //when used outside scope of it it will be undefined
        //not around App may be only nav
        if (context===undefined){
            throw new Error("useTheme() must be used inside a ThemeProvider")
        }

    return context
}