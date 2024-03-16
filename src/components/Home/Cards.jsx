import React from 'react';
import Single from '../../assets/image/single.png'
import Double from '../../assets/image/double.png'
import Triple from '../../assets/image/triple.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-3 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-0.000001'>
        <div className='w-full shadow-xl flex flex-col p-6 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
          <h2 className='text-2xl font-bold text-center py-8'>Trial</h2>
          <p className='text-center text-4xl font-bold'>1 hours Trial / 0,99$</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>With this first payment, you can enjoy all the services of the platform, without restrictions, for 24 hours. After 24 hours, the customer must pay the subscription cost of 99.00$ per month.</p>

          </div>
          <button className='bg-[#1452fc] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3' style={{ backgroundColor: '#48a22e' }}>Start Trial</button>
        </div>


        <div className='w-full flex flex-col p-1 my-1'></div>

        <div className='w-full shadow-xl flex flex-col p-6 my-3 rounded-lg hover:scale-105 duration-300' style={{ backgroundColor: '#394481', color: 'white' }}>
          <img className='w-20 mx-auto mt-[-3rem] bg-white' style={{ backgroundColor: 'transparent' }} src={Triple} alt="/" />
          <h2 className='text-2xl font-bold text-center py-8'>Subscription</h2>
          <p className='text-center text-4xl font-bold'>Monthly fee / 99$</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>Once the 24 hours trial period has ended, the offer will automatically renew to a monthly subscription. Remember that you can cancel the subscription whenever you want.</p>

          </div>
          <button className='bg-[#1452fc] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3' style={{ backgroundColor: '#48a22e' }} >Start Subscription</button>
        </div>
      </div>

    </div>
  );
};

export default Cards;