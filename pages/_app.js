import Footer from '@/components/Footer'
import Header from '@/components/Header'
// import '@/styles/globals.css'

// //so basically whatever we define in this _app.js file, tht layout is shown for all pages
// //when we dont need this particular layout defined here then we use getLayout 
// export default function App({ Component, pageProps }) 
// {
//   // if(Component.getLayout)
//   // {
//   //   return Component.getLayout(<Component {...pageProps}/>)
//   // }
  
//   return 
//   (
//     <>
//     {/* <Header/> */}
//     <Component {...pageProps}/>
//     {/* <Footer/> */}
//     </>
//   )
// }

import '@/styles/globals.css'

export default function App({ Component, pageProps }) 
{

  if(Component.getLayout)
  {
    return Component.getLayout(<Component {...pageProps}/>)
  }

  return (
  <>
  <Header/>
  <Component {...pageProps}/>
  <Footer/>
  </>
  )
}
