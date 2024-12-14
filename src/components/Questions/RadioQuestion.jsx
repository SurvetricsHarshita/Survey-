import { Flex, Input, Radio, RadioGroup, Stack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { shuffleArrayWithFixed } from '../../utils/constant';
import useOptions from '../../utils/useOptions';

function RadioQuestion({
  isOther,
  currentQuestion,
  responses,
  handleResponseChange,
  othersSpecify,
  othersPlaceholders,
  otherInput,
  handleOtherInputChange,
  currentQuestionIndex,
}) {
  const [options, setOptions] = useState(currentQuestion.options); // Initialize with current question options
  const { isOptions } = useOptions();
  const [storedData, setStoredData] = useState({});
  const [isLoading, setIsLoading] = useState(false); // Loader state

  useEffect(() => {
    setIsLoading(true); // Start loader

    const existingData = JSON.parse(localStorage.getItem('ProductsTest')) || {};
    const updatedData = { ...existingData, ...responses };
    setStoredData(updatedData);

    let updatedOptions = [...currentQuestion.options];

    // Handle dependent options
    if (currentQuestion.optionsDependOn) {
      updatedOptions = isOptions(
        currentQuestion.number,
        currentQuestion.optionsDependOn,
        currentQuestion.optionsRemove,
        currentQuestion.options,
        updatedData
      );
    }

    // Handle randomization
    if (currentQuestion.randomize) {
      updatedOptions = shuffleArrayWithFixed(
        updatedOptions,
        currentQuestion.fixedCodes,
        currentQuestion.RandomizeOnce
      );
    }

    setOptions(updatedOptions); // Update options state
    setIsLoading(false); // End loader
  }, [
    currentQuestion, // Update when the current question changes
    ...(currentQuestion.RandomizeOnce ? [] : [responses]),
    currentQuestionIndex, // React to index changes
  ]);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div> // Loader UI
      ) : (
        <Flex>
          {/* Render all options in a single stack */}
          <Stack spacing={4} width="100%" maxWidth="800px">
            {options.map((option, idx) => (
              <RadioGroup
                key={idx}
                onChange={(value) =>
                  handleResponseChange(currentQuestion.number, value)
                }
                value={responses[currentQuestion.number] || ''}
              >
                <Radio value={option.code}>{option.label}</Radio>
              </RadioGroup>
            ))}

            {/* Input field for "Other (Specify)" */}
            {(isOther || othersSpecify.includes(responses[currentQuestion.number])) && (
              <Input
                width="300px"
                placeholder={
                  othersPlaceholders[responses[currentQuestion.number]] ||
                  'Please specify'
                }
                border={"1px solid"}
                value={otherInput}
                onChange={handleOtherInputChange}
                mt={4}
              />
            )}
          </Stack>
        </Flex>
      )}
    </>
  );
}

export default RadioQuestion;
