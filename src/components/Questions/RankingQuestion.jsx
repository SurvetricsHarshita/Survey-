import React, { useState, useEffect } from 'react';
import { Box, FormControl, Table, Thead, Tbody, Tr, Th, Td, Radio, RadioGroup } from '@chakra-ui/react';

// Shuffle function
const shuffleStatementsWithLastOption = (statements, lastOptionId) => {
  // Separate the lastOption
  const otherStatements = statements.filter((statement) => statement.id !== lastOptionId);
  const lastStatement = statements.find((statement) => statement.id === lastOptionId);

  // Shuffle the rest of the statements
  const shuffledStatements = [...otherStatements];
  for (let i = shuffledStatements.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledStatements[i], shuffledStatements[j]] = [shuffledStatements[j], shuffledStatements[i]];
  }

  // Add the lastOption at the end
  return lastStatement ? [...shuffledStatements, lastStatement] : shuffledStatements;
};

const RankingQuestion = ({ mediaChannels, frequencies, handleChange, setMediaFrequencies, mediaFrequencies, currentQuestion }) => {
  const [shuffledMediaChannels, setShuffledMediaChannels] = useState([]);

  useEffect(() => {
    setMediaFrequencies(
      mediaChannels.reduce((acc, channel) => ({ ...acc, [channel.id]: '' }), {})
    );
  }, [currentQuestion, mediaChannels]);

  useEffect(() => {
    if (currentQuestion?.randomize) {
      setShuffledMediaChannels(shuffleStatementsWithLastOption(mediaChannels, currentQuestion.lastOption));
    } else {
      setShuffledMediaChannels(mediaChannels); // Keep the original order if `randomized` is false
    }
  }, [mediaChannels, currentQuestion]);

  const handleFrequencyChange = (channelId, frequencyValue) => {
    // Ensure that only one channel is selected for each frequency
    const updatedMediaFrequencies = { ...mediaFrequencies };

    // If the frequency is being changed, first remove it from any other channel
    Object.entries(updatedMediaFrequencies).forEach(([id, value]) => {
      if (value === frequencyValue && id !== channelId) {
        updatedMediaFrequencies[id] = ''; // Unselect the frequency from other channels
      }
    });

    // Set the new frequency value for the selected channel
    updatedMediaFrequencies[channelId] = frequencyValue;

    // Update state
    setMediaFrequencies(updatedMediaFrequencies);
    handleChange(channelId, frequencyValue); // Ensure this is calling the proper handler to update parent state
  };
  // #F7FAFC
  return (
    <Box bg="" p={4}>
      <Box p={4} borderWidth={1} borderRadius='sm' boxShadow='sm' maxWidth="100vw" width="100%" overflowX="auto">
        <FormControl mb={4}>
          <Box overflowX="auto">
            <Table variant="simple" size={{ base: '10px', md: '12px' }}>
              <Thead>
                <Tr>
                  <Th fontSize={{ base: '10px', md: '10px' }} textAlign="center">
                    {currentQuestion.heading || 'Statements'}
                  </Th>
                  {frequencies.map((freq) => (
                    <Th key={freq.value} fontSize={{ base: '12px', md: '10px' }} textAlign="center">{freq.label}</Th>
                  ))}
                </Tr>
              </Thead>
              <Tbody>
                {shuffledMediaChannels.map((channel) => (
                  <Tr key={channel.id}>
                    <Td fontSize={{ base: '12px',  md: '13px'}}>{channel.label}</Td>
                    {frequencies.map((freq) => (
                      <Td key={freq.value} textAlign="center">
                        <RadioGroup
                          value={mediaFrequencies[channel.id] || ''}
                          onChange={(value) => handleFrequencyChange(channel.id, value)}
                        >
                          <Radio
                            value={freq.value}
                            borderColor="black"
                            borderWidth="1px"
                            _focus={{ boxShadow: 'outline' }}
                            size={{  sm: 'sm' , md: 'sm'}}
                          />
                        </RadioGroup>
                      </Td>
                    ))}
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

export default RankingQuestion;
