import Axios from 'axios';

export const submitDataToAPI = async (data) => {
  try {
    // Send a POST request to the backend
    const response = await Axios.post('https://three-dec.vercel.app/add-data2', data);

    // Check if the response status is 200 (OK)
    if (response.status === 200) {
      return { success: true, data: response.data }; // Return the success response
    } else {
      return { success: false, message: 'Submission failed. Please try again.' }; // If something goes wrong
    }
  } catch (error) {
    console.error('Error submitting data:', error);
    return { success: false, message: 'An error occurred while submitting data.' }; // Catch errors
  }
};