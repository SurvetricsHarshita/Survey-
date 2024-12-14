
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import NextButton from "../components/atoms/NextButton";
import PreviousButton from "../components/atoms/PreviousButton";
import RespondentDemographic from "./RespondentDemographic";

import {
  getIndianTime,
  othersPlaceholders,
  othersSpecify,
  sendBlobToBackend,
  noneValues,optionforShow
} from "../utils/constant";

import InputQuestion from "../components/Questions/InputQuestion";
import MultiChoiceQuestion from "../components/Questions/MultiChoiceQuestion";
import RadioQuestion from "../components/Questions/RadioQuestion";
import products from "../components/translationFiles/QuestionsMapping/English";
import useAsk from "../utils/useAsk";
import useSurveyTermination from "../utils/useSurveyTermination";
import RatingQuestion from "./../components/Questions/RatingQuestion";

import RatingSlider from "../components/Questions/RatingSlider";

import { submitDataToAPI } from "../utils/submitDataToAPI";

import SelfieCapture from "../components/atoms/SelfieCapture";
import MatrixInput from "../components/Questions/MatrixInput";
import Quota from "../components/Questions/Quota";
import RankingQuestion from "../components/Questions/RankingQuestion";
import SegmentQuestion from "../components/Questions/SegmentQuestion";
import MultiInput from "../components/Questions/MultiInput";
import SelectLanguage from "../components/atoms/SelectLanguage";
import hindi from "../components/translationFiles/QuestionsMapping/hindi";
import Q9Consent from "../components/Questions/Q9Consent";
import Introduction from "../components/atoms/Introduction";
import InputRadio from "../components/Questions/InputRadio";
import marathi from "../components/translationFiles/QuestionsMapping/marathi";
import assamese from "../components/translationFiles/QuestionsMapping/assamese";



