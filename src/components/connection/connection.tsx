import { socket, SocketContext } from "../../context/socket"
import { ReduxStore } from "../../interface/redux"
import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import { useEffect } from 'react'

export const SocketConnection = () => {

    const jwt = useSelector((store:ReduxStore) => store.jwt.token)

    useEffect(() => {
        if(jwt){
            socket.auth = {jwt}
            socket.connect()
            socket.on('error', (msg:string) => console.log(msg))
            socket.on('create', (msg:string) => console.log(msg))
            socket.on('connection', (msg:string) => console.log(msg))
            socket.on('disconection', (msg:string) => console.log(msg))
        }
        return () => {
            jwt && socket.close()
        };

    },[jwt])

    return <SocketContext.Provider value={socket}>
            <Outlet/>
    </SocketContext.Provider>
}