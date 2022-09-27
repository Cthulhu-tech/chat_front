import { NavLink } from "react-router-dom"

export const NotDefined = () => {

    return <div>
        <NavLink className="back-btn" to="/login">Login</NavLink>
        <NavLink className="back-btn" to="/registration">Registration</NavLink>
    </div>

}