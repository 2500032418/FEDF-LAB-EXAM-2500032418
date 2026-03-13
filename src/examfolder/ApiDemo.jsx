import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Demo3() 
{
    const [data,setdata]=useState([])
    const [error,setError]=useState("")
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
            setdata(response.data)
        }).catch((err) => {
            setError(err.message)
        });
        
    }, []);//empty dependency array
  return (
    <div>
        <h2><u>Fetch Demo</u></h2>
        {
            error?<b>{error}</b>:
            data.length==0?
            <b>loading.....</b>:
            <table border={1}>
                <tr>
                    <th>userID</th>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Body</th>
                    <th>Link</th>
                </tr>
                {
                     data.map((post,index)=>(
                        <tr key={index}>
                            <td>{post.userID}</td>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                            <td>{post.link}</td>

                        </tr>
                     ))
                    
                }

            </table>

        }

    </div>
  )
}
