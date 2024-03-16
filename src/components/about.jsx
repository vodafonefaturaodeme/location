import React,{useState} from "react";
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import './style.scss';
import laptop from '../assets/laptop.jpg'
const about = () => {
    


    return(
        <section class="heor" className="bg-white component-sayoutLoginRegister" id="section2" >
            <div class="heading">
                <h1>Hakkımızda</h1>

            </div>
            <div class="container">
                <div class="hero-content">
                     <h2>Sitemize hoşgeldiniz</h2>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa minima facilis ratione dolor necessitatibus modi ad architecto, odit cum quidem distinctio ipsam eveniet vero illum. Deserunt provident eaque, eum, facere dicta quis cumque deleniti amet ratione enim ab soluta minima dolores officiis corporis labore dolorum repudiandae. Perferendis, culpa? Rem dolores commodi quod. Est ipsam reiciendis illum, quis voluptatum iusto fugiat, quidem dignissimos consectetur ipsa itaque corporis. Officiis ipsum dignissimos deserunt odio natus quibusdam reiciendis nulla? Recusandae esse eos et voluptatem voluptate facere dolorum, dolorem consequuntur voluptatibus, quod qui error? Ad facere dolore exercitationem similique quod fugit eius aut molestiae deleniti.</p>
                     <button class="cta-btn">İletişim</button>

                </div>
                <div class="hero-image">
                    <img src={laptop} alt="" />

                </div>

            </div>

        </section>
    )
}

export default about;