import { SocketConnection } from "./components/connection/connection"
import { ProtectedRouter } from "./components/protected/protected"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Registration } from "./page/registration/registration"
import { Login } from "./page/login/login"
import { Home } from "./page/home/home"
import { Room } from "./page/room/room"

export const App = () => {
  return <BrowserRouter>
    <Routes>
        <Route element={<ProtectedRouter/>}>
          
          <Route element={<SocketConnection/>}>

              <Route path="/" element={<Home/>}>
                <Route path="/room/:id" element={<Room />}/>
              </Route>
            
          </Route>

          <Route path="/login" element={<Login />}/>
          <Route path="/registration" element={<Registration />}/>
        </Route>
    </Routes>
  </BrowserRouter>
}

