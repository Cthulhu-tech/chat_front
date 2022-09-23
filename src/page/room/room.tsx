import { SocketContext } from "../../context/socket";
import { useContext, useState } from "react"

export const Room = () => {

    const [msg, setMsg] = useState("")
    const socket = useContext(SocketContext);
    
    const sendMessage = () => socket.emit('message', {msg})

    const handleMessage = (event: React.ChangeEvent<HTMLInputElement>) => setMsg(event.target.value)

    return <main>
        <input type="text" placeholder="message" value={msg} onChange={handleMessage}/>
        <input type="button" value="send" onClick={sendMessage}/>
    </main>
}