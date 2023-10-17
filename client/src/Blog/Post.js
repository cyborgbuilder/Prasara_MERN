import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

function Post() {
  const { postId } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:9000/blog/${postId}`)
      .then(response => {
        setPost(response.data);
      })
      .catch(error => {
        console.error('Error fetching post:', error);
      });
  }, [postId]);

  const formatContent = (content) => {
    if (content) {
      const paragraphsAndLists = content.split('\n').map((item, index) => {
        if (item.startsWith('* ')) {
          return <li style={{color: 'black'}} key={index}>{item.substring(2)}</li>;
        } else {
          return <p key={index}>{item}</p>;
        }
      });
  
      return <ul>{paragraphsAndLists.map((element, index) => <React.Fragment key={index}>{element}</React.Fragment>)}</ul>;
    }
    return null; 
  };

  return (
    <Container>
      
      <Body>
        <Wrap>
        <Head>
        <img src={post.imageUrl} alt="Post" />
      </Head>
          <Header>
            <h1>{post.title}</h1>
            {formatContent(post.content)}
          </Header>
        </Wrap>
      </Body>
    </Container>
  );
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
        border-radius: 15px;
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
    width: 80%;
    padding: 30px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    
   

`

const Header = styled.div`

h1{
  font-size: 40px;
  text-align: center;
  color: var(--sec);
  margin-bottom: 80px;
  margin-top: 40px;

  @media only screen and (max-width: 1200px){
    font-size: 42px;
  }

}

p{

  padding: 10px 0;

  line-height: 2.1rem;
  letter-spacing: 2.1px;
  text-align: left;

  @media only screen and (max-width: 1200px){
    font-size: 16px;
    text-align: center;
  
    padding: 10px;

  }
}



`






export default Post
