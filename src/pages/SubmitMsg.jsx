import { Box, Button, Center, Text } from '@chakra-ui/react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function SubmitMsg() {
  const location = useLocation();  // Access the state passed from navigate
  const { msg } = location.state || {};  // Default to empty object if no state is passed

  return (
    <Box p={8} w="100%" bg="white" textAlign="center">
      <Box mb={6}>
        <Text fontSize="2xl" fontWeight="bold" color="gray.700">
          {msg === "submit" ? " ✅ Survey Completed!" : " 🚫 Survey Terminated!"}
        </Text>

        <Text mt={3} fontSize="md" color="gray.600">
          Thank you for your participation.
        </Text>
      </Box>

      <Link to="/">
        <Button
          bg="green"
          color="white"
          fontWeight="bold"
          borderRadius="full"
          px={6}
          py={3}
          mt={5}
          _hover={{ bg: "green.300" }}
        >
          Back to Login
        </Button>
      </Link>
    </Box>
  );
}

export default SubmitMsg;
