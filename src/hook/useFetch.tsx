import { ErrorData, IUseFetch, ReduxStore } from "../interface/redux"
import { useSelector } from "react-redux"
import { useState } from "react"

export const useFetch = <T, U = any>(method: string = 'POST', Authorization: boolean = false): IUseFetch<T, U> => {

    const [load, setLoad] = useState(true)
    const [data, setData] = useState<T>()
    const [error, setError] = useState<ErrorData>()

    const token = useSelector((store:ReduxStore) => store.jwt.token)

    const fetchData = (url: string, body?: U) => {

        const headers: HeadersInit = {
            'Content-type': 'application/json',
            'Accept': 'application/json',
        }

        if(Authorization) headers['Authorization'] = 'Bearer ' + token

        const options: RequestInit = {
            method,
            mode: 'cors',
            redirect: 'follow',
            credentials: "include",
            headers
        }

        if(body)options.body = JSON.stringify(body);
        
        fetch(process.env.REACT_APP_Server_Response + url, options)
        .then(response => response.json())
        .then((json) => {
            setLoad(false)
            setData(json)
        })
        .catch(err => {
            setLoad(false)
            setError(err.message)
        })

    }
    
    return [load, data, error, fetchData]
}