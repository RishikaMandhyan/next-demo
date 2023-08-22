import React from 'react'
import axios from 'axios'

const Posts_Axios = ({posts}) => {

    let newTask={
        title: "new task"
    }

    let updatedTask={
        title: "updated task"
    }

    //post request with axios 
    async function addTask(){
        try{
           const res= await axios.post("https://jsonplaceholder.typicode.com/posts", newTask)
           const data= res.data
           console.log(data, 'postresponse') ;
        }
        catch(err){
            console.error(err);
        }
    }

    //diff between post and patch is tht post mei whatever updated object we will pass vo bas utna hi update karega
    //and if any properties are missing or do not have any update to it wont take them
    //but patch takes all properties, that is even those we did not update in the final obj


    //patch request with axios
    async function updateTask(id){
        try{
           const res= await axios.patch(`https://jsonplaceholder.typicode.com/posts/${id}`, updatedTask)
           const data= res.data
           
           console.log(data, 'updatedresponse');
        }
        catch(err){
            console.error(err);
        }
    }

    //axios.all for concurrent requests 
    async function getConcurrentData(){
        try{

            //here we have destructured the array we are getting
            //in response to this axios.all
            //if we do not destructure, then if we get res, then res[0] is todos and res[1] is posts
            const [todos, posts]= await axios.all([
                axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5"),
                axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5")
            ])
            
            console.log(todos.data,'todos')
            console.log(posts.data,'posts')

        }catch(err){
            console.log(err);
        } 
    }

    //request interceptor

    // axios.interceptors.request.use(
    //     function(config){
    //         console.log(config)
    //      //  return config; 
    //     },
    //     function (error) {
    //         return Promise.reject(error);
    //     }
    // )

    
    if(posts){
        return (
            <>
            <br/>
            <button onClick={()=>addTask()}>Add</button>
            <br/>
            <button onClick={()=>getConcurrentData()}>Get Concurrent Data</button>
            <br/>
            {posts.map(item=>{
                //console.log(item, "posts")
                return (<>
                <br/>
                 <p>{item.title}</p>
                 <p>{item.id}</p>
                 <button onClick={()=>updateTask(item.id)}>Update Task</button>
                </>)
            })}
            </>
        )
    }
}

export default Posts_Axios

export async function getServerSideProps(){
  try{
    //axios get request
        const res= await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5")
        let data= res.data
        // console.log(res, "res");
        // console.log(data, "data");

    return {
        props:
        {
            posts: data
        }
    }
  }
  catch(err){
    console.log(err)
    console.error(err)
    return {props:{}}
  }
}

