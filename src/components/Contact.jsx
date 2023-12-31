import React from 'react'

const Contact = () => {
    return (
    <div name='contact' className='w-full h-screen flex justify-center items-center p-4'>
        <form method='POST' action='https://getform.io/f/7ade0401-1017-47ef-80fa-302d7a595b6c' className='flex flex-col max-w-[600px] w-full '>
            <div className='pb-8'>
                <p className=' text-4xl inline border-b-4 border-slate-700 text-white '>Contact</p>
            </div>
            <input className='bg-slate-200 p-2 rounded' type='text' required placeholder='Name' name='name'/>
            <input className='my-4 p-2 bg-slate-200 rounded' type='email' required placeholder='Email' name='email'/>
            <textarea className='bg-slate-200 p-2 rounded' name='message' rows={10} required placeholder='Message'/>
            <button className='text-white border-2 hover:bg-stone-400 hover:border-stone-700 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
    )
}

export default Contact