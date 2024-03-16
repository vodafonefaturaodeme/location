import React from 'react';
// import {
//   FaDribbbleSquare,
//   FaFacebookSquare,
//   FaGithubSquare,
//   FaInstagram,
//   FaTwitterSquare,
// } from 'react-icons/fa';
import { useState } from 'react';
// import {motion ,AnimatePresence} from "framer-motion"
// import {FaPlusCircle , FaMinusCircle}
// from "react-icons/fa"
// import { Link, animateScroll as scroll } from "react-scroll";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';



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
    <Container>
      <Row className="justify-content-md-center">
      
        <Col xs lg="10">

        <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

        </Col>
      
      </Row>
     
    </Container>
   
//     <div className="container-xxl">
    
//     <div className='w-full m-auto p-6 shadow-md' id='section1'>
//         <h2 className='text-2xl mb-6 font-semibold text-white'>
//             SIKÇA SORULAN SORULAR

//         </h2>
//         {questions.map((q) => (
//             <div key={q.id} className='mb-4 last:mb-0'>
//                 <button className='w-full text-left text-xl focus:outline-none p-4 bg-gray-400 rounded-lg shadow-md flex justify-between items-center' onClick={() => setActiveQuestion(activeQuestion === q.id ? null: q.id)}>
//                     {q.question}
//                     {activeQuestion === q.id ? 
//                     <FaMinusCircle/> : <FaPlusCircle/>}




//                 </button>
//                 <AnimatePresence>
//                     {activeQuestion === q.id && (
//                         <motion.div 
//                         initial={{opacity:0, height:0}}
//                         animate={{opacity:1,height:"auto"}}
//                         exit ={{opacity:0, height:0}}
//                         className='mt-2 text-white ml-4'
//                         >
//                             <p>{q.answer}</p>

//                         </motion.div>
//                     )}

//                 </AnimatePresence>


//             </div>


//         ))}

// <hr className='my-8 border-b-2 border-gray-500' />

//     </div>
// </div>

    
    
    );
};

export default SSS;