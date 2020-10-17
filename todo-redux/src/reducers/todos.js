const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO':
            let todo = state.find(todo => todo.id === action.id)
            return state.map(td => td.id === action.id
                ? { ...todo, completed: !todo.completed }
                : td)
        default:
            return state
    }
}
export default todos
