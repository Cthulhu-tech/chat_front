import { deleteUserData } from "../../../redux/store/jwt"
import { NavLink, useLocation } from "react-router-dom"
import { useFetch } from "../../../hook/useFetch"
import { useDispatch } from "react-redux"

export const Defined = () => {

    const dispatch = useDispatch()
    const location = useLocation()
    const [load, data, error, fetchData] = useFetch("POST")

    const Lagout = () => {
        fetchData("user/lagout")
        dispatch(deleteUserData(null))
    }

    return <div>
        {location.pathname !== '/' && <NavLink to="/">Back</NavLink>}
        <input type="button" value="lagout" onClick={Lagout}/>
    </div>

}