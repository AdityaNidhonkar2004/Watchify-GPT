import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import lang from '../../utils/lagnConst';
import { addKey } from '../../utils/store/gptSlice';
import connetOpenAI from '../../utils/openai';

const GPTKey = ({ setMessage }) => {
    const dispatch = useDispatch();
    const keyText = useRef(null);
    const [errorText, setErrorText] = useState('');

    const currentLang = useSelector(store => store.lang.currentLang);

    const checkOpenAi = async (key) => {
        const openai = connetOpenAI(key);
        try {
            await openai.chat.completions.create({
                messages: [{ role: 'user', content: 'hi' }],
                model: 'gpt-3.5-turbo',
            });
            dispatch(addKey(key));
        } catch (error) {
            setErrorText(error.message);
        }
        finally {

            setMessage(null)
        }
    }
    const handleSubmitBtnClick = () => {
        setMessage('Please Wait...');
        const key = keyText.current.value;
        checkOpenAi(key);
    }

    return (
        <div>
            <form action="" className='text-center' onSubmit={e => e.preventDefault()}>
                <input type="text" ref={keyText} className='bg-slate-800 sm:w-3/4 w-11/12 text-gray-50 px-4 py-2 mt-4 rounded-s-full rounded-e-full border-cyan-600 border-2 caret-cyan-500 ' placeholder={lang[currentLang].gptKeyPlaceholder} />

                <button className='bg-cyan-600 px-3 ml-5 py-2 fw-bold mt-5 sm:w-auto w-3/4  text-white rounded border-cyan-300 border-2' onClick={handleSubmitBtnClick}>
                    {lang[currentLang].submit}
                </button>

                <div className="mt-5 text-gray-100 text-sm">
                    {errorText}
                </div>
            </form>
        </div>
    )
}

export default GPTKey