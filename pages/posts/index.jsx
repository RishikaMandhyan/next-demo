import React from 'react'

const Posts = ({posts}) => {
  return (
    <>
    <br/>
    {posts.map(post=>
        {
        return (<p key={post.id}>{post.title}</p>)
    })}
    <br/>
    </>) 
}

export default Posts


export async function getServerSideProps(){

    const res= await fetch ("https://jsonplaceholder.typicode.com/posts")
    const data=await  res.json();
   // console.log(data);

    return {
        props: {
            posts: data 
        }
    }
}