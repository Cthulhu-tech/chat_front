import { ReduxStore } from "../../../interface/redux"
import { useFetch } from "../../../hook/useFetch"
import { IRoom } from "../../../interface/room"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import { DeleteRoom } from "./delete"
import { Create } from "./create"

export const RoomList = () => {

    const [open, setOpen] = useState(false)
    const jwt = useSelector((store:ReduxStore) => store.jwt)
    const [load, data, error, fetchData] = useFetch<IRoom>("GET", true)

    useEffect(() => {jwt.token && fetchData('room')}, [])

    const openCreate = () => setOpen(!open)

    const List = () =>
        <section>{data && data.rooms.map((room) => 
            <article key={room.id}>
                <NavLink to={"room/" + room.id}>
                    <p>Room name: {room.name}</p>
                    <p>Room creater: {room.user}</p>
                </NavLink>
                {jwt.user === room.user && <DeleteRoom idRoom={room.id}/>}
            </article>
        )}</section>
    

    return <aside>
        {data && <List/>}
        {open && <Create/>}
        <input type="button" value="Create Room" onClick={openCreate}/>
    </aside>

}