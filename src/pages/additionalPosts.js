import axios from 'axios';
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import NavBar from "../components/navbar";

const AdditionalPosts = ()=>{
  let{id} = useParams();
  const[post, setPost] = useState(null)

  useEffect(()=>{
    if(id){
      axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res=>{
        setPost(res.data)
      })
      .catch(err=>{console.log(err)})
    }
  },[id])

  // useEffect(()=>{
  //   console.log(post)
  // },[post])

    return(
        <div>
          <div className='container mx-auto'>
            <NavBar/>
            <h1 classname='text-2xl font-bold mb-5 mt-5'>{post?.title}</h1>
            <h3 className='text-lg mb-10 mt-10'>{post?.body}</h3>
          </div>
        </div>
    )
}
export default AdditionalPosts;