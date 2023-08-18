import Footer from '@/components/Footer'
import React from 'react'

//so for example we dont need the layout defined in _app.js then we use getLayout here
//as shown below

const About = () => 
{
  return (
    <div>About Page</div>
  )
}

//see here unlike the common layout we are only taking footer
//so this getLayout function will return whatever layout we want
About.getLayout= function PageLayout(page){   //this function will take tht page input from the .app file where we will check if our page already has some layout or not 
    return (
        <>
            {page}
            <Footer/>
        </>
    )
}

export default About