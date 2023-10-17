import React, { useState } from 'react';
import axios from 'axios';
import Dropzone from 'react-dropzone';
import styled from 'styled-components';



const UploadForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState(null);
  const [uploadMessage, setUploadMessage] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleFileDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('Image', file);

    try {
      const response = await axios.post('http://localhost:9000/blog/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data === 'Upload done') {
        setUploadMessage('Upload successful!');
        // Clear the form after successful upload
        setTitle('');
        setContent('');
        setFile(null);
      } else {
        setUploadMessage('Upload failed.');
      }
    } catch (error) {
      console.error('Error uploading data:', error);
      setUploadMessage('Error uploading data.');
    }
  };

  return (
    <Container>
      
      <FormContainer>
      <h2>Upload into Blog</h2>
      <Input
        type="text"
        placeholder="Title"
        value={title}
        onChange={handleTitleChange}
      />
      <TextArea
        placeholder="Content"
        value={content}
        onChange={handleContentChange}
      />
      <Dropzone onDrop={handleFileDrop} accept="image/*">
        {({ getRootProps, getInputProps }) => (
          <DropzoneContainer {...getRootProps()}>
            <input {...getInputProps()} />
            {file ? (
              <p>File selected: {file.name}</p>
            ) : (
              <p>Drag and drop an image here, or click to select a file</p>
            )}
          </DropzoneContainer>
        )}
      </Dropzone>
      <button className='button-28' onClick={handleUpload}>Upload</button>
      <p>{uploadMessage}</p>
      </FormContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0;

`
const FormContainer = styled.div`
width: 70%;
padding: 20px;
background: #fff;
border: 2px solid #323232;
box-shadow: 4px 4px #323232;
border-radius: 5px;

  h2{
    margin: 20px 0;
    text-align: center;
    font-size: 40px;
    color: var(--sec);
  }
`;

const Input = styled.input`
  margin-bottom: 20px;
  padding: 8px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 20px;
`;

const TextArea = styled.textarea`
  margin-bottom: 20px;
  padding: 10px;
  width: 100%;
  height: 350px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 20px;
`;

const DropzoneContainer = styled.div`
  border: 2px dashed #ccc;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  margin-bottom: 30px;
  color: #fff;
`;


export default UploadForm;