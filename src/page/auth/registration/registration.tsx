import { updateUserData } from "../../../redux/store/jwt"
import { UserPayload } from "../../../interface/redux"
import { IDataInput } from "../../../interface/fetch"
import { useFetch } from "../../../hook/useFetch"
import { useForm } from "../../../hook/useForm"
import { useDispatch } from "react-redux"
import { useEffect } from "react"

export const Registration = () => {

    const dispatch = useDispatch()
    const [value, formHandler] = useForm<IDataInput>()
    const [load, data, error, fetchData] = useFetch<UserPayload, IDataInput>("POST")

    const LoginData = () => fetchData("user/regist", value)

    useEffect(() => {
        if(data) dispatch(updateUserData(data))
    },[data, load])

    return <section className="auth-form">
            <p>Registration</p>
            <div className="auth-form-container">
                <input type="text" className="auth-input" placeholder="login" onChange={formHandler} name="login"/>
                <input type="text" className="auth-input" placeholder="password" onChange={formHandler} name="password"/>
            </div>
        <input className="auth-btn" type="button" value="send" onClick={LoginData} />
    </section>
}