function QuestionForm() {
  const { Section1, Section2 ,Section3} = products || {}; 
  const { Section1: HiSection1, Section2: HiSection2,Section3: HiSection3 } = hindi || {}; 
  const { Section1:MiSection1, Section2: MiSection2,Section3: MiSection3 } =marathi|| {}; 
  const { Section1:AssSection1, Section2: AssSection2,Section3: AssSection3 } =assamese|| {}; 
  // Add fallback to prevent destructuring null
  // Add fallback to prevent destructuring null
const { isOpen, onOpen, onClose } = useDisclosure();
const [isTerminating, setIsTerminating] = useState(false);
  const [sliderMoved, setSliderMoved] = useState(false);
  const navigate = useNavigate();
  const [sectionIndex, setSectionIndex] = useState(0);
  // Default is English
  const [language, setLanguage] = useState("en");
  const [sections, setSections] = useState([Section1,Section2,Section3]); // Default is English
  const [loading, setLoading] = useState(true);
  const [nccs, setNccs] = useState();
  const [isOther, setOther] = useState(false);
  const [multi, setMulti] = useState(0);
  const [terminate, setTerminate] = useState(false);
  const [ask, setAsk] = useState(false);
  const [responses, setResponses] = useState({});
  const [storedData, setStoredData] = useState({});
  const [isSubmitting,setSubmiiting]=useState(false)
  const table = [
    ["E3", "E2", "E2", "E2", "E2", "E1", "D2"], 
    ["E2", "E1", "E1", "E1", "D2", "D2", "D2"], 
    ["E1", "E1", "D2", "D2", "D1", "D1", "D1"], 
    ["D2", "D2", "D1", "D1", "C2", "C2", "C2"], 
    ["D1", "C2", "C2", "C1", "C1", "B2", "B2"], 
    ["C2", "C1", "C1", "B2", "B1", "B1", "B1"], 
    ["C1", "B2", "B2", "B1", "A3", "A3", "A3"],
    ["C1", "B1", "B1", "A3", "A3", "A2", "A2"],
    ["B1", "A3", "A3", "A3", "A2", "A2", "A2"],
    ["B1", "A3", "A3", "A2", "A2", "A1", "A1"]
  ];
  // const table = [
  //   ["E3", "E2", "E2", "E2", "E2", "E1", "D2"], 
  //   ["E2", "E1", "E1", "E1", "D2", "D2", "D2"], 
  //   ["E1", "E1", "D2", "D2", "D1", "D1", "D1"], 
  //   ["D2", "D2", "D1", "D1", "C2", "C2", "C2"], 
  //   ["D1", "C2", "C2", "C1", "C1", "B2", "B2"], 
  //   ["C2", "C1", "C1", "B2", "B1", "B1", "B1"], 
  //   ["C1", "B2", "B2", "B1", "A3", "A3", "A3"],
  //   ["C1", "B1", "B1", "A3", "A3", "A2", "A2"],
  //   ["B1", "A3", "A3", "A3", "A2", "A2", "A2"],
  //   ["B1", "A3", "A3", "A2", "A2", "A1", "A1"]
  // ];

  const [mediaFrequencies, setMediaFrequencies] = useState({});
  const [sliderValue, setSliderValue] = useState(3);
  useEffect(() => {
    window.addEventListener("beforeunload", alertUser);
    return () => {
      window.removeEventListener("beforeunload", alertUser);
    };
  }, []);
  const alertUser = (e) => {
    e.preventDefault();
    e.returnValue = "";

    const email = localStorage.getItem("email");
    localStorage.clear();
    if (email) {
      localStorage.setItem("email", email);
    }
    localStorage.removeItem("ProductsTest");
    navigate("/survey");
  };
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("ProductsTest")) || [];
    setResponses(storedData);
    setStoredData(storedData);

 
    // Get selected language from localStorage or default to English
    const selectedLanguage =
      JSON.parse(localStorage.getItem("selectedLanguage")) || "en";
    setLanguage(selectedLanguage);
  }, []);
  useEffect(() => {
    const selectedLanguage =
      JSON.parse(localStorage.getItem("selectedLanguage")) || "en";
    setLanguage(selectedLanguage);
  }, []);
  useEffect(() => {


    setLoading(true); // Set loading to true when language changes
 const selectedLanguage =
      JSON.parse(localStorage.getItem("selectedLanguage")) || "en";
    setLanguage(selectedLanguage);
    switch (language) {
      case "en":
        setSections([Section1, Section2,Section3]);
        break;
        case "hi":
          setSections([
            HiSection1,
            HiSection2,
            HiSection3
          ]);
        break;
        case "mar":
          setSections([
            MiSection1,
            MiSection2,
            MiSection3
          ]);
        break;
        case "ass":
          setSections([
            AssSection1,
            AssSection2,
            AssSection3
          ]);
        break;
      default:
        setSections([Section1, Section2,Section3]);; // Default to English if no match
        break;
    }

    setLoading(false); 
  }, [language]);

  const questions = loading
    ? []
    : [...Object.values(sections[0]),...Object.values(sections[1]),
      ...Object.values(sections[2])]

  const [isLoading, setIsLoading] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [recordedBlob, setRecordedBlob] = useState(null);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [otherInput, setOtherInput] = useState(""); // State to hold "Other" input
  const [demographicAnswered, setDemographicAnswered] = useState(false);
  const { isTerminate } = useSurveyTermination();
  const { isAsk } = useAsk();
  // useEffect(() => {
  //   const storedData = JSON.parse(localStorage.getItem("ProductsTest")) || [];
  //   setResponses(storedData);

  //   const selectedLanguage =
  //     JSON.parse(localStorage.getItem("selectedLanguage")) || "en";
  //   setLanguage(selectedLanguage);
  // }, []);

  useEffect(() => {
    const existingData = JSON.parse(localStorage.getItem("ProductsTest")) || {};

    const updatedData = { ...existingData, ...responses };

    setStoredData(updatedData);

    localStorage.setItem("ProductsTest", JSON.stringify(updatedData));

    
  }, [responses]);

  useEffect(() => {
    // Trigger the recording logic only when demographicAnswered is true
    if (demographicAnswered && mediaRecorder) {
      // Only execute if the mediaRecorder exists
      if (mediaRecorder.state === "recording") {
        mediaRecorder.stop(); // Stop recording if it's currently recording
      
        mediaRecorder.start(); 
      } else if (mediaRecorder.state === "inactive") {
        mediaRecorder.start();
      }
    }
  }, [demographicAnswered, mediaRecorder]);
  //audio
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        const recorder = new MediaRecorder(stream);
        setMediaRecorder(recorder);

        recorder.ondataavailable = (e) => {
          setRecordedBlob(e.data);
        };
      })
      .catch((error) => console.error("Error accessing media devices:", error));
  }, []);

  const handleResponseChange = (key, value, index) => {
    let keyForOtherSpecify = "";
    // alert(value)
    // Loop through options and find the "Other" option
    currentQuestion.options.forEach((option, idx) => {
      // alert(option.label)
      if (othersSpecify.includes(option.label)) {

        // alert(option.label)
        keyForOtherSpecify = option.code; // Ensure this maps to the correct value
      }
    });

    // Check if the selected value is the "Other" option and update state
    setOther(value === keyForOtherSpecify);

    if (currentQuestion.termination) {
      const terminate = isTerminate(
        currentQuestion.number,
        value,
        currentQuestion.terminationCodes,
        storedData
      );
      setTerminate(terminate);
    }
    if (currentQuestion.checkAsk) {
      const display = isAsk(currentQuestion.number, value, storedData);
      setAsk(display);
    }

    // Update responses state
    setResponses((prevResponses) => {
      const updatedResponses = { ...prevResponses, [key]: value };

      // If "Other" option is selected, clear the "other" input value
      if (othersSpecify.includes(value)) {
        setOtherInput("");
      } else if (keyForOtherSpecify && value === keyForOtherSpecify) {
        setOtherInput("");
      }

      return updatedResponses; // Return updated responses object
    });
  };

  const handleResponseInput = (key, value) => {
    // Create a new responses object based on the previous state
    setResponses((prevResponses) => {
      const updatedResponses = { ...prevResponses, [key]: value }; // Update the specific response

      if (currentQuestion.termination) {
        const terminate = isTerminate(
          currentQuestion.number,
          value,
          currentQuestion.terminationCodes
        );
        setTerminate(terminate);
      }
      if (currentQuestion.checkAsk) {
        const display = isAsk(currentQuestion.number, storedData);
        setAsk(display);
      }
      if (othersSpecify.includes(value)) {
        // If "Others" is selected in any language, keep the previous input if available
        updatedResponses[`${key}_other`] = otherInput;
        // setOtherInput(prevResponses[key] || "");
      } else {
        delete updatedResponses[`${key}_other`];
        // Reset "Other" input if a non-"Others" option is selected
        setOtherInput("");
      }
      return updatedResponses; // Return the updated responses object
    });
  };

  const handleCheckboxChange = (key, values) => {
 
    const keyValue = key;
    let keyForOtherSpecify = "";
  
    const currentQuestion = questions[currentQuestionIndex];
    const maxSelections = currentQuestion.maxSelections || 0;
  
    if (maxSelections > 0) {
      setMulti(values.length);
    }
    setMulti(values.length);
  
    // Identify the key for "Others (please specify)" and "None"
    currentQuestion.options.forEach((option) => {
      if (othersSpecify.includes(option.label)) {
        keyForOtherSpecify = option.code;
      }
      
     
    });
    const noneSelectedKeys = currentQuestion.options
    .filter((option) => noneValues.includes(option.label))
    .map((option) => option.code);
    // Check if "None" is selected
    const selectedNoneValues = values.filter((value) => noneSelectedKeys.includes(value));
   
    if (selectedNoneValues.length > 0) {
      values = selectedNoneValues; // Keep only "None" values
    } else {
      // Ensure "None" values are not selected with other options
      values = values.filter((value) => !noneSelectedKeys.includes(value));
    }
    
  
    // Check if "Others (please specify)" is selected
    const isOtherSelected = values.includes(keyForOtherSpecify);
    setOther(isOtherSelected);
  
    if (currentQuestion.termination) {
      const terminate = isTerminate(
        currentQuestion.number,
        values,
        currentQuestion.terminationCodes
      );
      setTerminate(terminate);
    }
  
    if (currentQuestion.checkAsk) {
      const display = isAsk(currentQuestion.number, storedData);
      setAsk(display);
    }
  
    // Update responses
    if (isOtherSelected) {
      setResponses((prev) => ({
        ...prev,
        [keyValue]: values, // Save the selected values
        [`${keyValue}_other`]: otherInput, // Save the "other" input under a unique key
      }));
    } else {
      setResponses((prev) => {
        // Remove "Others" input if not selected
        const updatedResponses = { ...prev, [keyValue]: values };
        delete updatedResponses[`${keyValue}_other`];
        return updatedResponses;
      });
    }
  };
  

  const handleOtherInputChange = (event) => {
    const newValue = event.target.value;
    setOtherInput(newValue);

    setResponses((prevResponses) => ({
      ...prevResponses,
      [`${currentQuestion.number}_other`]: newValue,
    }));
  };

  const handleNext = async () => {





    
    if (currentQuestion.autoCodeQuestion) {


  setResponses((prev) => {
        const updatedResponses = { ...prev };
        
        // Retrieve stored data from localStorage
        const storedData = JSON.parse(localStorage.getItem('ProductsTest')) || {};
        const selectedCode = prev[currentQuestion.number]; // assuming the selected code is saved in prev[currentQuestion.number]
    
        if (currentQuestion.number === "Q2_c") {
          // Get Q2_c value from prev and Q2_b from storedData
          const Q2_c = storedData["Q2_c"];
          const Q2_b = storedData["Q2_b"];
          
          // Ensure Q2_b is a valid number (it might be a string)
          const Q2_bValue = parseInt(Q2_b, 10); // Convert Q2_b to a number
          
          // Calculate the row index based on Q2_c length
          let row = Q2_c.length ;
          if (row >= 9) row = 9; // Ensure the row does not exceed 9
          
          // Fetch the correct value for NCCS based on the row and Q2_b
          const nccsValue = table[row][Q2_bValue - 1];  // Adjust index correctly
        
          // Update the NCCS value in state
          setNccs(nccsValue); // Assuming `setNccs` is a state update function
        
          // Update storedData values with the new NCCS value
          updatedResponses['NCCS'] = nccsValue; // Correct assignment here
          updatedResponses['Q2d'] = nccsValue;  // Adjusting Q2d value as well
          
          storedData['NCCS'] = nccsValue;
          storedData['Q2d'] = nccsValue;
        
          // Save updated data to localStorage
          localStorage.setItem('ProductsTest', JSON.stringify(storedData));
        
        } else {
          // Handle the case for other selected codes (not Q2_c)
          if (selectedCode) {
            const response = currentQuestion.codes[selectedCode];
            if (response) {
              storedData[currentQuestion.autoCodeQuestionVar] = response.save; // Save the mapped value to localStorage
              localStorage.setItem('ProductsTest', JSON.stringify(storedData));
            }
          }
        }
    
        return updatedResponses;
      })

    }
   
    
    
      
     
    if (terminate) {
      alert("terminated");
      // onOpen()
      // navigate("/terminate")
      navigate("/submit", { state: { msg: "terminated" } });
      setTerminate(false);
    }
    if (!demographicAnswered) {
      setDemographicAnswered(true);
      return;
    }

    mediaRecorder.stop();
    //audio
    if (mediaRecorder && mediaRecorder.state !== "inactive") {
      mediaRecorder.stop(); // Stop recording when clicking 'Next'
      
    }
    if (currentQuestion.audio && recordedBlob) {
      setIsLoading(true);
      const fileUrl = await sendBlobToBackend(recordedBlob);
      setIsLoading(false);

      setResponses((prevResponses) => ({
        ...prevResponses,
        [`${currentQuestion.number}_rec`]: fileUrl, // Save the file URL to the responses
      }));
    }


   


    if (!isOther) {
      setResponses((prev) => {
        const updatedResponses = { ...prev };
    delete updatedResponses[`${currentQuestion.number}_other`]; // Clean up "other" input
   

    const storedData = JSON.parse(localStorage.getItem('ProductsTest')) || {};
    delete storedData[`${currentQuestion.number}_other`];
    localStorage.setItem('ProductsTest', JSON.stringify(storedData));

    return updatedResponses;
      });
    }
    setOther(false);
    if (currentQuestionIndex < questions.length - 1) {
      // setCurrentQuestionIndex((prev) => prev + 1);
      mediaRecorder.start();
      mediaRecorder.onstart = () => {
        // console.log("Recording started successfully.");
      };
      // Start recording for the next question
    } else if (sectionIndex < sections.length - 1) {
      setSectionIndex(sectionIndex + 1);
      setCurrentQuestionIndex(0);
      setOtherInput("");
    }

    

    if (currentQuestion.checkAsk && ask) {
      // Create a shallow copy of the current responses
      setResponses((prev) => {
        // Create a copy of the current responses
        const updatedResponses = { ...prev };
      
        // Calculate the range of skipped questions
        const startIndex = currentQuestionIndex + 1;
        const endIndex = currentQuestionIndex + (currentQuestion.nextStep || 2);
      
        // Remove responses for skipped questions
        for (let i = startIndex; i <= endIndex; i++) {
          const skippedQuestionKey = questions[i]?.number;
          if (updatedResponses[skippedQuestionKey]) {
            // console.log(`Deleting response for skipped question: ${skippedQuestionKey}`);
            delete updatedResponses[skippedQuestionKey];
            delete updatedResponses[`${skippedQuestionKey}_other`]; // Clean up "other" input if applicable
          }
        }
      
        // Update the localStorage 
        const storedData = JSON.parse(localStorage.getItem("ProductsTest")) || {};
        for (let i = startIndex; i <= endIndex; i++) {
          const skippedQuestionKey = questions[i]?.number;
          if (storedData[skippedQuestionKey]) {
            delete storedData[skippedQuestionKey];
            delete storedData[`${skippedQuestionKey}_other`]; // Clean up "other" input in storage
          }
        }
        localStorage.setItem("ProductsTest", JSON.stringify(storedData));
      
  
      
        // Return the updated responses to update the state
        return updatedResponses;
      });
      if (currentQuestion.nextStep && ask) {
        setCurrentQuestionIndex((prev) => prev + currentQuestion.nextStep);
      } else {
        setCurrentQuestionIndex((prev) => prev + 2);
      }
      return;
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
    setOtherInput("");

    

    setAsk(false);
    setMediaFrequencies({});
    setSliderMoved(false)
    // setDisable(true)
  };

  // setMulti(1)
  const handlePrevious = () => {
    let includesArray = ["2.1", "4.1", "5.1", "5.10", "5.13", "8.1","9.10","1.16","2.1"];
    if (includesArray.includes(currentQuestion.number)) {
      setCurrentQuestionIndex((prevIndex) => {
        let newIndex = prevIndex;

        // Loop to find the previous question with a response
        while (newIndex > 0) {
          newIndex -= 1; // Decrement the index
          const prevQuestionKey = questions[newIndex]?.number;

          // Break the loop if a response is found for the question
          if (responses[prevQuestionKey]) {
            break;
          }

          // If no response and index reaches 0, exit the loop
          if (newIndex === 0) {
            break;
          }
        }

        return newIndex; // Update to the new index
      });
    } else {
      setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    }

    // }

    // Reset other global states or perform cleanup
    setSliderMoved(false);
    setOther(false);
  };

  const handleSubmit = async () => {
    setSubmiiting(true)
    // Get the current time in IST
    const end = getIndianTime(); // Function to get Indian Standard Time
    const endDate = `${end.getDate()}/${end.getMonth() + 1}/${end.getFullYear()}`; // Format: DD/MM/YYYY
    const endTime = end.toLocaleTimeString('en-IN'); // Format: hh:mm:ss am/pm
  
    // Retrieve existing data from localStorage
    const existingData = JSON.parse(localStorage.getItem("ProductsTest")) || {};
    const startTimeDate = existingData.startDate
    const startTimeStr = existingData.startTime
    ;

    
    if (startTimeDate && startTimeStr) {
      // Convert start time to Date object
      const [day, month, year] = startTimeDate.split('/');
      const formattedDate = `${month}/${day}/${year}`; // Format: MM/DD/YYYY
      const startTimeFull = `${formattedDate} ${startTimeStr}`; 
      const startTime = new Date(startTimeFull);
      function formatDuration(seconds) {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = Math.floor(seconds % 60);
        return `${hrs}:${mins}:${secs}`;
    }
      // Calculate survey duration in seconds
      const surveyDuration = Math.floor((end.getTime() - startTime.getTime()) / 1000);
  
      // Add end time and duration to the existing data
      existingData.endTime =   endTime
      existingData.endDate = endDate

      existingData.duration = formatDuration(surveyDuration);

       // Duration in seconds
    } else {
      console.error("Start time data is missing!");
      // return;
    }
  
   
    // Update and store the data in localStorage
    const updatedProductTest = existingData
    localStorage.setItem("ProductsTest", JSON.stringify(updatedProductTest));
  
    // Preserve the email in localStorage
    // const email = localStorage.getItem("email");
    // // localStorage.clear();
    // if (email) {
    //   localStorage.setItem("email", email);
    // }
  
    // Navigate to the submit page
    // navigate("/submit", { state: { msg: "submit" } });
  localStorage.clear()
    // Submit data to the API

    
    const { success, message } = await submitDataToAPI(updatedProductTest);
    setSubmiiting(false)
    if (success) {
      navigate("/submit", { state: { msg: "submit" } });
      localStorage.clear()
    } else {
       
      // console.log(message); // Show error message if submission fails
    }
  };
  //Terminate

  const handleTerminate = async () => {
    setIsTerminating(true);
    navigate("/terminate")
  };

  const currentQuestion = questions[currentQuestionIndex];

  const isNextButtonDisabled = () => {
    const currentResponse = responses[currentQuestion.number];
  
    if (!demographicAnswered) return false;
  
    // Email validation for Q8_cc
    if ( currentQuestion.type=="input" &&  currentQuestion.number === "Q8_cc") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
      if (currentResponse && !emailRegex.test(currentResponse)) {
        // alert("Please enter a valid email address."); // Show validation message
        return true; // Don't disable the button
      }
    }
    

    const storedData = JSON.parse(localStorage.getItem('ProductsTest')) || {};

   


    if (currentQuestion.type === "multiInput" && currentQuestion.number === "Q8_a") {
      let areFirstFieldsFilled = true;
    
      // Check for Q8_a specifically
      if (currentQuestion.number === "Q8_a") {
        // Validate that the first `currentQuestion.field` fields are filled
        areFirstFieldsFilled = currentQuestion.formFieldsStep1
          .slice(0, currentQuestion.field) // Take only the required number of fields
          .every(field => {
            const fieldValue = storedData[field.name]; // Retrieve value from storedData
            return (
              fieldValue && // Ensure fieldValue exists
              fieldValue.trim() !== "" && // Ensure fieldValue is not empty
              fieldValue.length === 10 && // Ensure it's exactly 10 digits
              /^[0-9]+$/.test(fieldValue) // Ensure it's numeric
            );
          });
    
        // If validation fails, keep "Next" disabled
        if (!areFirstFieldsFilled) {
          console.log("Validation failed for Q8_a. Ensure all fields are valid.");
          return true; // Keep the button disabled
        }
      }
    
      return !areFirstFieldsFilled; // Return whether the button should be disabled
    }
    
  

    // Validate all fields in `formFieldsStep1` for `multiInput`
    if (currentQuestion.type === "multiInput") {
      const areFirstFiveFieldsFilled = currentQuestion.formFieldsStep1
    .slice(0,currentQuestion.field) // Take only the first 5 fields
    .every(field => {
      const fieldValue = storedData[field.name]; // Retrieve the value from storedData
      return fieldValue && fieldValue.trim() !== ""; // Ensure it's not empty or undefined
    });
    
      // if (!areAllFieldsFilled) {
        // alert("Please fill all required fields before proceeding.");
        return !areFirstFiveFieldsFilled // Exit early if validation fails
      // }
    }

    if (currentQuestion.type === "multiInput") {
      // Check if all fields in `formFieldsStep1` are filled
      const areAllFieldsFilled = currentQuestion.formFieldsStep1
        .every(field => storedData[field.name]?.trim() !== "");
  
      return !areAllFieldsFilled; // Disable if any field is empty
    }
    
    
    if (currentQuestion.type === "InputRadio") {
      if (currentQuestion.type === "InputRadio") {

        const isUsingApollo=storedData["9.14_isUsingApollo"]
        const years=storedData["9.14_years"]
        const months=storedData["'9.14_months"]
        // If "Not using Apollo Tyres" is selected, allow proceeding
        if (isUsingApollo === '99') {
          return false; // Enabled
        } else if( years == '' || months == ''){
          return true
        }
        else{
          return false
        }
    
        
    
     
      
      }
   
  
    }
    
    if (currentQuestion.options && currentQuestion.type === "multi") {
      if (currentQuestion.maxSelections) {
        return (
          !currentResponse ||
          (isOther && !otherInput.trim()) ||
          multi !== currentQuestion.maxSelections ||
          multi === 0 // No selections
        );
      } else {
        return (
          !currentResponse || multi === 0 || (isOther && !otherInput.trim())
        );
      }
    }
  
    // Rate question handling
    if (currentQuestion.type === "rate") {
      return (
        !mediaFrequencies ||
        Object.values(mediaFrequencies).some((value) => value === "")
      
      );
    }

    
    if (currentQuestion.type === "rank") {
      return (
        !mediaFrequencies ||
        Object.values(mediaFrequencies).some((value) => value === "")
      );
    }
    if (currentQuestion.type === "RatingSlider" || currentQuestion.type === "segment") {
      return !sliderMoved;
    }
    if (currentQuestion.type == "Introduction") {
      return false
     
    }
    // Radio question handling with "Other" option
    if (currentQuestion.type === "radio" && isOther) {
      return !otherInput.trim(); // Ensure "Other" input is not empty
    }
  
    if (currentQuestion.type === "Quota" || currentQuestion.type === "Q9Consent") {
      return false; // Button not disabled for these types
    }
    if (currentQuestion.type === "image") {
      return true; // Button always disabled for "image"
    }
    // if (currentQuestion.type === "multiInput") {
    //   return false; // Button not disabled for multiInput
    // }
  
    // Default case for unanswered questions
    return !currentResponse && !otherInput.trim();
  };
  

  // const handleChange = (mediaId, frequency) => {

  //   setMediaFrequencies((prevFrequencies) => ({
  //     ...prevFrequencies,
  //     [mediaId]: frequency,
  //   }));

   
   
    
  //   setResponses((prevResponses) => ({
  //     ...prevResponses,
  //     [mediaId]: frequency,

  //   }))
  //   ;
  //   const storedData = JSON.parse(localStorage.getItem("ProductsTest")) || [];
  //   if (currentQuestion.termination) {
  //     const terminate = isTerminate(
  //       currentQuestion.number,
  //       "2345",
  //       currentQuestion.terminationCodes,
  //       storedData
  //     );
  //     setTerminate(terminate);
  //   }
   
  // };
  
  const handleChange = async (mediaId, frequency) => {
    // Update `mediaFrequencies`
    setMediaFrequencies((prevFrequencies) => ({
      ...prevFrequencies,
      [mediaId]: frequency,
    }));
  
    // Compute updated responses and set it
    const updatedResponses = {
      ...responses,
      [mediaId]: frequency,
    };
    await setResponses(updatedResponses);
  
    // Fetch localStorage data
    const storedData =   JSON.parse(localStorage.getItem("ProductsTest")) || [];
  
    // Call termination logic with the updated responses
    if (currentQuestion.termination) {
      const terminate = isTerminate(
        currentQuestion.number,
        "2345", // Replace this with the correct value if needed
        currentQuestion.terminationCodes,
        storedData
      );
      setTerminate(terminate);
    }
  };
  
  const handleMultiChange = (mediaId, frequency) => {
    setMediaFrequencies((prevFrequencies) => ({
      ...prevFrequencies,
      [mediaId]: frequency,
    }));

    setResponses((prevResponses) => ({
      ...prevResponses,
      [mediaId]: frequency,
    }));
  };


  
  const handleMultiInput = (e) => {
    const { name, value } = e.target;


    setResponses((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };



  // Update the language state and immediately update localStorage
  const handleLanguageSelect = (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    
  
    localStorage.setItem('selectedLanguage', JSON.stringify(selectedLanguage)); // Store French as the selected language

  };

  function handleCancel(){
    setCurrentQuestionIndex((prev) => prev - 1);
    onClose()
  }

  return (
    <Box p={{ base: 3, md: 5 }} mb={{ base: 2, md: 4 }} fontSize={{ base: '14px', md: '20px' }}>
      {!demographicAnswered ? (
        <RespondentDemographic
          setResponses={setResponses}
          onComplete={() => setDemographicAnswered(true)}
          handleNext={handleNext}
          language={language}
        />
      ) : (
        <FormControl mb={4} >
{/* subLabel */}
        {/* <SelectLanguage handleLanguageSelect ={handleLanguageSelect }/> */}
          <Text fontSize={{ base: '18px', md: '20px' }} fontWeight={700} mb={30}>
            {currentQuestion.section}
          </Text>
          {currentQuestion.subLabel}
          <Text fontSize="16px" fontWeight={700} mb={3}>
  {/* Display response for question 9.6 */}
  {currentQuestion.number === "9.6" ? responses["9.6a"] : ""}
  
  {/* Determine the actual answer for question 9.23 */}
  {currentQuestion.number === "9.23" && (
  optionforShow.find(option => option.code === responses["9.22"])?.label || ""
  )}
</Text>

          <FormLabel fontSize={{ base: '16px', md: '20px' }} mb={30} >
            {" "}
            {currentQuestion.number} {currentQuestion.question} 

            {}
            <br />


            
          </FormLabel>
          <Text color="green.500" fontWeight={500}>
            {currentQuestion.instruction}

         <br />
            {currentQuestion.Label}
          </Text>

          <FormLabel fontSize="md" mt={3}> {currentQuestion.label}</FormLabel>

          {/* Render components based on question type */}
          {currentQuestion.type === "multi" ? (
            <MultiChoiceQuestion
              currentQuestionIndex={currentQuestionIndex}
              currentQuestion={currentQuestion}
              responses={responses}
              handleCheckboxChange={handleCheckboxChange}
              othersSpecify={othersSpecify}
              othersPlaceholders={othersPlaceholders}
              otherInput={otherInput}
              handleOtherInputChange={handleOtherInputChange}
              
              isOther={isOther}
            />
          ) : currentQuestion.type === "radio" ? (
            <RadioQuestion
              currentQuestionIndex={currentQuestionIndex}
              currentQuestion={currentQuestion}
              responses={responses}
              handleResponseChange={handleResponseChange}
              othersSpecify={othersSpecify}
              othersPlaceholders={othersPlaceholders}
              otherInput={otherInput}
              handleOtherInputChange={handleOtherInputChange}
              
              isOther={isOther}
            />
          ):currentQuestion.type === "Introduction" ? (
            <Introduction
              currentQuestionIndex={currentQuestionIndex}
              currentQuestion={currentQuestion}
              responses={responses}
              
            />
          ): currentQuestion.type === "matrixInput" ? (
            <MatrixInput
            currentQuestionIndex={currentQuestionIndex}
            currentQuestion={currentQuestion}
            responses={responses}
            othersSpecify={othersSpecify}
            othersPlaceholders={othersPlaceholders}
            otherInput={otherInput}

            isOther={isOther}
            mediaChannels={currentQuestion.STATEMENTS}
            frequencies={currentQuestion.FREQUENCIES}
            // onRating={handleRating}
            handleMultiChange={handleMultiChange}
            setMediaFrequencies={setMediaFrequencies}
            mediaFrequencies={mediaFrequencies}
            number={currentQuestion.number}
            />
          ) : currentQuestion.type === "rate" ? (
            <RatingQuestion
              currentQuestionIndex={currentQuestionIndex}
              currentQuestion={currentQuestion}
              responses={responses}
              othersSpecify={othersSpecify}
              othersPlaceholders={othersPlaceholders}
              otherInput={otherInput}
              
              isOther={isOther}
              mediaChannels={currentQuestion.STATEMENTS}
              frequencies={currentQuestion.FREQUENCIES}
              // onRating={handleRating}
              handleChange={handleChange}
              setMediaFrequencies={setMediaFrequencies}
              mediaFrequencies={mediaFrequencies}
            />
          ) : // Spontaneous

          // segment
          currentQuestion.type === "RatingSlider" ? (
            <RatingSlider
              currentQuestionIndex={currentQuestionIndex}
              currentQuestion={currentQuestion}
              responses={responses}
           
              onPrevious={handlePrevious}
              onSubmit={handleNext}
              setMediaFrequencies={setMediaFrequencies}
             
              sliderValue={sliderValue}
              setSliderValue={setSliderValue}
              setSliderMoved={setSliderMoved}
             
              setResponses={setResponses}
            
 />
          ) : // Spontaneous

          // segment
          currentQuestion.type === "rank" ? (
            <RankingQuestion
            currentQuestionIndex={currentQuestionIndex}
              currentQuestion={currentQuestion}
              responses={responses}
              
              
       
              mediaChannels={currentQuestion.STATEMENTS}
              frequencies={currentQuestion.FREQUENCIES}

              handleChange={handleChange}
              setMediaFrequencies={setMediaFrequencies}
              mediaFrequencies={mediaFrequencies}
           
            />
          ) :currentQuestion.type === "InputRadio" ? (
            <InputRadio
            currentQuestionIndex={currentQuestionIndex}
              currentQuestion={currentQuestion}
              responses={responses}
              othersSpecify={othersSpecify}
              othersPlaceholders={othersPlaceholders}
              otherInput={otherInput}
              setResponses={setResponses }
              isOther={isOther}
              mediaChannels={currentQuestion.STATEMENTS}
              frequencies={currentQuestion.FREQUENCIES}
              // onRating={handleRating}
              handleChange={handleChange}
              setMediaFrequencies={setMediaFrequencies}
              mediaFrequencies={mediaFrequencies}
           
            />


            // multiInput
          ):currentQuestion.type === "Quota" ? (
            <Quota
            currentQuestionIndex={currentQuestionIndex}
              currentQuestion={currentQuestion}
              responses={responses}
              othersSpecify={othersSpecify}
              othersPlaceholders={othersPlaceholders}
              otherInput={otherInput}
              
              isOther={isOther}
              mediaChannels={currentQuestion.STATEMENTS}
              frequencies={currentQuestion.FREQUENCIES}
              // onRating={handleRating}
              handleChange={handleChange}
              setMediaFrequencies={setMediaFrequencies}
              mediaFrequencies={mediaFrequencies}
           
            />


            // multiInput
          ):currentQuestion.type === "multiInput" ? (
            <MultiInput
            currentQuestionIndex={currentQuestionIndex}
              currentQuestion={currentQuestion}
              responses={responses}
              
           handleMultiChange={handleMultiChange}
           setResponses={ setResponses}
              mediaChannels={currentQuestion.STATEMENTS}
              frequencies={currentQuestion.FREQUENCIES}
              onPrevious={handlePrevious}
              onSubmit={handleNext}
              setMediaFrequencies={setMediaFrequencies}
           
              sliderValue={sliderValue}
              setSliderValue={setSliderValue}
              setSliderMoved={setSliderMoved}
             
              formFieldsStep1={currentQuestion.formFieldsStep1}
              languageText={currentQuestion.languageText}
            />
          ): 
          currentQuestion.type === "segment" ? (
            <SegmentQuestion
            currentQuestionIndex={currentQuestionIndex}
              currentQuestion={currentQuestion}
              responses={responses}
              
           
 
              mediaChannels={currentQuestion.STATEMENTS}
              frequencies={currentQuestion.FREQUENCIES}
              onPrevious={handlePrevious}
              onSubmit={handleNext}
              setMediaFrequencies={setMediaFrequencies}
           
              sliderValue={sliderValue}
              setSliderValue={setSliderValue}
              setSliderMoved={setSliderMoved}
              setResponses={setResponses}
            />
          ): 
          currentQuestion.type === "Q9Consent" ? (
            <Q9Consent
            currentQuestionIndex={currentQuestionIndex}
              currentQuestion={currentQuestion}
              responses={responses}
              onPrevious={handlePrevious}
              onSubmit={handleNext}
           
 
              mediaChannels={currentQuestion.STATEMENTS}
              frequencies={currentQuestion.FREQUENCIES}
            
              setMediaFrequencies={setMediaFrequencies}
           
              sliderValue={sliderValue}
              setSliderValue={setSliderValue}
              setSliderMoved={setSliderMoved}
              setResponses={setResponses}
            />
          ):  currentQuestion.type === "image" ? (
            <SelfieCapture
            currentQuestionIndex={currentQuestionIndex}
              currentQuestion={currentQuestion}
              responses={responses}
              
              onPrevious={handlePrevious}
              onSubmit={handleNext}
           
       
              sliderValue={sliderValue}
              setSliderValue={setSliderValue}
              setSliderMoved={setSliderMoved}
              setResponses={setResponses}
         
            />
          ):(
            // Spontaneous
            <InputQuestion
              currentQuestionIndex={currentQuestionIndex}
              currentQuestion={currentQuestion}
              responses={responses}
              handleResponseInput={handleResponseInput}
            />
          )}
        </FormControl>
      )}

{demographicAnswered && (
  <Flex
    mt={10}
    justify="space-between"
    flexDirection={{ base: 'column', md: 'row' }}
    gap={4} // Add spacing between elements for smaller screens
  >
    {/* Previous Button */}
    <PreviousButton
      mr={{ base: 0, md: 2 }} // Margin adjustment for smaller screens
      w={{ base: '100%', md: 'auto' }} // Full width on smaller screens
      onPrev={
        currentQuestionIndex === 0
          ? () => setDemographicAnswered(false)
          : handlePrevious
      }
      isDisabled={currentQuestionIndex === 0}
    >
      Previous
    </PreviousButton>

    {/* Terminate Button */}
    {/* <Button
      colorScheme="red"
      bg="#e40a0a"
      w={{ base: '100%', md: 'auto' }} // Full width on smaller screens
      onClick={onOpen}
    >
      Terminate
    </Button> */}
    <Modal isOpen={isOpen}  onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm Termination</ModalHeader>
          <ModalBody>
            <Text>Are you sure you want to terminate? This action cannot be undone.</Text>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={handleCancel}>
              Cancel
            </Button>
            <Button
              colorScheme="red"
              bg="#e40a0a"
              ml={3}
              isLoading={isTerminating}
              onClick={handleTerminate}
            >
              Yes, Terminate
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    {/* Language Selector */}
    <SelectLanguage 
      handleLanguageSelect={handleLanguageSelect}
      w={{ base: '100%', md: 'auto' }} // Full width on smaller screens
    />

    {/* Next/Submit Buttons */}
    {currentQuestionIndex < questions.length - 1 ? (
      <NextButton
        onClick={handleNext}
        w={{ base: '100%', md: 'auto' }} // Full width on smaller screens
        isDisabled={isNextButtonDisabled() || isLoading}
      />
    ) : (
      <Button
        colorScheme="blue"
        bg="#319dcf"
        w={{ base: '100%', md: 'auto' }} // Full width on smaller screens
        onClick={handleSubmit}
        isDisabled={isNextButtonDisabled() || isSubmitting}
        
      >
        Submit
      </Button>
    )}
  </Flex>
)}

    </Box>
  );
}




export default QuestionForm;




// export default QuestionForm;
