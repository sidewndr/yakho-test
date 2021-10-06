import {combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {teamsReducer} from "./reducers/teamsReducer";
import {modeReducer} from "./reducers/modeReducer";
import {membersReducer} from "./reducers/membersReducer";

const rootReducer = combineReducers({
  teams: teamsReducer,
  members: membersReducer,
  mode: modeReducer
})

export const store = createStore(rootReducer, composeWithDevTools())