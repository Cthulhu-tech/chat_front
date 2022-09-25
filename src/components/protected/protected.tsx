import { Outlet, Navigate, useLocation } from "react-router-dom"
import { lazy, Suspense, useEffect, } from "react"
import { ReduxStore } from "../../interface/redux"
import { Loading } from "../loading/loading"
import { useSelector } from "react-redux"

const JWT = lazy(() => import('./jwt'))

export const ProtectedRouter = () => {

    const location = useLocation()
    const userData = useSelector((store:ReduxStore) => store.jwt)
    
    useEffect(() => {},[userData])

    if(userData.token && !userData.load && (location.pathname === '/login' || location.pathname === '/registration')) return <Navigate to='/'/>
    if(userData.token === null && !userData.load && (location.pathname === '/login' || location.pathname === '/registration')) return <Outlet/>
    if(userData.token === null && !userData.load) return <Navigate to='/login'/>

    return <Suspense fallback={<Loading/>}>
        {userData.token && !userData.load ? <Outlet/> : <JWT/>}
    </Suspense>

}
