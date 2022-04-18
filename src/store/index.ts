import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {rootReduces} from "./reducers";
import {composeWithDevTools} from "redux-devtools-extension"
export const store = createStore(rootReduces, composeWithDevTools(applyMiddleware(thunk)))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
