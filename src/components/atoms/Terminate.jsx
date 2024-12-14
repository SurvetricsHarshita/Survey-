import {
  Box,
  Button,
  Text,
  Radio,
  RadioGroup,
  Stack,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { getIndianTime } from "../../utils/constant";
import { submitDataToAPI } from "../../utils/submitDataToAPI";

function Terminate() {
  const [selectedReason, setSelectedReason] = useState(null);
  const [otherReason, setOtherReason] = useState(""); // State for 'Other' input
  const [isSubmitting,setSubmiiting]=useState(false)
  const navigate = useNavigate();

  const terminationReasons = [
    { reason: "Door locked", code: 1 },
    { reason: "Members not available at home", code: 2 },
    { reason: "Refused to give the interview", code: 3 },
    { reason: "Refused to give consent", code: 4 },
    { reason: "Refused to continue the interview after some time", code: 5 },
    { reason: "Permission not granted to enter the society", code: 6 },
    { reason: "Terminated as per survey criteria", code: 7 },
    { reason: "Others (Please Specify)", code: 8 },
  ];

  const handleConfirmTermination = async () => {
    if (!selectedReason) {
      alert("Please select a reason for termination.");
      return;
    }

    if (selectedReason === "8" && !otherReason.trim()) {
      alert("Please specify the 'Other' reason.");
      return;
    }
    setSubmiiting(true)
    const end = getIndianTime();
    const endDate = `${end.getDate()}/${
      end.getMonth() + 1
    }/${end.getFullYear()}`;
    const endTime = end.toLocaleTimeString("en-IN");

    const existingData =
      JSON.parse(localStorage.getItem("ProductsTest")) || {};
    const startTimeDate = existingData.startDate;
    const startTimeStr = existingData.startTime;

    if (startTimeDate && startTimeStr) {
      const [day, month, year] = startTimeDate.split("/");
      const formattedDate = `${month}/${day}/${year}`;
      const startTimeFull = `${formattedDate} ${startTimeStr}`;
      const startTime = new Date(startTimeFull);

      const formatDuration = (seconds) => {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = Math.floor(seconds % 60);
        return `${hrs}:${mins}:${secs}`;
      };

      const surveyDuration = Math.floor(
        (end.getTime() - startTime.getTime()) / 1000
      );

      existingData.endTime = endTime;
      existingData.endDate = endDate;
      existingData.duration = formatDuration(surveyDuration);
      existingData.terminationCode=selectedReason;
      existingData.terminationReason =
        selectedReason === "8"
          ? ` ${otherReason}`
          : terminationReasons.find((r) => r.code === parseInt(selectedReason))
              .reason;
    } else {
      console.error("Start time data is missing!");
    }

    const updatedProductTest = existingData;
    localStorage.setItem("ProductsTest", JSON.stringify(updatedProductTest));

    const { success, message } = await submitDataToAPI(updatedProductTest);
    setSubmiiting(false)
    if (success) {
      navigate("/submit", { state: { msg: "terminated" } });
      localStorage.clear();
    } else {
      console.log(message);
    }

    alert(
      `Survey terminated due to: ${
        selectedReason === "8"
          ? ` ${otherReason}`
          : terminationReasons.find((r) => r.code === parseInt(selectedReason))
              .reason
      }`
    );
  };

  return (
    <Box
      minH="100vh"
      bgGradient="linear(to-br, #e9e3e3.100, gray.200)"
      p={6}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box bg="white" shadow="lg" borderRadius="lg" p={8} w="full" maxW="md">
        <Box display="flex" alignItems="center" mb={6}>
          <FaExclamationTriangle
            color="red"
            size="1.5rem"
            style={{ marginRight: "0.5rem" }}
          />
          <Text fontSize="2xl" fontWeight="bold" color="gray.800">
            Terminate Survey
          </Text>
        </Box>

        <Text fontSize="sm" color="green" mb={6}>
          Please select the correct termination reason
        </Text>

        <RadioGroup onChange={setSelectedReason} value={selectedReason}>
          <Stack spacing={4}>
            {terminationReasons.map(({ reason, code }) => (
              <Radio key={code} value={String(code)} colorScheme="red">
                {reason}
              </Radio>
            ))}
          </Stack>
        </RadioGroup>

        {selectedReason === "8" && (
          <Input
            placeholder="Please specify"
            value={otherReason}
            onChange={(e) => setOtherReason(e.target.value)}
            mt={4}
          />
        )}

        <Box mt={8} display="flex" alignItems="center" justifyContent="space-between" gap={10}>
{/* <Link to="/">
            <Button colorScheme="green" >
              Back  to Login
            </Button>
          </Link> */}

          <Button
            colorScheme="red"
            isDisabled={!selectedReason || isSubmitting}
            onClick={handleConfirmTermination}
          >
            Terminate
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Terminate;
