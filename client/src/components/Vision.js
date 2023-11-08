import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Vision() {
  return (
    <Container>
        <Slot>
            <h1>Our Mission</h1>
            <p>To be the most recognised premier organisation in washing and dyeing industry in South Asia</p>    
        </Slot>

        <Slot>
            <h1>Our Vision</h1>
            <p>To provide highest return to our valuable customers with Innovative and Continuous Sustainable Improvements of our service.</p>
            <p>To become a Green Washing Plant that practices Globally Recognised Environmental Standards.</p>    
        </Slot>  

        <Policies>
        <h1>Our Policies</h1>
            <ul>
            <a href='./p7.pdf' >
  <div class="notification">
    <div class="notiglow"></div>
    <div class="notiborderglow"></div>
    <div class="notititle">Quality Policy</div>
  </div>
  </a>
           <a href='./p1.pdf'>
           <div class="notification">
    <div class="notiglow"></div>
    <div class="notiborderglow"></div>
    <div class="notititle">Environmental Policy</div>
  </div>
           </a>

           <a href='./p2.pdf' >
  <div class="notification">
    <div class="notiglow"></div>
    <div class="notiborderglow"></div>
    <div class="notititle">Health and Safety Policy</div>
  </div>
  </a>

  <a href='./p5.pdf'>
  <div class="notification">
    <div class="notiglow"></div>
    <div class="notiborderglow"></div>
    <div class="notititle">Social Accountability Policy</div>
  </div>
  </a>

  <a href='./p6.pdf'>
  <div class="notification">
    <div class="notiglow"></div>
    <div class="notiborderglow"></div>
    <div class="notititle">Non - Discrimination Policy</div>
  </div>
  </a>

  <a href='./p3.pdf'>
  <div class="notification">
    <div class="notiglow"></div>
    <div class="notiborderglow"></div>
    <div class="notititle">Non Enforced Labour Policy</div>
  </div>
  </a>

  <a href='./p4.pdf'>
  <div class="notification">
    <div class="notiglow"></div>
    <div class="notiborderglow"></div>
    <div class="notititle">Anti-Harassment and Non-Abusive Policy</div>
  </div>
  </a>

  


  

  

  

  

  
                {/* <li>Environmental Policy</li>
                <li>Anti-Harassment and Non-Abusive Policy</li>
                <li>Non Enforced Labour Policy</li>
                <li>Social Accountability Policy</li>
                <li>Non - Discrimination Policy</li>
                <li>Quality Policy</li> */}
            </ul>
        </Policies>
    </Container>
  )
}
 const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
 
`

const Slot = styled.div`
width: 40%;
height: 350px;
display: flex;
flex-direction: column;
padding: 50px;
align-items: center;
background: linear-gradient(#fff, #fff) padding-box,linear-gradient(145deg, transparent 35%,var(--sec), var(--sec)) border-box;
border: 2px solid transparent;
border-radius: 16px;
margin: 40px ;
box-shadow: 0px 187px 75px rgba(0, 0, 0, 0.01), 0px 105px 63px rgba(0, 0, 0, 0.05), 0px 47px 47px rgba(0, 0, 0, 0.09), 0px 12px 26px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
    

@media only screen and (max-width: 1200px){
  width: 96%;
  height: 370px;
  padding: 25px;
  margin-bottom: 20px;
  margin: 20px 0;
}

    h1{
        margin-bottom: 30px ;

        
        @media only screen and (max-width: 1200px){
          font-size: 26px;
      }
 }
 p{
    line-height: 1.8rem;
    text-align: center;
    margin-top: 10px;
    font-size: 15px;

 }
 

`

const Policies = styled.div`
 width: 70%;
 padding: 50px 0;
 background: linear-gradient(#fff, #fff) padding-box,linear-gradient(145deg, transparent 35%,var(--sec), var(--sec)) border-box;
border: 2px solid transparent;
border-radius: 16px;
box-shadow: 0px 187px 75px rgba(0, 0, 0, 0.01), 0px 105px 63px rgba(0, 0, 0, 0.05), 0px 47px 47px rgba(0, 0, 0, 0.09), 0px 12px 26px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
    padding: 40px;

 h1{
  text-align: center;
  margin-bottom: 50px;

  @media only screen and (max-width: 1200px){
    font-size: 26px;
}

 }

 @media only screen and (max-width: 1200px){
  width: 95%;
  padding: 20px 10px;
}



 ul{
    width: 100%;
    list-style-type: none;
 }
 li{
    width: 100%;
    border-radius: 15px;
    padding: 15px;
    margin: 10px 0;
    background: linear-gradient(#fff, #fff) padding-box,linear-gradient(145deg, transparent 35%,var(--sec), var(--sec)) border-box;
 }

 .notification {
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    isolation: isolate;
    position: relative;
    margin: 15px 0;
    width: 100%;
    height: 4rem;
    background: #fff;
    border-radius: 8px;
    overflow: hidden;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 16px;
    --gradient: linear-gradient(to bottom, #2eadff, #3d83ff, #7e61ff);
    --color: #32a6ff
  }
  
  .notification:before {
    position: absolute;
    content: "";
    inset: 0.0625rem;
    border-radius: 0.9375rem;
    background: #fff;
    z-index: 2;
  }
  
  .notification:after {
    position: absolute;
    content: "";
    width: 0.25rem;
    inset: 0.65rem auto 0.65rem 0.5rem;
    border-radius: 0.125rem;
    background: var(--gradient);
    transition: transform 300ms ease;
    z-index: 4;
  }
  
  .notification:hover:after {
    transform: translateX(0.15rem);
  }

  .notification:hover {
    cursor: pointer;
  }
  
  .notititle {
    color: #585858;
    padding: 0.65rem 0.25rem 0.4rem 1.25rem;
    font-weight: 500;
    font-size: 1.4rem;
    transition: transform 300ms ease;
    z-index: 5;
    margin-left: 10px;

    @media only screen and (max-width: 1200px){
      font-size: 1.2rem;
  }
  }
  
  .notification:hover .notititle {
    transform: translateX(0.15rem)
  }
  
  .notibody {
    color: #99999d;
    padding: 0 1.25rem;
    transition: transform 300ms ease;
    z-index: 5;
  }
  
  .notification:hover .notibody {
    transform: translateX(0.25rem)
  }
  
  .notiglow,
  .notiborderglow {
    position: absolute;
    width: 20rem;
    height: 20rem;
    transform: translate(-50%, -50%);
    background: radial-gradient(circle closest-side at center, white, transparent);
    opacity: 0;
    transition: opacity 300ms ease;
  }
  
  .notiglow {
    z-index: 3;
  }
  
  .notiborderglow {
    z-index: 1;
  }
  
  .notification:hover .notiglow {
    opacity: 0.1
  }
  
  .notification:hover .notiborderglow {
    opacity: 0.1
  }
  
  .note {
    color: var(--color);
    position: fixed;
    top: 80%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    font-size: 0.9rem;
    width: 75%;
  }
  a{
    text-decoration: none;
  }


`
export default Vision
