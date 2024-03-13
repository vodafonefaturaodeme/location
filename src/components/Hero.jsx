import React from "react";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
const Hero =() =>{
    const ananus =0;

    
    return(
        <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
          
          <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Locate any phone, anywhere.
          </h1>
          
          <div className='flex flex-col items-center justify-center w-full'>
  <p className='md:text-2xl text-xl font-bold text-gray-500 mb-2'>Find any phone whose number you know, anywhere in the world</p>
  <div className='flex flex-row items-center justify-center w-full'>
    <div className="text-black">
      <PhoneInput
        country={'us'}
        value={ananus}
        onChange={phone => this.setState({ phone })}
      />
    </div>
  </div>
</div>

          <div>
          <button className='bg-[#1452fc] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3 '>
              BUL!
            </button>

          </div>
          
        </div>
      </div>
    )
}

export default Hero;