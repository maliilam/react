import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    { id: 1, title: "first todo", completed: false },
    { id: 2, title: "second todo", completed: true },
    { id: 3, title: "thrid todo", completed: false }
]

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers : {}
})

export default todosSlice.reducer