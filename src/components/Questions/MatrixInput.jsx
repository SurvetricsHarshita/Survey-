import React, { useState, useEffect } from "react";
import {
  Box,
  FormControl,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Input,
  Text,
} from "@chakra-ui/react";

const shuffleStatementsWithLastOption = (statements, lastOptionId) => {
  const otherStatements = statements.filter((statement) => statement.id !== lastOptionId);
  const lastStatement = statements.find((statement) => statement.id === lastOptionId);

  const shuffledStatements = [...otherStatements];
  for (let i = shuffledStatements.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledStatements[i], shuffledStatements[j]] = [shuffledStatements[j], shuffledStatements[i]];
  }

  return lastStatement ? [...shuffledStatements, lastStatement] : shuffledStatements;
};

const MatrixInput = ({
  mediaChannels = [],
  handleMultiChange,
  setMediaFrequencies,
  mediaFrequencies = {},
  currentQuestion,
}) => {
  const [shuffledMediaChannels, setShuffledMediaChannels] = useState([]);

  // Initialize mediaFrequencies state
  useEffect(() => {
    setMediaFrequencies(
      mediaChannels.reduce((acc, channel) => ({ ...acc, [channel.id]: {} }), {})
    );
  }, [mediaChannels, setMediaFrequencies]);

  // Shuffle media channels if needed
  useEffect(() => {
    if (currentQuestion.randomize) {
      setShuffledMediaChannels(
        shuffleStatementsWithLastOption(mediaChannels, currentQuestion.lastOption)
      );
    } else {
      setShuffledMediaChannels(mediaChannels);
    }
  }, [mediaChannels, currentQuestion.randomize, currentQuestion.lastOption]);

  // Handle input changes for dropdown, input, and checkbox
  const handleInputChange = (channelId, fieldType, value) => {
    setMediaFrequencies((prev) => ({
      ...prev,
      [channelId]: {
        ...prev[channelId],
        [fieldType]: value,
      },
    }));

    if (handleMultiChange) {
      const formattedKey = `${channelId}_${fieldType}`;
      const formattedValue = value;
      handleMultiChange(formattedKey, formattedValue);
    }
  };

  // Log or process the response in the desired format whenever mediaFrequencies changes
  useEffect(() => {
    const response = Object.entries(mediaFrequencies).reduce((acc, [channelId, values]) => {
      Object.entries(values).forEach(([fieldType, value]) => {
        const formattedKey = `${channelId}_${fieldType}`;
        acc[formattedKey] = value;
      });
      return acc;
    }, {});

    console.log("Response Format:", response);
    // Process or save the response here if needed
  }, [mediaFrequencies]);

  if (!mediaChannels.length) {
    return <Text>No data available for this question.</Text>;
  }

  return (
    <Box p={4}>
      <Box
        p={6}
        borderWidth={1}
        borderRadius="md"
        boxShadow="md"
        maxWidth="90vw"
        width="100%"
        overflowX="auto"
      >
        <FormControl mb={4}>
          <Box overflowX="auto">
            <Table variant="simple" size={{ base: "sm", md: "md" }}>
              <Thead>
              <Tr>
    {currentQuestion.labels.map((label, index) => (
      <Th key={index} fontSize={{ base: "sm", md: "md" }} textAlign="center">
        {label.label}
      </Th>
    ))}

                </Tr>
              </Thead>
              <Tbody>
  {shuffledMediaChannels.map((channel) => (
    <Tr key={channel.id}>
      {currentQuestion.labels.map((label, index) => {
        const fieldKey = label.key; // Use the key for field identification
        const columnLabel = label.label; // Use the label for display

        if (index === 0) {
          // First column for the question or statement
          return (
            <Td key={fieldKey} fontSize={{ base: "sm", md: "md" }}>
              {channel.label}
            </Td>
          );
        }

        // Other columns for input fields
        return (
          <Td key={fieldKey} textAlign="center">
            <Input
              placeholder={`Enter ${columnLabel.toLowerCase()}`}
              value={mediaFrequencies[channel.id]?.[fieldKey] || ""}
              onChange={(e) =>{
                const newValue = e.target.value.slice(0, label.inputLimit);
                handleInputChange(channel.id, fieldKey, newValue)
              }
               
              }
            />
          </Td>
        );
      })}
    </Tr>
  ))}
</Tbody>

            </Table>
          </Box>
        </FormControl>
      </Box>
    </Box>
  );
};

export default MatrixInput;
