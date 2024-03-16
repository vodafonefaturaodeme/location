import React,{useState} from "react";
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import styled from "styled-components";

const contact = () => {
    


    return(
        <StyledContactForm>
            
        <div className="w-full py-16  px-4" id="section3">
        <form  action="https://formspree.io/f/xleqween"
  method="POST">
        <h1>İletişim</h1>
        <input type="text" name="İsim" placeholder="İsim" autoComplete="off" required/>
        <input type="text" name="Soyisim" placeholder="Soyisim" autoComplete="off" required/>
        <input type="text" name="Email" placeholder="Email" autoComplete="off" required/>
        <textarea  id="" cols="60" rows="5" name="message" placeholder="Mesaj ekleyin." autoComplete="off" required></textarea>
        <button type="submit">Gönder</button>

      </form>

        </div>
        <div class="horizontal-line"></div>

      
      
    </StyledContactForm>
    )
}

export default contact;




const StyledContactForm = styled.div`

.horizontal-line {
    border: none;
    height: 10px; /* Çizginin kalınlığı */
    background-color: #fff; /* Çizgi rengi */
    margin: 10px 0; /* İstenilen boşlukları sağlamak için */
  }
h1{
    color: white;
    padding-top: 10px;
    text-align: center;
    font-size: 60px;
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

}

input{
    background-color: white;
    width: 70%;
    margin-left: 12%;
    font-size: 20px;
    padding: 16px 16px;
    border-radius:10px;
    border-color: black;
    margin-bottom: 20px;
}
textarea{
    background-color: white;
    width: 70%;
    margin-left:12%;
    font-size: 20px;
    border-radius:10px;
    border-color: black;
    margin-bottom: 25px;
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;


}


input:focus-within{
    outline: none;
    border: #5bd183;
    border-width: 3px;
}

button{
    background-color: #5bd183;
    border-radius: 12px;
    border-color: black;
    font-size: 22px;
    padding: 10px 18px;
    text-align: center;
    display: flex;
    margin: auto;
}


button:hover{
    opacity: 80%;
    cursor:pointer;
}
`;