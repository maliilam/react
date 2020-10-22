let nextTodoId = 0
export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
})

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
})

export const updateTodo = (id, text) => ({
    type: 'UPDATE_TODO',
    id,
    text
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
