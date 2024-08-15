import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Post = () => {
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        getPost() 
    },[])
    const getPost = async () =>{
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
        console.log(res.data)
        setPosts(res.data)
    }
  return (
    <div className='container'>
         <table width={"800"}>
            <thead>
                <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>body</th>
                </tr>
            </thead>
            <tbody> 
                {
                    posts.map((post)=>{
                        return(
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                            </tr>
                        )
                    })
                }

            </tbody>
        </table>
    </div>
  )
}

export default Post