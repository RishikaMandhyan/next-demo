import Link from 'next/link'
import React from 'react'

const User = ({user}) => {
  return (
    <>
    <br/>
    <Link href={`/users/${user.id}`}>
    <div>Name: {user.name}</div>
    <div>Username: {user.username}</div>
    </Link>
    <br/>
    </>
  )

}

export default User