import { Action, Message, RoomMessage } from "../../interface/redux"

const defaultState:RoomMessage = {
    roomMessage: []
}

const setData = "set_message_data"
const updateData = "update_message_data"

export const MessageDataStore = (state = defaultState, action:Action<string, RoomMessage | Message>) => {

    switch (action.type){
        case setData: 
            return {...action.payload}
        case updateData:
            return {roomMessage: [action.payload, ...state.roomMessage]}
        default:
            return state;
    }
}

export const setMessageData = (payload: RoomMessage) => ({ type: setData, payload });
export const updateMessageData = (payload: Message) => ({ type: updateData, payload });