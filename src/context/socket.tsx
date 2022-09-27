import { io, Socket } from "socket.io-client";
import { createContext } from "react";

export const socket = io(`${process.env.REACT_APP_Server_Response}`,{transports: ['websocket'], upgrade: false});

export const SocketContext = createContext<Socket>(socket);