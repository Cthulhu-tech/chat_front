import { updateUserData } from "../../redux/store/jwt"
import { UserPayload } from "../../interface/redux"
import { useFetch } from "../../hook/useFetch"
import { useDispatch } from "react-redux"
import { Outlet } from "react-router-dom"
import { Error } from "../error/error"
import { useEffect } from "react"

const JWT = () => {

    const dispatch = useDispatch()
    const [load, data, error, fetchData] = useFetch<UserPayload>("POST")

    useEffect(() => {fetchData("user/refresh")}, [])
    useEffect(() => {
        if(data) dispatch(updateUserData(data))
    },[data, load])
    
    if(error) return <Error {...{message: error.message}}/>

    return <Outlet/>
}

export default JWT
