import React, { useState, useEffect } from 'react';
import { Box, Center, Text, Stack } from '@chakra-ui/react';

const Quota = () => {
  const [productTestData, setProductTestData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Retrieve stored data from localStorage
    const storedData = JSON.parse(localStorage.getItem('ProductsTest')) || {};

    // If the data exists in localStorage, update state
    if (Object.keys(storedData).length > 0) {
      setProductTestData(storedData);
    }

    setIsLoading(false); // Data is now loaded
  }, []);

  if (isLoading) {
    return <Center>Loading...</Center>;
  }

  // Render the data values one by one
  return (
    <Center minHeight="10vh" m={5}>
      <Box
        p={8}
        border="1px solid"
        borderColor="gray.200"
        borderRadius="lg"
        boxShadow="lg"
        maxW="500px"
        w="100%"
        textAlign="center"
      >
        <Text textAlign="center" fontWeight={700} fontSize="30px">Quota</Text>
        <Stack spacing={4} mt={4}>
          {productTestData && Object.keys(productTestData).map((key) => {
            const value = productTestData[key];

            // Handle startTime field separately if it contains an object
            if (key === 'startTime' && typeof value === 'object') {
              return (
                <Box key={key} p={2} border="1px solid" borderColor="gray.300" borderRadius="md">
                  <Text fontWeight={600}>{key}:</Text>
                  <Text>{`Date: ${value.date}, Time: ${value.time}`}</Text>
                </Box>
              );
            }

            // For all other fields, just render the value as a string
            return (
              <Box key={key} p={2} border="1px solid" borderColor="gray.300" borderRadius="md">
                <Text fontWeight={600}>{key}:</Text>
                <Text>{String(value)}</Text>
              </Box>
            );
          })}
        </Stack>
      </Box>
    </Center>
  );
};

export default Quota;
