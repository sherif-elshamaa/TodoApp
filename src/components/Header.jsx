import React from 'react'

const Header = () => {
    return (
        <>
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">My Todo List</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                    “Implement whatever organizational system works best for you, but then be sure to review your to-do list at least once a week.
                </p>
                <p className='text-sm leading-8 text-gray-400'>Author: Cheryl Barker</p>
            </div>
        </>
    )
}

export default Header