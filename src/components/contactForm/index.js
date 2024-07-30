import React, { useState } from 'react'
const ContactForm=()=>{
    const[submit,setSubmit]=useState(false);

    return(
        <div className='flex justify center items-center w-[1600px] h-[635px] bg-[#473BF0] text-white py-2 rounded-lg "
                    >Submit'>
            {!submit ? (
                <div className='bg-[#ffffff] w-[826px] h-[350px] mt-[60px] ml-[387px] mr-[387px]'>
                    <div className='mb-4 '>
                        <label className='text-black font-bold'>Name:</label>
                        <input
                        type="text"
                        name="name"
                        placeholder="write your name"
                        className='w-full text-black px-5 py-2 border rounded-full'
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-black font-bold">Email:</label>
                        <input
                        type="email"
                        name="email"
                        placeholder="write your email"
                        
                        className="w-full text-black px-5 py-2 border rounded-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-black font-bold">Message:</label>
                        <textarea
                        name="message"
                        placeholder="write your message"
                        className="w-full text-black  px-5 py-6 border rounded-full"
            >           </textarea>
                    </div>
                    <button
                    onClick={()=>{setSubmit(true)}}
                    className="w-[260px] h-[38px] mx-[271px] mb-[25px] bg-[#473BF0] text-white py-2 rounded-lg hover:bg-blue-600"
                    >Submit
                    </button>
        </div>
        ) : (
                <div className='bg-[#ffffff] w-[850px] h-[358px] ml-[425px]'>
                    <p className='text-[#000000] text-center pt-[160px] text-4xl'>Your response is sent</p>

                </div>
            )}
        </div> 
            
        
    )
}

export default ContactForm