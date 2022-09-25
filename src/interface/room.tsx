export interface IRoom {
    rooms: Room[]
}

export type Room = {
    id: number;
    name: string;
    user: string;
}