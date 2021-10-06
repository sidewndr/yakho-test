import {combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {teamsReducer} from "./reducers/teamsReducer";
import {modeReducer} from "./reducers/modeReducer";

const rootReducer = combineReducers({
  teams: teamsReducer,
  mode: modeReducer
})

export const store = createStore(rootReducer, composeWithDevTools())