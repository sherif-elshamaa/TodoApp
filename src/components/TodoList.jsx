import React, { useMemo, memo } from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, isDone, remove }) => {
    const todoItems = useMemo(() => {
        return todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} isDone={isDone} remove={remove} />
        ))
    }, [todos, isDone, remove])

    return (
        <ul role="list" className="divide-y max-w-xl divide-gray-100 flex flex-col justify-center mx-auto">
            {todoItems}
        </ul>
    )
}

export default memo(TodoList)