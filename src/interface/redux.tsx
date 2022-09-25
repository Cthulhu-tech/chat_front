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

export interface IUseFetch <T, U> {
    readonly load: boolean;
    readonly data: T | undefined;
    readonly error: ErrorData | undefined;
    fetchData: (url: string, data?: U) => void;
}

export type ErrorData = {
    message: string;
}

export type ReduxStore = {
    jwt: UserPayload;
}