import { socket, SocketContext } from "../../context/socket";
import { Outlet } from "react-router-dom"
import { useEffect } from 'react';

export const SocketConnection = () => {

    useEffect(() => {

        socket.auth = {jwt: "sdfsdf"}
        socket.connect();
        socket.on('connection', (msg:string) => console.log(msg));
        socket.on('jwt error', (msg:string) => console.log(msg));
        return () => {
            socket.close();
        };

    },[])

    return <SocketContext.Provider value={socket}>
        <div>
            <Outlet/>
        </div>
    </SocketContext.Provider>
}