import { io, Socket } from "socket.io-client";
import { createContext } from "react";

export const socket = io("http://localhost:3000",{transports: ['websocket'], upgrade: false});

export const SocketContext = createContext<Socket>(socket);