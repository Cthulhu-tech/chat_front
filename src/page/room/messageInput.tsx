import { SocketContext } from "../../context/socket"
import { useContext, useEffect } from "react"
import { useForm } from "../../hook/useForm"
import { useParams } from "react-router-dom"
import { MessageForm } from "../../interface/form"

export const MessageInput = () => {

    const {id} = useParams()
    const [value, handler] = useForm<MessageForm>()
    const socket = useContext(SocketContext)
    const sendMessage = () => socket.emit('messageRoomSet', {msg: value?.msg, id})

    useEffect(() => {}, [id])

    return <>
        <input type="text" placeholder="message" onChange={handler} name="msg"/>
        <input type="button" value="send" onClick={sendMessage}/>
    </>

}