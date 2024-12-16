import {
  Box,
  Button,

  Heading,
  Input,
  Stack,
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
  useToast,
  Center,
} from '@chakra-ui/react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const handlePasswordVisibility = () => setShowPassword(!showPassword);

  const handleLogin = async (event) => {
    event.preventDefault(); // Prevent page reload on form submission

    if (!email || !password) {
      toast({
        title: 'Validation Error',
        description: 'Both email and password are required.',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post('https://three-dec.vercel.app/login', {  email, password});

      if (response.status === 200) {
        toast({
          title: 'Login Successful',
          description: 'You have been successfully logged in.',
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
        });
        localStorage.setItem("ProductsTest", JSON.stringify({ email: email }));
        localStorage.setItem('email', JSON.stringify(email));
        navigate('/survey'); // Navigate to the next page
      }
    } catch (error) {
      toast({
        title: 'Login Failed',
        description: error.response?.data?.message || 'Invalid credentials. Please try again.',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      });
    } finally {
      setIsSubmitting(false); // Reset loading state
    }
  };
 
  
  return (
    <Center>
      <Box p={6}  width={{ base: '100%', sm: '400px' }} textAlign="center">
        <Heading mb={6} textAlign="center">Login</Heading>
        <form onSubmit={handleLogin}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                // type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password" // Add autocomplete attribute
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handlePasswordVisibility}>
                    {showPassword ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <Button
              colorScheme="blue"
              width="full"
              isLoading={isSubmitting}
              type="submit"
            >
              Login
            </Button>
          </Stack>
        </form>
      </Box>
    </Center>
  );
}

export default LoginPage;