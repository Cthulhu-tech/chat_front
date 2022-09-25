import { useEffect, useState } from "react"
import { FormType } from "../interface/form"

export const useForm = <T = {}>():FormType<T> => {

    const [value, setValue] = useState<T>()

    useEffect(() => {},[value])

    const formHandler = (event: React.ChangeEvent<HTMLInputElement>) => setValue({...value, [event.target.name]: event.target.value} as T)

    return [value, formHandler]
}