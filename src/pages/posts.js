import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"



const Posts =()=>{
    const[data,setData]= useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res =>{
            setData(res.data)
        })
        .catch(err=>console.log(err))
    },[])


    // useEffect(()=>{
    //     console.log(data);
    // },[data])
    
    return(
        <>
            <div className='container mx-auto'>
                <h1 className="text-2xl font-bold mb-5 mt-5"></h1>
                <div className='grid grid-cols-3 gap-3'>
                    {data.map(element=>(
                        <div className='bg-gray-300 rounded-lg p-4'>
                        <p className="text=gray-500">{element.id}</p>
                        <p className='text-xl font-bold mb-3'>{element.title}</p>
                        <div className='h-[2px] w-full bg-white mb-3'></div>
                        <div className='w-full flex justify-end'>
                            <Link to={`/posts/${element.id}`} className='px-4 py-2 capitalize bg-green-700 text-white text-lg rounded-xl'>Read</Link>
                        </div>
                    </div>
                    ))}
                    
                </div>
            </div>
        </>
    )
}

export default Posts