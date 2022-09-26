import { RoomList } from "../../components/layout/room/roomList"
import { Outlet } from "react-router-dom"

export const Home = () => {

    return <>
        <RoomList/>
        <main>
           <Outlet/> 
        </main>
    </>
}