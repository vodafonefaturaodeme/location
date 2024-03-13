import React from 'react';
import Laptop from '../assets/laptop.jpg';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-8 px-4'>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-4 items-center'>
      <img className='w-[300px] mx-auto my-4' src={Laptop} alt='Laptop' />
      <div className='text-center md:text-left md:pl-8'> {/* Sola padding ekledik */}
        <h1 className='text-[#1452fc] font-bold text-3xl'>Kolayca Konum Bulun.</h1>
        <div className="flex items-center justify-center md:justify-start my-4 px-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1452fc] mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3zm0-1h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2z" clipRule="evenodd"/>
            <path fillRule="evenodd" d="M8 4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H8zm0 1h6a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" clipRule="evenodd"/>
          </svg>
          <p className="text-sm pl-2">Lte ve 5g baz istasyonu ağlarını kullanarak gsm yoluyla cihazların konumlarını kolayca bulun.</p> {/* Sola padding ekledik */}
        </div>
        <div className="flex items-center justify-center md:justify-start my-4 px-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1452fc] mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM9 4a1 1 0 0 1 2 0v4a1 1 0 1 1-2 0V4zm1 10a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" clipRule="evenodd"/>
          </svg>
          <p className="text-sm pl-2">Ücretsiz başlangıç.</p> {/* Sola padding ekledik */}
        </div>
        <button className='bg-black text-[#1452fc] w-[160px] rounded-md font-medium py-2'>Hadi Başla!</button>
      </div>
    </div>
  </div>
  

  );
};

export default Analytics;