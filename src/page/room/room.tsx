import { setMessageData, updateMessageData } from "../../redux/store/roomMessage"
import { Message, ReduxStore, RoomMessage } from "../../interface/redux"
import { SocketContext } from "../../context/socket"
import { MessageInput } from './messageInput'
import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { MessageList } from "./messageList"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import './room.scss'

export const Room = () => {

    const {id} = useParams()
    const dispatch = useDispatch()
    const socket = useContext(SocketContext)
    const user = useSelector((store:ReduxStore) => store.jwt)

    useEffect(() => {
        if(user.token && user.user){
            socket.emit("getAllMessage", {id})
            socket.emit("joinRoom", {username: user.user, id})
            socket.on("join", (msg) => console.log(msg, ' join'))
            socket.on("leave", (msg) => console.log(msg, ' leave'))
            socket.on("messageRoomGet", (msg: Message) => dispatch(updateMessageData(msg)))
            socket.on("setAllMessage", (data: RoomMessage) => dispatch(setMessageData(data)))
        }
        return () => {
            if(user.token && user.user){
                socket.emit("leaveRoom", {username: user.user, id})
                socket.off("join")
                socket.off("leave")
                socket.off("messageRoomGet")
                socket.off("setAllMessage")
            }
        }
    },[socket, id])
    
    return <section className="section-message">
        <MessageList/>
        <MessageInput/>
    </section>
}