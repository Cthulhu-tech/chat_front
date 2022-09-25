export type FormType<T> = [
    T | undefined, 
    (event: React.ChangeEvent<HTMLInputElement>) => void
]

export type RoomList = {
    name: string
}

export type RoomCreate = {
    name: string
    login: string
}

export type MessageForm = {
    msg: string
}