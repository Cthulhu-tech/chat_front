import { updateUserData } from "../../../redux/store/jwt"
import { UserPayload } from "../../../interface/redux"
import { IDataInput } from "../../../interface/fetch"
import { useFetch } from "../../../hook/useFetch"
import { useForm } from "../../../hook/useForm"
import { useDispatch } from "react-redux"
import { useEffect } from "react"

export const Login = () => {

    const dispatch = useDispatch()
    const [value, formHandler] = useForm<IDataInput>()
    const [load, data, error, fetchData] = useFetch<UserPayload, IDataInput>("POST")

    const LoginData = () => fetchData("user/login", value)

    useEffect(() => {
        if(data) dispatch(updateUserData(data))
    },[data, load])

    return <>
        <input type="text" placeholder="login" onChange={formHandler} name="login"/>
        <input type="text" placeholder="password" onChange={formHandler} name="password"/>
        <input type="button" value="send" onClick={LoginData} />
    </>
}