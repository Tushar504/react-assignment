import { legacy_createStore as createStore,combineReducers } from "redux";

import { TodoReducer } from "./TODO/todoReducer";
import { AuthReducer } from "./Auth/authReducer";

const rootReducer=combineReducers({
      Loginstatus:AuthReducer,
      todose:TodoReducer
})

export const store=createStore(rootReducer)