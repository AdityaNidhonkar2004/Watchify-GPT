import React, { useState } from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTSuggetions from './GPTSuggetions'
import { useSelector } from 'react-redux'
import GPTKey from './GPTKey'
import MessageDiv from './MessageDiv'

const GPTSearch = () => {
    const key = useSelector(store => store.gpt.key);
    const [message, setMessage] = useState(null);
    return (
        <div className='bg-slate-950 w-full min-h-screen '>
            <div className='pt-36'>
                {
                    key ?
                        <>
                            <GPTSearchBar apiKey={key} setMessage={setMessage} />
                            <GPTSuggetions />
                        </> : <GPTKey setMessage={setMessage} />
                }
                {
                    message && <MessageDiv message={message} />
                }
            </div>
        </div>
    )
}

export default GPTSearch