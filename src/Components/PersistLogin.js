import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useRefreshToken from '../hooks/useRefreshToken'
import useAuth from '../hooks/useAuth'


const PersistLogin=()=>{
    const [isLoading, setIsLoading]=  useState(true)
    const refresh = useRefreshToken()

    const {auth} = useAuth()

    useEffect( async()=>{
        try{
            await refresh();
        }
        catch (err){
            console.log(err)
        }
        finally{
            setIsLoading(false)
        }
        !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false)

    },[])

    useEffect(()=>{

        console.log(`isloading :${isLoading}`)
        console.log(`aT: ${JSON.stringify(auth?.accessToken)}`)
    },[isLoading])

    return(
        <div>
            {isLoading? <p>Loading...</p>
            : <Outlet/>} 
        </div>
    )
}
export default PersistLogin