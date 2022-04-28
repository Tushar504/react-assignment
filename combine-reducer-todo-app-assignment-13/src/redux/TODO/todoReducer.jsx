let initial={
    todose:[]
}

export const TodoReducer=(store=initial,{type,payload})=>{
    switch(type){
        case "ADD_TODO":
            return {...store,todose:payload}
        default:
            return store
    }
}