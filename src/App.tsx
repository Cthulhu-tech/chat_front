import { SocketConnection } from "./components/connection/connection"
import { Registration } from "./page/auth/registration/registration"
import { ProtectedRouter } from "./components/protected/protected"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "./components/layout/layout"
import { Login } from "./page/auth/login/login"
import { NotFound } from "./components/404/404"
import { Home } from "./page/home/home"
import { Room } from "./page/room/room"

export const App = () => {
  return <BrowserRouter>
    <Routes>
        <Route element={<Layout/>}>
          <Route element={<ProtectedRouter/>}>
            <Route element={<SocketConnection/>}>
                <Route path="/" element={<Home/>}>
                  <Route path="/room/:id" element={<Room />}/>
                </Route>
            </Route>
            <Route path="/login" element={<Login />}/>
            <Route path="/registration" element={<Registration />}/>
          </Route>
          <Route path="*" element={<NotFound/>}/>
        </Route>
    </Routes>
  </BrowserRouter>
}

