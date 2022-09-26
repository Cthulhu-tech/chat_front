import { ReduxStore } from "../../interface/redux"
import { useMemo, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"

export const MessageList = () => {

    const {id} = useParams()
    const messageList = useSelector((store:ReduxStore) => store.message)

    useEffect(() => {console.log(messageList)}, [messageList])

    const reverseData = messageList.roomMessage.slice().reverse()
    
    const List = useMemo(() => reverseData, [messageList])

    return <article className="message-list">{
        List.map((message) => {
            return <div key={message.id}>
                <p>{message.message}</p>
                <p>{message.user}</p>
            </div>
        })    
    }</article>
}