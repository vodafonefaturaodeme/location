import React from 'react';
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-0.000001'>
  <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
    <h2 className='text-2xl font-bold text-center py-8'>Demo</h2>
    <p className='text-center text-4xl font-bold'>1 saat</p>
    <div className='text-center font-medium'>
      <p className='py-2 border-b mx-8 mt-8'>10 telefon takip etme</p>
      <p className='py-2 border-b mx-8'>1 Kullanıcı</p>
      <p className='py-2 border-b mx-8'>100 sms e kadar takip</p>
    </div>
    <button className='bg-[#1452fc] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Deneme</button>
  </div>
  

  <div></div>

  <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
    <h2 className='text-2xl font-bold text-center py-8'>Premium</h2>
    <p className='text-center text-4xl font-bold'>1 aylık</p>
    <div className='text-center font-medium'>
      <p className='py-2 border-b mx-8 mt-8'>2000 TELEFON TAKİP SINIRI</p>
      <p className='py-2 border-b mx-8'>3 Kullanıcı</p>
      <p className='py-2 border-b mx-8'>500 sms e kadar takip</p>
    </div>
    <button className='bg-[#1452fc] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Deneme</button>
  </div>
</div>

    </div>
  );
};

export default Cards;