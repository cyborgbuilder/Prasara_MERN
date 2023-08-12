import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
function About() {
  return (
    <Container>
      <Head>
        <div></div>
        <img src='./brands.png' />
      </Head>
      <Body>
           <Header>
           <h1>Brands</h1>
           
           </Header>

           <Detail>
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
           </Detail>

           <Wrap>
           <Slot>
                <Upper>
                    <img className='logo_24' src='https://www.pngall.com/wp-content/uploads/2018/05/Disney-Logo-PNG-Pic.png' />
                </Upper>
                <Down>
                    <h1>Disney</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

           <Slot>
                <Upper>
                    <img className='logo_24' src='https://logos-download.com/wp-content/uploads/2016/08/Lululemon_logo.png' />
                </Upper>
                <Down>
                    <h1>lululemon</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_32' src='https://logowik.com/content/uploads/images/731_poloralphlauren.jpg' />
                </Upper>
                <Down>
                    <h1>Polo</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_35' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Tommy_Hilfiger_Logo.png/2560px-Tommy_Hilfiger_Logo.png' />
                </Upper>
                <Down>
                    <h1>Tommy Hilfiger</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_37' src='https://logos-world.net/wp-content/uploads/2020/05/Victoria-Secret-Logo.png' />
                </Upper>
                <Down>
                    <h1>Victoria's Secret</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_4' src='https://pngimg.com/uploads/amazon/amazon_PNG7.png' />
                </Upper>
                <Down>
                    <h1>amazon</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_8' src='https://logos-world.net/wp-content/uploads/2020/05/Calvin-Klein-Logo.png' />
                </Upper>
                <Down>
                    <h1>Calvin Klein</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_36' src='https://logos-download.com/wp-content/uploads/2018/08/Van_Heusen_logo_fasion.png' />
                </Upper>
                <Down>
                    <h1>Van Huessen</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_15' src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Guess_logo.svg/2560px-Guess_logo.svg.png' />
                </Upper>
                <Down>
                    <h1>Guess</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_6' src='https://download.logo.wine/logo/ASOS_(retailer)/ASOS_(retailer)-Logo.wine.png' />
                </Upper>
                <Down>
                    <h1>asos</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_23' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Levis-logo-quer.svg/2560px-Levis-logo-quer.svg.png' />
                </Upper>
                <Down>
                    <h1>Levi's</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_10' src='https://logos-world.net/wp-content/uploads/2020/12/Dockers-Logo-2005-2018.png' />
                </Upper>
                <Down>
                    <h1>Dockers</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_16' src='https://logos-download.com/wp-content/uploads/2016/04/HM_logo_logotype_emblem.png' />
                </Upper>
                <Down>
                    <h1>H & M</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                <img className='logo_2' src='https://logos-world.net/wp-content/uploads/2022/11/Abercrombie-and-Fitch-Emblem.png' />
                </Upper>
                <Down>
                    <h1>Abercrombie and Fitch</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_7' src='https://seeklogo.com/images/A/atg-glove-logo-FFE6E3D9F9-seeklogo.com.png' />
                </Upper>
                <Down>
                    <h1>ATG</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_34' src='https://download.logo.wine/logo/Tesco/Tesco-Logo.wine.png' />
                </Upper>
                <Down>
                    <h1>Tesco</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_34' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/1280px-Walmart_logo.svg.png' />
                </Upper>
                <Down>
                    <h1>Walmart</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_28' src='https://pngimg.com/d/nike_PNG11.png' />
                </Upper>
                <Down>
                    <h1>Nike</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>


           

            <Slot>
                <Upper>
                    <img className='logo_3' src='https://upload.wikimedia.org/wikipedia/commons/2/24/Adidas_logo.png' />
                </Upper>
                <Down>
                    <h1>Adidas</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_12' src='https://logos-world.net/wp-content/uploads/2020/09/Fila-Logo.png' />
                </Upper>
                <Down>
                    <h1>FILA</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_19' src='https://download.logo.wine/logo/Hurley_International/Hurley_International-Logo.wine.png' />
                </Upper>
                <Down>
                    <h1>Hurley</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_9' src='https://1000logos.net/wp-content/uploads/2020/03/Columbia-logo.png' />
                </Upper>
                <Down>
                    <h1>Columbia</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_31' src='https://www.pngmart.com/files/23/Patagonia-Logo-PNG-HD.png' />
                </Upper>
                <Down>
                    <h1>Patagonia</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_11' src='https://www.logolynx.com/images/logolynx/5c/5c9b27f6b72e469d906de452323197f6.png' />
                </Upper>
                <Down>
                    <h1>Eddie Bauer</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_14' src='https://searchlogovector.com/wp-content/uploads/2020/03/gerry-weber-logo-vector.png' />
                </Upper>
                <Down>
                    <h1>Gerry Weber</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_27' src='https://upload.wikimedia.org/wikipedia/en/thumb/5/54/Next_2007-_logo.svg/2560px-Next_2007-_logo.svg.png' />
                </Upper>
                <Down>
                    <h1>next</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_27' src='./george.png' />
                </Upper>
                <Down>
                    <h1>George</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_25' src='https://upload.wikimedia.org/wikipedia/commons/a/a0/Macy%27s_Logo_2019.png' />
                </Upper>
                <Down>
                    <h1>macy's</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_26' src='https://1000logos.net/wp-content/uploads/2022/08/Marks-Spencer-logo.jpg' />
                </Upper>
                <Down>
                    <h1>Marks and Spencer</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>


            

            <Slot>
                <Upper>
                    <img className='logo_5' src='https://1000logos.net/wp-content/uploads/2020/06/American-Eagle-Logo-1985.jpg' />
                </Upper>
                <Down>
                    <h1>American Eagle</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_20' src='https://seeklogo.com/images/J/jack-wills-logo-7BFF210F7E-seeklogo.com.png' />
                </Upper>
                <Down>
                    <h1>Jack Wills</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_38' src='https://logovectorseek.com/wp-content/uploads/2021/10/walbusch-walter-busch-gmbh-und-co-kg-logo-vector.png' />
                </Upper>
                <Down>
                    <h1>Walbusch</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_30' src='https://searchlogovector.com/wp-content/uploads/2019/08/oshkosh-bgosh-logo-vector.png' />
                </Upper>
                <Down>
                    <h1>Oshkosh B'gosh</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_21' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/L.L.Bean_wordmark.svg/1024px-L.L.Bean_wordmark.svg.png' />
                </Upper>
                <Down>
                    <h1>L.L. Bean</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_33' src='https://www.bgf.co.uk/wp-content/uploads/2018/09/Untitled-design-30.png' />
                </Upper>
                <Down>
                    <h1>Seasalt Cornwall</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_13' src='https://logos-world.net/wp-content/uploads/2020/09/Gap-Logo.png' />
                </Upper>
                <Down>
                    <h1>G A P</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            
            <Slot>
                <Upper>
                    <img className='logo_29' src='https://1000logos.net/wp-content/uploads/2022/08/Old-Navy-Logo-2005.png' />
                </Upper>
                <Down>
                    <h1>Old Navy</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>

            <Slot>
                <Upper>
                    <img className='logo_22' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/LandsEnd_Logo.svg/1280px-LandsEnd_Logo.svg.png' />
                </Upper>
                <Down>
                    <h1>Land's end</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot>




          
            {/* <Slot>
                <Upper>
                    <img className='logo_18' src='https://logos-world.net/wp-content/uploads/2021/01/Helly-Hansen-Logo.png' />
                </Upper>
                <Down>
                    <h1>H / H</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Down>
            </Slot> */}

            

            

            

            

            

            
           

            

            

            

            

            
           

            

            
            

            

            

            

            

           </Wrap>
      </Body>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    background: var(--main);
    overflow: hidden;

`


const Head = styled.div`
    width: 100%;
    height: 75vh;

    div{
      width: 100%;
      height: 11vh;
      background: var(--main);
    }

    @media only screen and (max-width: 1200px){
      height: 46vh;
  }

    img{
        width: 100%;
        height: 100%;
    }

`

const Body = styled.div`
    width: 100%;
    display: flex;
    padding: 50px 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--main);

`

const Wrap = styled.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

   

`

const Header = styled.div`
h1{
  font-size: 70px;
  text-align: center;
  color: var(--sec);
  padding: 30px 0;

  @media only screen and (max-width: 1200px){
    font-size: 42px;
  }

}



`
const Detail = styled.div`
    background: #fff;
    padding: 20px;
    


    p{

        padding: 10px;
      
        line-height: 2.1rem;
        letter-spacing: 2.1px;
        text-align: center;
      
        @media only screen and (max-width: 1200px){
          font-size: 16px;
          text-align: center;
        
          padding: 10px;
      
        }
      }

`
const Slot = styled.div`
width: 15%;
height: 200px;
padding: 15px;
background: #FBFCFA;
border-radius: 8px;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
position: relative;
margin: 20px;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;



&:hover{
    border: 1px solid #fff;
    cursor: pointer;
    transform: scale(1.01);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73% ) 0px 16px 10px -10px;
}


@media only screen and (max-width: 1200px){
    width: 40%;
    padding: 10px;
    margin: 10px;
    text-align: center;
    height: 180px;
  }


h1{
    color: #fff;
    font-size: 36px;
    padding: 10px 0;
    z-index: 1000;
    border-bottom: 1px solid white;

    @media only screen and (max-width: 1200px){
        font-size: 30px;
        padding: 10px 0;
    }
}
`

const Upper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    jsutify-content: center;
    //background: url('https://www.pngkit.com/png/detail/21-219040_fila-logo-lambang-fila.png');
    background-size: cover;


    &:hover{
        cursor: pointer;


    }

    img{
        width: 100%;
        border-radius: 5px;
    }
    
    
`

const Down = styled.div`
    //height: 30%;
    display: none;


    h1{
        color: black;
        font-size: 20px;
        text-align: center;
        letter-spacing: 1.2px;
    }

    p{
        color: black;
        font-size: 12px;
        line-height: 1.2rem;
        text-align: center;
    }

`





export default About
