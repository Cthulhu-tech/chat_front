export interface Action<T, P> {
    readonly type: T;
    readonly payload?: P;
}

export type UserPayload = {
    id: null | number;
    user: null | string;
    token: null | string;
    load?: boolean;
}

export type IUseFetch <T, U> = [
    boolean,
    T | undefined,
    ErrorData | undefined,
    (url: string, data?: U) => void
]

export type ErrorData = {
    message: string;
}

export type Message = {
    id: number;
    message: string;
    user: string;
}

export type RoomMessage = {
    roomMessage: Message[]
}

export type ReduxStore = {
    jwt: UserPayload;
    message: RoomMessage;
}