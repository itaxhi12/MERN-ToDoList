
export const initialState  = {
    todos:[]
}

const reducer = (state = initialState,action) =>{
    switch(action.type){
        case "GET_TODOS":
            return {
                ...state,
                todos:action.item
            }
    
        case "ADD_TASK":
            return{
                ...state,
                todos:[...state.todos,action.item]
            }
        case "REMOVE_TASK":
            let oldTodos = [...state.todos]
            let index = oldTodos.findIndex((todo)=>{return todo._id === action.id})
            const f = oldTodos.slice(0,index)
            const s= oldTodos.slice(index+1,oldTodos.length)
            let newTodos = f.concat(s)
            return{
                ...state,
                todos:newTodos
            }
        case "CHANGE_STATUS":
            let Todos = [...state.todos]
            let i = Todos.findIndex((todo)=>{return todo._id === action.id})
            Todos[i].status = true
            return{
                ...state,
                todos:Todos
            }

        default:
            return state
            
    }
}

export default reducer
