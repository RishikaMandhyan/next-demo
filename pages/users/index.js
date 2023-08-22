import User from '@/components/user'
import React from 'react'

const UserList = ({users}) => {
  return(
    <ul>
        {users.map(user=>{
            return (
              <User user={user}/>
            )
        })}
    </ul>
  )
}

// This function gets called at build time
export async function getStaticProps(){

const response= await fetch ("https://jsonplaceholder.typicode.com/users")
const data= await response.json();
console.log(data)

// By returning { props: { users } }, the Users component
// will receive `users` as a prop at build time
return ({
    props: {
        users: data
    }
})
} 

export default UserList