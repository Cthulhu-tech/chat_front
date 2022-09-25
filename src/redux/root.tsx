import { applyMiddleware, combineReducers, createStore } from "redux";
import { UserDataStore } from "./store/jwt";
import thunk from "redux-thunk";

export const rootReducer = combineReducers({
    jwt: UserDataStore,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
