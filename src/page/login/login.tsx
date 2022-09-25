import { deleteUserData, updateUserData } from "../../redux/store/jwt"
import { UserPayload } from "../../interface/redux"
import { IDataInput } from '../../interface/fetch'
import { useFetch } from "../../hook/useFetch"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

export const Login = () => {

    const dispatch = useDispatch()
    const [value, setValue] = useState<IDataInput>({login: "", password: ""})
    const {load, data, error, fetchData} = useFetch<UserPayload, IDataInput>("POST")

    const LoginData = () => fetchData("user/login", value) 
    const handleData = (event: React.ChangeEvent<HTMLInputElement>) => setValue({...value, [event.target.name]: event.target.value})

    useEffect(() => {},[value])

    useEffect(() => {
        if(data) dispatch(updateUserData(data))
        else dispatch(deleteUserData(null))
    },[data, load])

    return <>
        <input type="text" placeholder="login" onChange={handleData} name="login"/>
        <input type="text" placeholder="password" onChange={handleData} name="password"/>
        <input type="button" value="send" onClick={LoginData} />
    </>
}