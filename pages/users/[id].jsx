import { useRouter } from 'next/router'
import React from 'react'

const User = ({user}) => {

    const router=useRouter()
    if(router.isFallback){
        console.log("fallback version")
        return <div>Loading...</div>
    }

  return (
    <div> {user.name}</div>
  )
}

export default User

//at build time first getStaticPaths will be called
//which will fetch all possible pahs from db and then pass it to getStaticProps
//then getStaticprops will 

export async function getStaticPaths(){
    const res= await fetch("https://jsonplaceholder.typicode.com/users")
    const data= await res.json();

    const paths=data.map((item)=>({
        params: {
            id: item.id.toString()
        }
    })) 

    //paths will look like this
    // paths: [
    //     {  params: { id: '1' } },
    //     {  params: { id: '2' } },
    //     {  params: { id: '3' } },
    // ] 
    
    console.log("paths:",paths);
    return {paths, fallback: false}

    //fallback: false means we want to pre genrate all the params present in the paths
    //if we put fallback: true it will pre render only the first param vala page
    //this fallback true helps us when we are working 1000s of users/params and we dont want to pre render all of them at build time

}

export async function getStaticProps({params})
{
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const data= await res.json()

    return {
        props: {
            user: data
        },

         // Next.js will attempt to re-generate the page:
         //  - When a request comes in 
         // - At most once every 10 seconds if we just mention the below line

         //important point to note is that putting the below value as 10 doed snot mean 
         //that re generation happens automatically every 10 sec
         //but it means the time after which, if a user makes a request, a regeneration needs to be initiated
         revalidate: 10,  
         //incremental static generation that is we can make changes to our code of the pages 
         //and we dont need to re build all the pages 
         //through ISG we get the feature of re building only the page which was changed

         //re-generating above means removing it from cache and rendering it again thatis
         //by using the getStaticProps function
    }
} 
