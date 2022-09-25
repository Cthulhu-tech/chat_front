import { socket, SocketContext } from "../../context/socket"
import { ReduxStore } from "../../interface/redux"
import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import { useEffect } from 'react'

export const SocketConnection = () => {

    const jwt = useSelector((store:ReduxStore) => store.jwt.token)

    useEffect(() => {

        socket.auth = {jwt}
        socket.connect();
        socket.on('connection', (msg:string) => console.log(msg));

        return () => {
            socket.close();
        };

    },[jwt])

    return <SocketContext.Provider value={socket}>
        <div>
            <Outlet/>
        </div>
    </SocketContext.Provider>
}