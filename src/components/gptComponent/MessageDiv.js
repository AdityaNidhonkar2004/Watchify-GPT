import React from 'react'

const MessageDiv = ({ message }) => {
    return (
        <div className='border-2 w-full border-cyan-300 bg-cyan-950 text-cyan-500 py-2 px-5 font-bold absolute bottom-1'>{message}</div>
    )
}

export default MessageDiv