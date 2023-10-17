import React, { useEffect, useState} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css'
import { BsArrowRightShort } from "react-icons/bs";
function Posts() {

    const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch all posts from the backend API
    axios.get('http://localhost:9000/blog')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);
  return (
    <Container>
      <Head>

        <img src='https://wallpapercave.com/wp/wp10161906.jpg' />
      </Head>
      <Body>
        <Wrap>
           <Header>
           <h1>Spotless Solutions for a Cleaner World</h1>
            
           
           </Header>
           

           {/* <Boxes>
            <Post>
                <Up>
                <img src='./about3.jpg' /> 
                </Up>
                <Downer>
                    <h1>Lorem ipsum dolor</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse sed nisi lacus sed. Ut placerat orci nulla pellentesque dignissim. </p>
                    <Link to='/post'><a >See more</a></Link>
                </Downer>
            </Post>
           </Boxes> */}

           {/* <Boxes>
            {posts.map(post => (
              <Post key={post._id}>
                <Up>
                <img src={post.imageUrl} alt="Post" />
                </Up>
                <Downer>
                  <h1>{post.title}</h1>
                  <p>{post.content}</p>
                  <Link to={`/blog/${post._id}`}><a>See more</a></Link>
                </Downer>
              </Post>
            ))}
          </Boxes> */}

<Boxes>
            {posts.map(post => (
              <Post key={post._id}>
                <Up>
                  <img src={post.imageUrl} alt="Post" />
                </Up>
                <Downer>
                  <h1>{post.title}</h1>
                  <ContentWrapper>
                    <p>
                      {post.content.length > 200
                        ? `${post.content.substring(0, 200)}...`
                        : post.content}
                    </p>
                    {post.content.length > 200 && (
                     <a><Link to={`/blog/${post._id}`} className='link'>Read More <BsArrowRightShort className='arrow' /></Link></a>
                    )}
                  </ContentWrapper>
                </Downer>
              </Post>
            ))}
          </Boxes>
                
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
const ContentWrapper = styled.div`
  p {
    margin-bottom: 10px;
  }

  a {
    color: blue;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Boxes = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 50px 0;


`
const Post = styled.div`
    width: 30%;
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    margin: 0 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

   
`

const Up = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: center;

    img{
        width: 100%;
        border-radius: 15px;
    }

`
const Downer = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;


    p{
        font-size: 14px;
        line-height: 1.6rem;
        margin-top: 13px;
        text-align: center;
    }
    h1{
        text-align: center;
        font-size: 26px;
    }

    .arrow{
      font-size: 24px;
      margin-top: 3px;
    }
    a{
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      margin-top: 20px;
      font-size: 18px;
      letter-spacing: 1.6px;
    }

`
const Head = styled.div`
    width: 100%;
    height: 80vh;

    div{
      width: 100%;
      height: 5vh;
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

    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--main);

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
  font-size: 60px;
  text-align: center;
  color: var(--sec);

  @media only screen and (max-width: 1200px){
    font-size: 42px;
  }

}

p{

  padding: 50px 0;

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



export default Posts
