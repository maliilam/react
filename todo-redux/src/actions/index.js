//const baseUrl = "https://jsonplaceholder.typicode.com/todos"
const baseUrl = "http://localhost:3000/api/todos"
let nextTodoId = 0

export const requestFail = (name, details) => ({
    type: 'REQUEST_FAIL',
    name,
    details
})

// relies on thunk to provide dispatch (and if needed, getState, also)
const request = ({
    url = baseUrl,
    method = 'GET', 
    data,
    okAction,
    failAction = requestFail
    }) => dispatch => 
    fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: data && JSON.stringify(data)
    })
    .then(res => {
        if (res.ok) {
            return res.json()
        }
        throw res
    })
    .then(res => dispatch(okAction(res)))
    .catch(error => dispatch(failAction(method + ' ' + url, error)))

export const getTodosOk = todos => ({
    type: 'GET_TODOS',
    todos
})
    
export const getTodos = () => request({
    url: baseUrl + '?_limit=8',
    okAction: getTodosOk
})

export const addTodoOk = todo => ({
    type: 'ADD_TODO',
    todo: {
        ...todo,
        // This is for jsonplaceholder only as new id is always 201
        id: todo.id + nextTodoId++
    }
})

export const addTodo = title => request({
    method: 'POST',
    okAction: addTodoOk,
    data : {
        title,
        completed: false
    }
})

export const toggleTodoOk = ({id, completed}) => ({
    type: 'TOGGLE_TODO',
    id,
    completed
})

export const toggleTodo = (id, completed) => request({
    url: baseUrl + '/' + id,
    method: 'PUT',
    okAction: toggleTodoOk,
    data: {
        completed
    }
})

export const updateTodoOk = ({id, title}) => ({
    type: 'UPDATE_TODO',
    id,
    title
})

export const updateTodo = (id, title) => request({
    url: baseUrl + '/' + id,
    method: 'PUT',
    okAction: updateTodoOk,
    data: {
        title
    }
})

export const deleteTodoOk = id => ({
    type: 'DELETE_TODO',
    id
})

export const deleteTodo = id => request({
    url: baseUrl + '/' + id,
    method: 'DELETE',
    okAction: () => deleteTodoOk(id),
    data: {}
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
