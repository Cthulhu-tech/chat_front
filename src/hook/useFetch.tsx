import { ErrorData, IUseFetch } from "../interface/redux"
import { useEffect, useState } from "react"

export const useFetch = <T, U = any>(method: string = 'POST'): IUseFetch<T, U> => {

    const [load, setLoad] = useState(true)
    const [data, setData] = useState<T>()
    const [error, setError] = useState<ErrorData>()

    const options: RequestInit = {
        method,
        mode: 'cors',
        redirect: 'follow',
        credentials: "include",
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        },
    }

    useEffect(() => {console.log(data)},[data, load, error])

    const fetchData = (url: string, body?: U) => {

        if(body)options.body = JSON.stringify(body);

        fetch(process.env.REACT_APP_Server_Response + url, options)
        .then(response => response.json())
        .then((json) => {
            setData(json)
            setLoad(false)
        })
        .catch(err => {
            setError(err.message)
            setLoad(false)
        })

    }
    
    return {load, data, error, fetchData}
}