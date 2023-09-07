import React from 'react'
import styled from 'styled-components'



function Sustainability() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    accessibility: true,
    arrows: false
  };
  return (
    <Container>
      <Head>
        <div></div>
        <img src='./susrainability.png' />
      </Head>
      <Body>
        <Wrap>
           <Header>
           <h1>Sustainability</h1>
           
           </Header>
           <Slot>
            
            <Right>
              <h2>Conserve the Environment</h2>
              <p>Throughout the company supply chain
process, emphasis and commitment is
unwaveringly focused on the conservation of
the environment. In this context, we have
installed and put into operation the following,</p> 
              
            </Right>
            <Left>
              <img src='./converse.jpg' />
            </Left>
           </Slot>
           <Boxes>
                <Box>
                  <Up>
                    <img src='./mirror.png' />
                  </Up>
                  <Down>
                    <p>Environmental impact measures software</p>
                  </Down>
                </Box>

                <Box>
                  <Up>
                    <img src='./mirror.png' />
                  </Up>
                  <Down>
                    <p>Exclusive use of ZDHC chemicals (zero discharge of hazardous chemicals)</p>
                  </Down>
                </Box>

                <Box>
                  <Up>
                    <img src='./mirror.png' />
                  </Up>
                  <Down>
                    <p>Solar Power</p>
                  </Down>
                </Box>

                <Box>
                  <Up>
                    <img src='./mirror.png' />
                  </Up>
                  <Down>
                    <p>Water Treatment plant</p>
                  </Down>
                </Box>

                <Box>
                  <Up>
                    <img src='./mirror.png' />
                  </Up>
                  <Down>
                    <p>Energy efficient management system</p>
                  </Down>
                </Box>

                <Box>
                  <Up>
                    <img src='./mirror.png' />
                  </Up>
                  <Down>
                    <p>Water management system</p>
                  </Down>
                </Box>

                <Box>
                  <Up>
                    <img src='./mirror.png' />
                  </Up>
                  <Down>
                    <p>Mangrove plantation project (2021/2022), planted over 2000 mangrove trees</p>
                  </Down>
                </Box>
              </Boxes>

              <Slot>

              <Left_Two>
              <img src='./human.jpg' />
            </Left_Two>
            
            <Right>
              <h2>Empower Our Human Resources</h2>
              <p>Blissful, healthy, content workforce yields
maximum productivity. To achieve this
objective, we have initiated the following,</p> 
              
            </Right>

            
            
           </Slot>


           <Boxes>
                <Box>
                  <Up>
                    <img src='./mirror.png' />
                  </Up>
                  <Down>
                    <p>Higher studies opportunities for prospective employees</p>
                  </Down>
                </Box>

                <Box>
                  <Up>
                    <img src='./mirror.png' />
                  </Up>
                  <Down>
                    <p>Free (meals, uniforms, safety gear and transport) for the workforce</p>
                  </Down>
                </Box>

                <Box>
                  <Up>
                    <img src='./mirror.png' />
                  </Up>
                  <Down>
                    <p>In-house free medical facilities (Doctor and Nurse)</p>
                  </Down>
                </Box>

                <Box>
                  <Up>
                    <img src='./mirror.png' />
                  </Up>
                  <Down>
                    <p>Financial incentives during periods of economic hardships</p>
                  </Down>
                </Box>

              
              </Boxes>


              <Slot>
            
            <Right>
              <h2>Support Communities</h2>
              <p>We firmly believe that community plays an
integral part in the context of holistic
development. With this in mind, we have
initiated several Corporate social
responsibility exercises to enrich the
livelihood of various communities. In this
context, we have launched several CSR actives
such as</p> 
              
            </Right>
            <Left_Three>
              <img src='./support.jpg' />
            </Left_Three>
           </Slot>

           <Boxes>
                <Box>
                  <Up>
                    <img src='./mirror.png' />
                  </Up>
                  <Down>
                    <p>Donate books for children of the workforce</p>
                  </Down>
                </Box>

                <Box>
                  <Up>
                    <img src='./mirror.png' />
                  </Up>
                  <Down>
                    <p>Donations for local schools (Dankotuwa Balika girls school, Dhammisara College Nattandiya etc)</p>
                  </Down>
                </Box>

                <Box>
                  <Up>
                    <img src='./mirror.png' />
                  </Up>
                  <Down>
                    <p>Donations for universities (University of Ruhuna)</p>
                  </Down>
                </Box>

                <Box>
                  <Up>
                    <img src='./mirror.png' />
                  </Up>
                  <Down>
                    <p>Donations for clubs and societies (HELPAGE,United sports club, Asiri Uyana Grama Sanwardana Samithiya)</p>
                  </Down>
                </Box>

                <Box>
                  <Up>
                    <img src='./mirror.png' />
                  </Up>
                  <Down>
                    <p>Donations for places of religious worship</p>
                  </Down>
                </Box>


              
              </Boxes>

              <Slot>

              <Left_Four>
              <img src='./gov.jpg' />
            </Left_Four>
            
            <Right>
              <h2>Cooperate governance initiatives</h2>
              <p>In the process of making right choices,
adherence and compliance to existing good
governance is imperative. This promotes
healthier, fairer and habitable communities
with traits such as equality and access to
universal human rights. We endeavour to
always abide by stipulated rules and
regulations to achieve long term
sustainability.</p> 
              
            </Right>
            
           </Slot>

            
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
   

`

const Wrap = styled.div`
    width: 95%;
    padding: 30px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

   

`

const Header = styled.div`
h1{
  font-size: 70px;
  text-align: center;
  color: var(--sec);

  @media only screen and (max-width: 1200px){
    font-size: 42px;
  }

}

p{

  padding: 10px;
  line-height: 2.1rem;
  letter-spacing: 2.1px;
  text-align: left;

  @media only screen and (max-width: 1200px){
    font-size: 16px;
    text-align: center;

  }
}

`
const Slot = styled.div`
  width: 70%;
  height: 300px;
  display: flex;
  background-size: cover;
  margin-top: 80px;
  

  @media only screen and (max-width: 1200px){
    flex-direction: column;
    width: 100%;
    height: 600px;
    border-radius: 15px;
    margin: 30px 0;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    padding: 20px 10px;
  border: 1px solid var(--sec);
  }


`

const Left = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  

  @media only screen and (max-width: 1200px){
    width: 100%;
    height: 400px;
    background: url("./converse2.jpg");
    background-size: cover;
      
}

  img{
    width: 100%;
    height: 100%;
    border-radius: 0 50% 50% 0;

    @media only screen and (max-width: 1200px){
      border-radius: 0;
      display: none;
      
  }
  }

`

const Left_Two = styled.div`
width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  

  @media only screen and (max-width: 1200px){
    width: 100%;
    height: 400px;
    background: url("./human.jpg");
    background-size: cover;
      
}

  img{
    width: 100%;
    height: 100%;
    border-radius: 50% 0 0 50%;

    @media only screen and (max-width: 1200px){
      border-radius: 0;
      display: none;
      
  }
  }

`
const Left_Four = styled.div`
width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  

  @media only screen and (max-width: 1200px){
    width: 100%;
    height: 400px;
    background: url("./gov2.jpg");
    background-size: cover;
      
}

  img{
    width: 100%;
    height: 100%;
    border-radius: 50% 0 0 50%;

    @media only screen and (max-width: 1200px){
      border-radius: 0;
      display: none;
      
  }
  }

`

const Left_Three = styled(Left)`
  

width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  

  @media only screen and (max-width: 1200px){
    width: 100%;
    height: 400px;
    background: url("./support2.jpg");
    background-size: cover;
      
}

  img{
    width: 100%;
    height: 100%;
    border-radius: 0 50% 50% 0;

    @media only screen and (max-width: 1200px){
      border-radius: 0;
      display: none;
      
  }
  }


 
`

const Right = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-right: 50px;

  @media only screen and (max-width: 1200px){
    padding: 0;
    width: 100%;
}
  

  h2{
    text-align: center;
    color: var(--sec);
    letter-spacing: 2.1px;
  }
  p{
    text-align: center;
    margin: 17px 0;
    line-height: 1.8rem;
  }

`

const Boxes = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 30px;

  @media only screen and (max-width: 1200px){
    padding: 0;
    margin-top: 20px;
}

`

const Box = styled.div`
  width: 200px;
  height: 180px;
  background: #FEFCFF;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  margin: 20px 30px;

  @media only screen and (max-width: 1200px){
    width: 140px;
    height: 150px;
    margin: 10px;
}

`

const Up = styled.div`
  width: 100%;
  height: 45%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1200px){
    height: 35%;
}
  
  img{
    width: 33%;

    @media only screen and (max-width: 1200px){
      width: 20%;
  }
  }

`

const Down = styled.div`
  width: 100%;
  height: 55%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1200px){
    height: 65%;
}
  

  
  p{
    font-size: 12px;
    line-height: 1.1rem;
    text-align: center;
    color: var(--sec);

    @media only screen and (max-width: 1200px){
      font-size: 10px;
  }
  }

`
export default Sustainability
