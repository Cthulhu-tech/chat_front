import { RoomCreate, RoomList } from "../../../interface/form"
import { ReduxStore } from "../../../interface/redux"
import { useFetch } from "../../../hook/useFetch"
import { useForm } from '../../../hook/useForm'
import { IRoom } from "../../../interface/room"
import { useSelector } from "react-redux"

export const Create = () => {

    const [value, handler] = useForm<RoomList>()
    const user = useSelector((store:ReduxStore) => store.jwt.user)
    const [loadCreate, dataCreate, errorCreate, fetchDataCreate] = useFetch<IRoom, RoomCreate>("POST", true)

    const createRoom = () => user && fetchDataCreate('room', {login: user, ...value as RoomList})

    return <>
    <input type="text" onChange={handler} name="name"/>
    <input type="button" value="Send" onClick={createRoom}/>
    </>

}