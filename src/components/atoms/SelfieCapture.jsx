import React, { useState, useRef, useEffect } from 'react';
import { Box, Button, Image, Heading, useToast, VStack } from '@chakra-ui/react';
import Axios from 'axios';
import { AiOutlineCamera, AiFillCamera, AiOutlineReload, AiOutlineUpload } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const SelfieCapture = ({ setResponses,onSubmit ,currentQuestion}) => {
  const [imageSrc, setImageSrc] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isCaptured, setIsCaptured] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();
  // const [otherValues, setOtherValues] = useState({});
  const [image, setImage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); 
  // Start the camera
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    } catch (error) {
      console.error('Error accessing the camera:', error);
      toast({
        title: 'Camera Error',
        description: 'Please ensure your camera is available.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };


  // Capture the selfie
  const captureSelfie = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;

    if (video) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      const ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      const imageData = canvas.toDataURL('image/jpeg');
      setImageSrc(imageData); // Set the image source for preview

      // Stop the video stream after capturing the selfie
      const stream = video.srcObject;
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());

      setIsCaptured(true); // Mark that the selfie has been captured
    } else {
      toast({
        title: 'Capture Error',
        description: 'Please ensure the camera is started before capturing.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  // Upload the selfie to the backend
  const uploadSelfie = async () => {
    if (!imageSrc) return;
    setIsSubmitting(true);
    try {
      const blob = await fetch(imageSrc).then((res) => res.blob());

      const formData = new FormData();
      formData.append('file', blob, 'selfie.jpg');

      const response = await Axios.post('https://fi-backend.vercel.app/add-image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        toast({
          title: 'Success',
          description: 'Selfie uploaded successfully!',
          status: 'success',
          duration: 1000,
          isClosable: true,
          position: 'top-right',
        });
        
        // const end = new Date();
        // const endTime = {
        //   date: end.toLocaleDateString(),
        //   time: end.toLocaleTimeString(),
        // };

        // Retrieve existing data from local storage
        // const existingData = JSON.parse(localStorage.getItem('E_TrucksData')) || {};

        setResponses((prevResponses) => ({
          ...prevResponses,
          [currentQuestion.number]: response.data.fileUrl,
        }));
        // Merge the end time into the existing data
        // const updatedData = {
        //   ...existingData,
        //   endTime,
        //   image: response.data.fileUrl,
        onSubmit()
        // };
        // onSubmit
        // Store the updated data back in localStorage
        // localStorage.setItem('E_TrucksData', JSON.stringify(updatedData));

        // Call the function to submit the data to the API
        // await submitDataToAPI(updatedData);

      } else {
        toast({
          title: 'Upload Failed',
          description: 'Failed to upload selfie.',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error('Error uploading selfie:', error);
      toast({
        title: 'Upload Error',
        description: 'Error uploading selfie.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      setIsSubmitting(false);
    }
  };

  // Function to submit E_TrucksData to the API
  const submitDataToAPI = async (data) => {
    try {
      const response = await Axios.post('https://fi-backend.vercel.app/add-data2', data);

      if (response.status === 200) {
        toast({
          title: 'Data Submission Success',
          description: 'Data submitted successfully!',
          status: 'success',
          duration: 3000,
          isClosable: true,
            position: 'top-left'
        });
        navigate("/submit");
        localStorage.clear();
      } else {
        toast({
          title: 'Submission Failed',
          description: 'Failed to submit data.',
          status: 'error',
          duration: 3000,
          isClosable: true,
           position: 'top-right'
        });
      }
    } catch (error) {
      console.error('Error submitting data:', error);
      toast({
        title: 'Submission Error',
        description: 'Error submitting data.',
        status: 'error',
        duration: 3000,
        isClosable: true,
           position: 'top-right'
      });
    }finally {
      setIsSubmitting(false); // Re-enable the button after data submission
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" p={4} maxW="400px" margin="auto">
      {!isCaptured ? (
        <VStack spacing={4}>
          <video ref={videoRef} autoPlay playsInline style={{ width: '100%', borderRadius: '8px' }} />
          <Button colorScheme="teal" onClick={startCamera} width="100%" leftIcon={<AiOutlineCamera />}>
            Start Camera
          </Button>
          <Button colorScheme="teal" onClick={captureSelfie} width="100%" leftIcon={<AiFillCamera />}>
            Capture Selfie
          </Button>
          <canvas ref={canvasRef} style={{ display: 'none' }} />
        </VStack>
      ) : (
        <VStack spacing={4}>
          <Heading size="md">Preview your selfie:</Heading>
          <Image src={imageSrc} alt="Selfie Preview" width="100%" borderRadius="8px" />
          <Button colorScheme="teal" onClick={() => setIsCaptured(false)} width="100%" leftIcon={<AiOutlineReload />}>
            Retake Selfie
          </Button>
          {/* <Button colorScheme="teal" onClick={uploadSelfie} width="100%" leftIcon={<AiOutlineUpload />}>
            Submit
          </Button> */}
          <Button
            colorScheme="teal"
            onClick={uploadSelfie}
            width="100%"
            leftIcon={<AiOutlineUpload />}
            isDisabled={isSubmitting} // Disable the button while submitting
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>
        </VStack>
      )}
    </Box>
  );
};

export default SelfieCapture;
