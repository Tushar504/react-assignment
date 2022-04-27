// action type
export const ADD_TODO="ADD_TODO"

// action creator

export const updateTodo=(data)=>{
    return {
        type:ADD_TODO,
        payload:data
    }
}