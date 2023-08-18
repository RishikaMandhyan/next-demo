import React from 'react'
import { useRouter } from 'next/router';

const blog = () => {

const router= useRouter();
// const {id}= router.query;

  return (
    <p>Blog id: {router.query.id}</p>
  )
}

export default blog