import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, Center } from '@chakra-ui/react';

// Import your pages
import LoginPage from './pages/LoginPage';
import SubmitMsg from './pages/SubmitMsg';
import SelfieCapture from './components/atoms/SelfieCapture';
import QuestionForm from './pages/QuestionForm';
import Terminate from './components/atoms/Terminate';
import ProtectedRoute from './pages/ProtectedRoute';
// import ProtectedRoute from './components/ProtectedRoute'; // Import the ProtectedRoute

function App() {
  return (
    <Center minHeight="100vh" bg="" color="">
      <Box
        p={6}
        borderWidth={1}
        borderRadius="md"
        boxShadow="md"
        borderColor="#9caac2"
        width={{ md: '80%', lg: '60%' }}
        m="4"
      >
        <Routes>
          <Route path="/" element={  <LoginPage />} />
          <Route
            path="/survey"
            element={
              // <ProtectedRoute>
                <QuestionForm />
              // </ProtectedRoute>
            }
          />
          <Route path="/submit" element={<SubmitMsg />} />
          <Route path="/selfie" element={<SelfieCapture />} />
          <Route path="/terminate" element={<Terminate />} />
        </Routes>
      </Box>
    </Center>
  );
}

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
