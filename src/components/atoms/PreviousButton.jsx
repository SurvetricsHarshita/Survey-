import React from 'react';
import { Button } from '@chakra-ui/react';
import { IoArrowBack } from 'react-icons/io5';

const PreviousButton = ({ onPrev }) => {
  return (
    <Button
      colorScheme="teal"
      variant="outline"
      leftIcon={<IoArrowBack />}
      onClick={onPrev}
    >
      Previous
    </Button>
  );
};

export default PreviousButton;
