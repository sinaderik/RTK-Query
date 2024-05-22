import React, { useState } from 'react'
import { useGetTodosQuery } from './api/apiSlice';

const TodoList = () => {
    const {
        data: todos,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetTodosQuery()

    const [newTodo, setNewTodo] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setNewTodo('')
    }

    const newItemSection =
        <form onSubmit={handleSubmit}>
            <label htmlFor="new-todo">Enter a new todo item</label>
            <div className="new-todo">
                <input
                    type="text"
                    id="new-todo"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Enter new todo"
                />
            </div>
            <button className="submit">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
                </svg>
            </button>
        </form>

    let content;
    if (isLoading) {
        content = <p>Loading...</p>
    } else if (isError) {
        content = <p>{error}</p>
    } else if (isSuccess) {
        content = JSON.stringify(todos)
    }
    return (
        <main>
            <h1>
                <i className="ri-arrow-up-circle-line"></i>
                Todo list</h1>
            {newItemSection}
            {content}
        </main>
    )
}

export default TodoList