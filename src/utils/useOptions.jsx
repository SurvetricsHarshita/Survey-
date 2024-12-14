import { useState } from "react";

function useOptions() {
  const [filteredOptions, setFilteredOptions] = useState([]);

  function isOptions(question, dependOn,  optionsRemove,allOptions, storedData) {
    const questionHandlers = {
      9.12: () => handle912(dependOn, allOptions, storedData,optionsRemove),
      S6a:() => handleDynamicFilter(dependOn, allOptions, storedData,optionsRemove)
    };

    // Check if there's a handler for the current question
    if (questionHandlers[question]) {
      const result = questionHandlers[question]();
      if (result) {
        setFilteredOptions(result);
      }
      return result;
    }

    // Default: return all options if no handler exists
    setFilteredOptions(allOptions);
    return allOptions;
  }

  function handleDynamicFilter(dependOn, allOptions, storedData, optionsRemove) {
    // Check if any dependency condition is met for multiple questions
    const shouldKeepOptions = dependOn.some((dependency) => {
      const storedAnswer = storedData[dependency.question];
      
      // If there's a stored answer and it matches any of the dependency options
      return (
        storedAnswer &&
        dependency.options.some((option) => storedAnswer.includes(option))
      );
    });
  
    // If dependencies are met, return options that are not removed
    if (shouldKeepOptions) {
      const filteredOptions = allOptions.filter(option => !optionsRemove.includes(option.code));
      return filteredOptions;
    } else {
      // Return all options if dependencies are not met
      return allOptions;
    }
  }
  function handle912(dependOn, allOptions, storedData, optionsRemove = []) {
    // Extract Q7_a from storedData
    const selectedCodes = storedData["9.11"];
    console.log(selectedCodes)
    // Ensure Q7_a exists and is an array
    if (!Array.isArray(selectedCodes)) {
      return [];
    }
  
    // Filter allOptions to return only those matching the codes in Q7_a
    return allOptions.filter((option) => selectedCodes.includes(option.code));
  }
  
  return { isOptions, filteredOptions };
}

export default useOptions;
