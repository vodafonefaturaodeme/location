import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300' style={{backgroundColor:'black'}}>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#1452fc]'>Location</h1>
        <p className='py-4'>Getting the geolocation of any mobile phone with Geosite is super easy.</p>
        <div className='flex justify-between md:w-[75%] my-6'>
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />


        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
        <div>
          <h6 className='font-medium text-gray-400'>Çözümlermiz</h6>
          <ul>
            <li className='py-2 text-sm'>Api desteği</li>
            <li className='py-2 text-sm'>Konum</li>
            <li className='py-2 text-sm'>5G LTE</li>
            <li className='py-2 text-sm'>SMS</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400'>Destek</h6>
          <ul>
            <li className='py-2 text-sm'>Fiyatlandırma</li>

            <li className='py-2 text-sm'>Klavuz</li>
            <li className='py-2 text-sm'>API Durumu</li>
          </ul>
        </div>

        <div>
          <h6 className='font-medium text-gray-400'>Yasal</h6>
          <ul>

            <li className='py-2 text-sm'>Politika</li>
            <li className='py-2 text-sm'>Şartlar</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;