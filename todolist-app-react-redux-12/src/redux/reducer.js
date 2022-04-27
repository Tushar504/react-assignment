import { ADD_TODO } from "./action.js"
export const reducer=(store,{type,payload})=>{
    switch(type){
        case ADD_TODO:
            return {...store,todose:payload}
         default:
             return store
        }
}