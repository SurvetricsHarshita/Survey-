let terminationReason = "";

function useSurveyTermination() {
  function isTerminate(question, answer, terminationCodes, storedData = {}) {

    
    const questionHandlers = {
      QConsent: () => radioHandler(answer, terminationCodes),
      Introduction: () => radioHandler(answer, terminationCodes),

      9.18: () => handleQ918(answer, storedData),
     

    };

    const handler = questionHandlers[question];
    if (handler) {
      const result = handler();
      if (result) {
        terminationReason = `Survey terminated for ${question} with answer: ${answer}`;
      }
      return result;
    }

    return false;
  }
  function handleQ918(answer,storedData) {
    const sevenOne=storedData["7.1"]
    
        if (sevenOne == "1" ) {
          return false;
        }
        return true;
      }
  // Default handler for simple termination code checks for radio
  function radioHandler(answer, terminationCodes) {
    return terminationCodes.includes(answer);
  }

  
    
    
    


 


  
  
 


  return { isTerminate, terminationReason };
}

export default useSurveyTermination;
