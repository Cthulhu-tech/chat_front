import { ReduxStore } from "../../../interface/redux"
import { useFetch } from "../../../hook/useFetch"
import { IRoom } from "../../../interface/room"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import { DeleteRoom } from "./delete"
import { Create } from "./create"
import './room.scss'

export const RoomList = () => {

    const [open, setOpen] = useState(false)
    const jwt = useSelector((store:ReduxStore) => store.jwt)
    const [load, data, error, fetchData] = useFetch<IRoom>("GET", true)

    useEffect(() => {jwt.token && fetchData('room')}, [])

    const openCreate = () => setOpen(!open)

    const List = () =>
        <section className="room-container">{data && data.rooms.map((room) => 
            <article key={room.id} className="room-description">
                <NavLink to={"room/" + room.id} className="room-link">
                    <p className="room-name">#{room.name}</p>
                    <p className="room-creator">{room.user}</p>
                </NavLink>
                {jwt.user === room.user && <DeleteRoom idRoom={room.id}/>}
            </article>
        )}</section>
    

    return <aside className="room-data">
        {data && <List/>}
        <input type="button" className="room-btn" value="Create Room" onClick={openCreate}/>
        {open && <Create/>}
    </aside>

}