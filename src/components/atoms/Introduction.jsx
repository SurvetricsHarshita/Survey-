import React from 'react';
import { Box, Text } from '@chakra-ui/react';

function Introduction({ currentQuestion }) {
  return (
    <Box

      fontSize={{ base: "md", sm: "md", md: "lg", lg: "lg" }}
      maxWidth="1024px"
      margin="0 auto"
    >
      <Text marginBottom="10">{currentQuestion.para1}</Text>
      <Text marginBottom="4">{currentQuestion.para2}</Text>
      <Text>{currentQuestion.para3}</Text>
    </Box>
  );
}

export default Introduction;
