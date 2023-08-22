import React from 'react'

const Post = ({post}) => {
  return (
    <>
    <br/>
    <div>{post.title}</div>
    <br/>
    </>
  )
}

export default Post

export async function getServerSidePaths(){
    console.log("hi");
    const res= await fetch ("https://jsonplaceholder.typicode.com/posts")
    const data= await res.json()

    const paths= data.map((item)=>(
        {
            params: {id: `${item.id}`}
        }
    ))

    console.log("paths", paths);
    return {paths, fallback: false}  //fallback false will display 404 for non pre rendered pages
}

export async function getServerSideProps({params}){
    const res= await fetch (`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const data= await res.json()

    //example of iterating through all keys of an object
    const keys= Object.keys(data);
    keys.forEach(item=> console.log(item, data[item]));

    return {
        props:{
            post: data
        }
    }

}


