import { legacy_createStore as CreateStore } from "redux";

import { reducer } from "./reducer.js";

export const store=CreateStore(reducer,{todose:{}})

