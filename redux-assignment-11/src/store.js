import { legacy_createStore as createStore } from "redux";




const update=(store,action)=>{
    if(action.type==="ToDo"){
        return {...store,todose:[...store.todose,action.payload]}
    }
    return store
}
const initial={
    todose:[]
}
export const store=createStore(update,initial)

