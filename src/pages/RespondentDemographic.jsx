import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Flex,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NextButton from "../components/atoms/NextButton";
import PreviousButton from "../components/atoms/PreviousButton";
import { getIndianTime } from "../utils/constant";
import { formFieldsStep1, languageText } from "../utils/Respondent";

const RespondentDemographic = ({ handleNext, onComplete }) => {
  const [formData, setFormData] = useState({});
  const [language, setLanguage] = useState("en");
  const [error, setError] = useState("");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [isFormComplete, setIsFormComplete] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const subAreas = {
    Kolkata: [
      "Rammohan Roy Road",
      "Golf Green",
      "Northern Avenue",
      "Biren Roy Road",
      "South Sinthee Road",
      "Patuli",
      "S C Mallick Road(Sulekha)",
      "Lake Gardens",
      "Indra Biswas Road",
      "Ramgarh",
      "Poddar Nagar",
    ],
    Mumbai: [
      "Lokhandwala Complex",
      "Ashok Tower-Kalpataru",
      "Thakur Village",
      "Bhakti Park-Dosti Acres",
      "Old Cadel Road",
      "Shivaji Park",
      "Prarthana Samaj, Girgaon",
      "Union Park",
      "Versova",
      "Carter Road",
      "Hill Road",
      "NRI Complex-DPS School",
      "Utsav Chowk Road",
      "Malabar Hill",
      "Pedder Road",
      "Vasant Vihar",
    ],
    Delhi: [
      "Pachim Vihar",
      "IP Extension",
      "South Ex -Part 1",
      "GK -1",
      "Janakpuri",
      "Rajouri Garden",
      "Preet Vihar",
      "Malviya Nagar",
      "Indirapuram -Ghaziabad",
      "Nirwana Country Gurgaon",
      "South City Sec 59 Gurgaon",
      "Sec-22 Noida",
    ],
    Chennai: [
      "Chetpet",
      "KK Nagar",
      "Anna Nagar West",
      "Jafferkhanpet",
      "Saidapet",
      "Mandaveli",
      "Kotturpuram",
      "Kilpauk",
      "Nungambakkam",
      "Kolathur",
      "Shenoy Nagar",
      "West Mambalam",
      "Velachery",
      "Virugambakkam",
      "Mylapore",
    ],
    Hyderabad: [
      "P&T Colony",
      "Chaitnyapuri",
      "DD Colony",
      "Tarnaka",
      "Marredpally",
      "Begumpet",
      "Prakashnagar",
      "Kukatpally",
      "KPHB",
      "Himayatnagar",
      "Vanasthalipuram",
      "Banjara Hills",
      "Jubilee Hills",
      "HITEC City (Madhapur and Kondapur)",
      "Gachibowli",
      "Kokapet",
    ],
    Bangalore: [
      "Mathikere",
      "Sanjay Nagar",
      "Banasawadi",
      "R R Nagar",
      "Banashakari",
      "Nagarabavi",
      "Rajajinagar",
      "Koramagala",
      "Hosakerahalli",
      "Willson Garden",
      "Ulsoor",
      "Malleshwaram",
      "Jayanagar",
      "Sadashivanagar",
      "Indranagar",
    ],
  
  };

  useEffect(() => {
    requestMicrophonePermission();
    requestLocationPermission();
  }, []);

  useEffect(() => {
    validateForm();
  }, [formData]);

  const requestMicrophonePermission = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    } catch (err) {
      setError("Microphone access is required to proceed.");
    }
  };

  const requestLocationPermission = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        () => setError("Location is required to proceed.")
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const validateForm = () => {
    const requiredFields = [
      ...formFieldsStep1.map((field) => field.name),
      "TypeofRespondent",
      ...(formData.TypeofRespondent === "1" || formData.TypeofRespondent === "2"
        ? ["TypeofRespondentName"]
        : []),
      "City",
   
    ];

    const isComplete = requiredFields.every((field) => formData[field]?.trim());
    setIsFormComplete(isComplete);
  };

  const handleValidationError = (errorMessage) => {
    toast({
      title: "Validation Error",
      description: errorMessage,
      status: "error",
      duration: 3000,
      isClosable: true,
      position: "top-right",
    });
  };

  const handleSubmit = () => {
    if (error) {
      handleValidationError(error);
      return;
    }

    const respondentData = { ...formData, latitude, longitude };
    const start = getIndianTime();

    const existingData = JSON.parse(localStorage.getItem("ProductsTest")) || {};
    const updatedData = {
      ...existingData,
      ...respondentData,
      startTime: start.toLocaleTimeString("en-IN"),
      startDate: start.toLocaleDateString("en-IN"),
      language,
    };

    localStorage.setItem("ProductsTest", JSON.stringify(updatedData));
    handleNext();
  };

  const handlePrevious = () => {
    const email = localStorage.getItem("email");
    localStorage.clear();

    if (email) {
      localStorage.setItem("email", email);
    }
    navigate("/");
  };

  return (
    <Flex
      p={4}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      pl={{ base: "10", md: "4", lg: "6" }}
    >
      <Text fontSize="xl" fontWeight="bold" mb={9}>
      IDENTIFICATION DETAILS
      </Text>

      {error && (
        <Alert status="error" mb={4} width="100%">
          <AlertIcon />
          <AlertTitle mr={2}>Error:</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 2 }}
        spacing={4}
        width="100%"
        maxWidth="800px"
        mb={8}
      >
         
        {formFieldsStep1.map((field, index) => (
          <div key={index}>
            <FormLabel>{field.placeholder}:</FormLabel>
            <Input
              name={field.name}
              placeholder={field.placeholder}
              value={formData[field.name] || ""}
              onChange={handleChange}
              type={field.type || "text"}
            />
          </div>
        ))}
         <div>
          <FormLabel>Type of Respondent</FormLabel>
          <Select
            name="TypeofRespondent"
            value={formData.TypeofRespondent || ""}
            onChange={handleChange}
            focusBorderColor="black"
            borderColor="black"
            rounded="lg"
          >
            <option value="">Select</option>
            <option value="a">	Exposed with Apollo Tyres Foundation / designated NGO based health intervention</option>
            <option value="b">	Exposed with non-ATF based health intervention</option>
            {/* <option value="3">None</option> */}
          </Select>

          <FormLabel mt={4}>City</FormLabel>
          <Select
            name="City"
            value={formData.City || ""}
            onChange={handleChange}
            focusBorderColor="black"
            borderColor="black"
            rounded="lg"
          >
            <option value="">Select</option>
            {Object.keys(subAreas).map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </Select>

          {/* {formData.City && subAreas[formData.City] && (
            <>
              <FormLabel mt={4}>Sub-Area</FormLabel>
              <Select
                name="SubArea"
                value={formData.SubArea || ""}
                onChange={handleChange}
                focusBorderColor="black"
                borderColor="black"
                rounded="lg"
              >
                <option value="">Select</option>
                {subAreas[formData.City].map((area, index) => (
                  <option key={index} value={area}>
                    {area}
                  </option>
                ))}
              </Select>
            </>
          )} */}
        </div>
        {/* <div>
          <FormLabel>2.	Type of Respondent</FormLabel>
          <Select
            name="TypeofRespondent"
            value={formData.TypeofRespondent || ""}
            onChange={handleChange}
            focusBorderColor="black"
            borderColor="black"
            rounded="lg"
          >
            <option value="">Select</option>
            <option value="a">	Exposed with Apollo Tyres Foundation / designated NGO based health intervention</option>
            <option value="b">	Exposed with non-ATF based health intervention</option>
            {/* <option value="3">None</option> */}
          {/* </Select> */}

          {/* <FormLabel mt={4}>City</FormLabel>
          <Select
            name="City"
            value={formData.City || ""}
            onChange={handleChange}
            focusBorderColor="black"
            borderColor="black"
            rounded="lg"
          >
            <option value="">Select</option>
            {Object.keys(subAreas).map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </Select> */}

          {/* {formData.City && subAreas[formData.City] && (
            <>
              <FormLabel mt={4}>Sub-Area</FormLabel>
              <Select
                name="SubArea"
                value={formData.SubArea || ""}
                onChange={handleChange}
                focusBorderColor="black"
                borderColor="black"
                rounded="lg"
              >
                <option value="">Select</option>
                {subAreas[formData.City].map((area, index) => (
                  <option key={index} value={area}>
                    {area}
                  </option>
                ))}
              </Select>
            </>
          )} */}
        {/* </div> */} 
        {/* {(formData.TypeofRespondent === "1" || formData.TypeofRespondent === "2") && (
          <div>
            <FormLabel>Enter Name:</FormLabel>
            <Input
              name="TypeofRespondentName"
              placeholder="Enter name"
              value={formData.TypeofRespondentName || ""}
              onChange={handleChange}
            />
          </div>
        )} */}
      </SimpleGrid>

      <Flex mt={10} justify="space-between" gap={10}>
        <PreviousButton onPrev={handlePrevious} />
        <NextButton onClick={handleSubmit} 
        isDisabled={!isFormComplete}
         />
      </Flex>
    </Flex>
  );
};

export default RespondentDemographic;
