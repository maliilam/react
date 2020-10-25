let nextTodoId = 0

export const requestGetTodos = dispatch => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5'")
        .then(res => res.json())
        .then(res => {
            if (res.error) {
                throw(res.error)
            }
            dispatch(getTodos(res))
        })
}

export const getTodos = todos => ({
    type: 'GET_TODOS',
    todos
})

export const addTodo = title => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    title
})

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
})

export const updateTodo = (id, title) => ({
    type: 'UPDATE_TODO',
    id,
    title
})

export const deleteTodo = id => ({
    type: 'DELETE_TODO',
    id
})

export const setFilter = filter => ({
    type: 'SET_FILTER',
    filter
})

export const Filters = {
    SHOW_ALL: 'Show all',
    SHOW_COMPLETED: 'Show completed',
    SHOW_ACTIVE: 'Show active'
}
