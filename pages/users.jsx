import React from 'react'

const Users = ({users}) => {
  return (
    <ul>
        {users.map(user=>{
            return (<>
               <br/>
                <li>{user.name}</li>
                <br/>
                </>)
        })}
    </ul>
  )
}

export default Users

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