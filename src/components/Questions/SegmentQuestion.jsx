import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  VStack,
  HStack,
  Flex,
} from "@chakra-ui/react";

const SegmentQuestion = ({ currentQuestion, setSliderMoved, setResponses }) => {
  const [sliderValue, setSliderValue] = useState(3); // Default neutral value
  const maxSliderValue = currentQuestion.lableOptions.length - 1; // Maximum value based on options length

  // Set the slider value from localStorage if it exists
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("ProductsTest")) || {};
    const storedValue = storedData[currentQuestion.number];

    if (storedValue) {
      // Find the index of the stored value in the lableOptions
      const index = currentQuestion.lableOptions.findIndex(
        (option) => option.value === storedValue
      );
      if (index !== -1) {
        setSliderValue(index); // Set the slider to the stored index
      }
    }
  }, [currentQuestion.number, currentQuestion.lableOptions]);

  const handleSliderChange = (value) => {
    setSliderValue(value);
    setSliderMoved(true);

    // Update the parent state with the slider value (index) and the corresponding option
    setResponses((prevResponses) => ({
      ...prevResponses,
      [currentQuestion.number]: currentQuestion.lableOptions[value].value,
    }));

    // Optionally, save the selected value to localStorage
    const selectedOption = currentQuestion.lableOptions[value];
    const storedData = JSON.parse(localStorage.getItem("ProductsTest")) || {};
    localStorage.setItem(
      "ProductsTest",
      JSON.stringify({
        ...storedData,
        [currentQuestion.number]: selectedOption.value,
      })
    );
  };

  return (
<Box
  p={6}        width={{ base: '90%', sm: '80%', md: '80%', lg: '60%' }} mx="auto" mt={6} borderWidth="1px" borderRadius="lg" 
>
  <Flex spacing={6} align="stretch" direction={{ base: 'column', md: 'row' }}>
    {/* Person A's Statement */}
  

<Text
      fontSize={{ base: "sm", md: "md" }}
      textAlign="center"
      mt={3}
      mb={4} // Add bottom margin for spacing
      mx={{ base: "2", md: "5" }} // Horizontal margin with responsive values
      width={{ base: "auto", md: "300px" }} // Set width for mobile and larger devices
    >
      <b>Person A</b> <br />
      {currentQuestion.statementA}
    </Text>

    {/* Slider */}
    <Flex direction="column" mt={6} gap={5} width={{ base: '100%', md: '500px', lg: '700px' }}  justifyContent="center">
      <Slider
        aria-label="rating-slider"
        min={0} // Slider values will start from 0
        max={maxSliderValue} // Maximum value based on the number of options
        step={1}
        value={sliderValue}
        onChange={handleSliderChange}
        colorScheme="blue"
      >
        <SliderTrack bg="gray.300">
          {/* <SliderFilledTrack /> */}
        </SliderTrack>
        <SliderThumb boxSize={5}  />
      </Slider>

      {/* Displaying Labels dynamically from currentQuestion.lableOptions */}
      <HStack justify="space-between" mt={2}>
        {currentQuestion.lableOptions.map((option, index) => (
          <Text
            key={index}
            fontSize={{ base: "xs", md: "sm" }}
            textAlign="center"
            width={{ base: "45px", md: "70px" }} // Adjust width for different screen sizes
          >
            {option.label} {/* Display the label for each option */}
          </Text>
        ))}
      </HStack>
    </Flex>

    {/* Person B's Statement */}
    <Text
      fontSize={{ base: "sm", md: "md" }}
      textAlign="center"
      mt={4} // Added top margin for spacing between elements
      mx={{ base: "2", md: "5" }} // Horizontal margin with responsive values
      width={{ base: "auto", md: "300px" }} // Set width for mobile and larger devices
    >
      <b>Person B</b> <br />
      {currentQuestion.statementB}
    </Text>
  </Flex>
</Box>

  );
};

export default SegmentQuestion;
