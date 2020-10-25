let nextTodoId = 0

export const getTodos = dispatch => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5'")
        .then(res => res.json())
        .then(res => {
            if (res.error) {
                dispatch(requestFail(res.error, "getTodos"))
            }
            dispatch(getTodosOk(res))
        })
}

export const requestFail = (error, request) => ({
    type: 'REQUEST_FAIL',
    request,
    error
})

export const getTodosOk = todos => ({
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
