import { Select, VStack } from '@chakra-ui/react'



function SelectLanguage({handleLanguageSelect }) {
 


  return (
    <VStack
  spacing={2}
  // w={{ base: 150, md: 200, lg: 300 }}
  mb={3}
  border="1px solid "
  rounded="10px"
  w={{ base: '100%', md: 'auto' }}
// Add padding for better appearance
>
  {/* <Heading as="h2" size="lg">Choose Language</Heading> */}
  <Select
    placeholder="Select language"
    onChange={handleLanguageSelect}
    focusBorderColor="black" // Customizes the focus border color
    borderColor="black" // Default border color
    rounded="lg" // Adds consistent rounding to the Select component
  >
    <option value="en">English</option>
    <option value="hi">Hindi</option>
    <option value="mar">Marathi</option>
    <option value="ass">Assamese</option>
  <option value="ben">Bengali</option>
  <option value="guj">Gujarati</option> 
  <option value="kan">Kannada</option>
  <option value="tel">Telugu</option>
    {/* <option value="tel">Telugu</option>
    <option value="guj">Gujarati</option> */}
    {/* <option value="kan">Kannada</option>
    <option value="mal">Malayalam</option>
    <option value="odi">Odia</option>  */}
  </Select>
</VStack>

  )
}

export default SelectLanguage