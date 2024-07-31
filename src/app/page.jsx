import React from 'react'
import image from './next.svg';

const Home  = () => {

  const cartItems = 10;

  const displayMessage = (msg) => {
    return (
      <div className='border border-red-500 bg-red-100 p-3 rounded-md w-1/2 mx-auto my-3'>
        <span className='text-red-500 font-bold'>{msg}</span>
      </div>
    )
  }

  return (
    <>
    
    <div>
      {displayMessage('oops! Your details are not correct')}

      <h1 style={{color:'blue', textAlign:' center',frontsize:50}}> 
        My Home Page
        </h1>

        <br />

       < input type="text"/>

       <img src=""alt=""/>

       <h2 className='text-2xl text-center'>Cart Items:{cartItems + 5}</h2>
       <button className='btn'>MY Button</button>

       <img src="/next.svg" alt="" /> 
       <img src={ image.src } alt="" />
         </div>
         <div>

         </div>
         
         </>
         
  )
}

export default Home;