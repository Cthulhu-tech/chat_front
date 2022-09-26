import { socket, SocketContext } from "../../context/socket"
import { Outlet, useLocation } from "react-router-dom"
import { ReduxStore } from "../../interface/redux"
import { useEffect, useState } from 'react'
import { useSelector } from "react-redux"
import { Error } from "../error/error"

export const SocketConnection = () => {

    const location = useLocation()
    const [error, setError] = useState<{message: string}>();
    const jwt = useSelector((store:ReduxStore) => store.jwt.token)

    useEffect(() => {
        if(jwt){
            socket.auth = {jwt}
            socket.connect()
            socket.on('error', (msg) => setError(msg))
            socket.on('create', (msg:string) => console.log(msg))
            socket.on('connection', (msg:string) => console.log(msg))
            socket.on('disconection', (msg:string) => console.log(msg))
        }
        return () => {
            setError(undefined)
            jwt && socket.close()
        };

    },[jwt, location])

    return <SocketContext.Provider value={socket}>
            {!error ? <Outlet/> : <Error {...error}/>}
    </SocketContext.Provider>
}