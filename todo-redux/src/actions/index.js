let nextTodoId = 0

// relies on thunk to provide dispatch (and if needed, getState, also)
export const getTodos = () => dispatch => fetch("https://jsonplaceholder.typicode.com/todos?_limit=5'")
    .then(res => {
        if (res.ok) {
            return res.json()
        }
        throw res
    })
    .then(res => dispatch(getTodosOk(res)))
    .catch(error => dispatch(requestFail("getTodos", error)))

export const requestFail = (name, details) => ({
    type: 'REQUEST_FAIL',
    name,
    details
})

export const getTodosOk = todos => ({
    type: 'GET_TODOS',
    todos
})

export const addTodo = title => dispatch => {
    const todo = {
        title,
        completed: false
    }

    fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo)
    })
    .then(res => {
        if (res.ok) {
            return res.json()
        }
        throw res
    })
    .then(res => {
        let todo = { ...res }
        // This is for jsonplaceholder only as new id is always 201
        todo.id += nextTodoId++
        return dispatch(addTodoOk(todo))
    })
    .catch(error => dispatch(requestFail("addTodo", error)))
}

export const addTodoOk = todo => ({
    type: 'ADD_TODO',
    todo
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
