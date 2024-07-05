import React,{memo} from 'react'

const TodoItem = ({ todo, isDone, remove }) => {
    return (
        <li className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
                <div className="min-w-0 flex gap-2">
                    <input type="checkbox" name={todo.id} checked={todo.isDone} onChange={(e) => { isDone(todo.id, e.target.checked) }} />
                    <p className={` ${todo.isDone ? "line-through text-gray-400" : "text-gray-900"} text-sm font-semibold leading-6 `}>
                        {todo.taskTitle}
                    </p>
                </div>
            </div>
            <button onClick={() => remove(todo.id)} className="size-[26px] rounded-md p-1 hover:bg-red-50 hover:text-red-500 block peer-has-[:checked]:hidden">
                <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
        </li>
    )
}

export default memo(TodoItem)