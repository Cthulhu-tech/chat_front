import { NotDefined } from "../userNotDefined/notDefined"
import { ReduxStore } from "../../../interface/redux"
import { Defined } from "../userDefined/defined"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import './header.scss'

export const Header = () => {
    
    const userData = useSelector((store:ReduxStore) => store.jwt)

    useEffect(() => {}, [userData])

    return <header>
        {!userData.load && (userData.token ? <Defined/> : <NotDefined/>)}
    </header>
}