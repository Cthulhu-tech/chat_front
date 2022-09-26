import { useFetch } from "../../../hook/useFetch"

export const DeleteRoom = ({idRoom}: {idRoom: number}) => {

    const [load, data, error, fetchData] = useFetch<number>("DELETE", true)

    const deleteRoom = () => fetchData("room/" + idRoom)

    return <input type="button" value="Delete" className="delete-room" onClick={deleteRoom}/>

}