import { applyMiddleware, combineReducers, createStore } from "redux";
import { MessageDataStore } from "./store/roomMessage";
import { UserDataStore } from "./store/jwt";
import thunk from "redux-thunk";

export const rootReducer = combineReducers({
    jwt: UserDataStore,
    message: MessageDataStore
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
