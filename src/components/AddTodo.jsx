import React, { useState } from 'react'

const AddTodo = ({ addTodo }) => {
    const [task, setTask] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(task)
        setTask('')
    }
    return (
        <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
            <div>
                <div>
                    <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                        Task Title
                    </label>
                    <div className="mt-2.5">
                        <input
                            value={task}
                            onChange={(e) => { setTask(e.target.value) }}
                            id="first-name"
                            name="first-name"
                            type="text"
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <button
                    type="submit"
                    disabled={task.length < 1}
                    className={`${task.length < 1 ? 'disabled:cursor-not-allowed' : ''} block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                >
                    Add Task
                </button>
            </div>
        </form>
    )
}

export default AddTodo