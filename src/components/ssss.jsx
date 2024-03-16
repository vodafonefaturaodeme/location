import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';
import { useState } from 'react';
import {motion ,AnimatePresence} from "framer-motion"
import {FaPlusCircle , FaMinusCircle}
from "react-icons/fa"
import { Link, animateScroll as scroll } from "react-scroll";

const SSS = () => {
  const [activeQuestion,setActiveQuestion] = useState(null);
  const questions = [
    {
        id:1,
        question:"deneme",
        answer:"dwepokpkowepwpwokedpkowe",
    },
    {
        id:2,
        question:"deneme",
        answer:"dwepokpkowepwpwokedpkowe",
    },
    {
        id:3,
        question:"deneme",
        answer:"dwepokpkowepwpwokedpkowe",
    },
    {
        id:4,
        question:"deneme",
        answer:"dwepokpkowepwpwokedpkowe",
    },
    {
        id:5,
        question:"deneme",
        answer:"dwepokpkowepwpwokedpkowe",
    },
  ]
  return (
    <div className='w-full m-auto   p-8  shadow-md   ' id='section1'>
        <h2 className='text-2xl mb-6 font-semibold text-white'>
            SIKÇA SORULAN SORULAR

        </h2>
        {questions.map((q) => (
            <div key={q.id} className='mb-4 last:mb-0'>
                <button className='w-full text-left text-xl focus:outline-none p-4 bg-gray-400 rounded-lg shadow-md flex justify-between items-center' onClick={() => setActiveQuestion(activeQuestion === q.id ? null: q.id)}>
                    {q.question}
                    {activeQuestion === q.id ? 
                    <FaMinusCircle/> : <FaPlusCircle/>}




                </button>
                <AnimatePresence>
                    {activeQuestion === q.id && (
                        <motion.div 
                        initial={{opacity:0, height:0}}
                        animate={{opacity:1,height:"auto"}}
                        exit ={{opacity:0, height:0}}
                        className='mt-2 text-white ml-4'
                        >
                            <p>{q.answer}</p>

                        </motion.div>
                    )}

                </AnimatePresence>


            </div>


        ))}

<hr className='my-8 border-b-2 border-gray-500' />

    </div>
    
  );
};

export default SSS;