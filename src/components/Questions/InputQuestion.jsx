import { Input } from '@chakra-ui/react'


function InputQuestion({currentQuestion,
  responses,
  handleResponseInput}) {
  return (
    <Input
    ml={1}
    width={"300px"}
    maxLength={currentQuestion.inputLimit || 100}
    type={currentQuestion.inputType||"text"}
    placeholder={currentQuestion.placeHolder || "Your answer"}
    value={responses[ currentQuestion.number] || ""}
    onChange={(e) =>{
      const newValue = e.target.value.slice(0, currentQuestion.inputLimit);
      handleResponseInput( currentQuestion.number, newValue, responses[ currentQuestion.number])
    }
    }
  />
  )
}

export default InputQuestion
