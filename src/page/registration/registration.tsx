import { UserPayload } from "../../interface/redux"
import { IDataInput } from "../../interface/fetch"
import { useFetch } from "../../hook/useFetch"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

export const Registration = () => {

    const dispatch = useDispatch()
    const [value, setValue] = useState<IDataInput>({login: "", password: ""})
    const {load, data, error, fetchData} = useFetch<UserPayload, IDataInput>("POST")

    const LoginData = () => fetchData("user/login") 

    useEffect(() => {

    },[data, load])

    return <>
        <input type="text" placeholder="login"/>
        <input type="text" placeholder="password"/>
    </>
}