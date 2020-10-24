const todos = (state = [], action) => {
    switch (action.type) {
        case 'GET_TODOS':
            return [
                ...action.todos
            ]
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'UPDATE_TODO':
            let old = state.find(todo => todo.id === action.id)
            return state.map(td => td.id === action.id
                ? { ...old, text: action.text }
                : td)
        case 'TOGGLE_TODO':
            let todo = state.find(todo => todo.id === action.id)
            return state.map(td => td.id === action.id
                ? { ...todo, completed: !todo.completed }
                : td)
        case 'DELETE_TODO':
            return [...state.filter(td => td.id !== action.id)]
        default:
            return state
    }
}
export default todos
