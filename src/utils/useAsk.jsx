let display = "";

function useAsk() {
  function isAsk(question, answer, storedData) {
    const questionHandlers = {
      S9e: () => handleS9e(answer, storedData),
      1.13: () => handleQ13(answer),
      3.7: () => handleQ37(answer, storedData),
      3.8: () => handleQ37(answer, storedData),
      4.2: () => handleQ37(answer, storedData),
      4.3: () => handleQ37(answer, storedData),
      5.1:() => handleQ37(answer, storedData),
      5.5:() => handleQ37(answer, storedData),
      "5.10":() => handleQ37(answer, storedData),
      5.11:() => handleQ511(answer, storedData),
      "1.15":() => handleQ37(answer, storedData),
      "1.16":() => handleQ37(answer, storedData),
      7.1: () => handleQ37(answer, storedData),
      "9.7(i)": () => handleQ37(answer, storedData),
      9.18: () => handleQ918(answer, storedData),
      9.19:() => handleQ37(answer, storedData),
      "E15.": () => handleE15(answer, storedData),
    };

    if (questionHandlers[question]) {
      const result = questionHandlers[question]();
      if (result) {
        display = `Survey terminated for ${question} with answer: ${answer}`;
      }
      return result;
    }
    return false;
  }

  function handleE15(answer, storedData) {
    console.log("hi", storedData);
    const s4aValue = storedData["1.5"] || "";
    console.log("hi", s4aValue);
alert("asd")
    if (s4aValue == "3" ) {
      return false;
    }
    return true;
  }
  function handleQ13(answer) {
    

    if (answer == "1" ) {
      return false;
    }
    return true;
  }
  function handleQ37(answer) {
    
console.log(answer)
    if (answer == "1" ) {
      return false;
    }
    return true;
  }
  function handleQ511(answer) {
    
    console.log(answer)
        if (answer != "1" ) {
          return false;
        }
        return true;
      }
  function handleS9e(answer, storedData) {
    console.log("hi", storedData);
    const s4aValue = storedData["S9e"] || "";
    console.log("hi", s4aValue);

    if (answer == "5" || answer == "6" || answer == "4") {
      return false;
    }
    return true;
  }
  function handleQ918(answer,storedData) {
    const sevenOne=storedData["7.1"]
    console.log(sevenOne)
    
    console.log(answer)
        if (answer == "1" ) {
          return false;
        }
        return true;
      }
  return { isAsk, display };
}

export default useAsk;
