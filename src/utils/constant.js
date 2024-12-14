export const othersSpecify = [
"Others (Specify)",

"Others","Any other (Specify )",
"अन्य (बताएं)","अन्य कोई (बताएं)","कोई अन्य (निर्दिष्ट बताएं)","अन्य (निर्दिष्ट बताएं)","कोई अन्य (बताएं)",
"कोई अन्य (निर्दिष्ट बताएं)","इतर (स्पष्ट करा)", "इतर","इतर कोणतेही (स्पष्ट करा)", "इतर ","অন্যান্য (উল্লেখ কৰক)", "অন্যান্য (উল্লেখ কৰক)","অন্যান্য","অন্যান্য (উল্লেখ কৰক )",

"অন্য যিকোনো (নিৰ্দিষ্ট কৰক )","অন্য যকোনো (উল্লেখ কৰক )","অন্যান্য","অন্যান্য (উল্লেখ করুন)","অন্যান্য","অন্যান্য (নির্দিষ্ট করুন)","অন্য কোন (উল্লেখ করুন)","অন্য কোন (উল্লেখ করুন)","অন্যান্য", "অন্যান্য (নির্দিষ্ট করুন)","অন্যান্য (নির্দিষ্ট করুন)",
]

export  const othersPlaceholders = {
  "অন্যান্য (একটু বলুন)": "একটু বলুন",
  "અન્ય (કૃપા કરીને સ્પષ્ટ કરો)": "કૃપા કરીને સ્પષ્ટ કરો",
  "ಇತರೆ (ದಯವಿಟ್ಟು ಹೆಸರಿಸಿ)": "ದಯವಿಟ್ಟು ಹೆಸರಿಸಿ",
  "ଅନ୍ୟାନ୍ୟ (ଦୟାକରି ଉଲ୍ଲେଖ କରନ୍ତୁ)": "ଦୟାକରି ଉଲ୍ଲେଖ କରନ୍ତୁ",
  "மற்றவை (தயவுசெய்து குறிப்பிடவும்)": "தயவுசெய்து குறிப்பிடவும்",
};


export  const noneValues=["None/Alone","कोई नहीं", "All of the above",
  "Have not changed the brand", "Can’t Say","कोई नहीं/अकेले","नाही/एकटे","वरील सर्व",
                "ब्रँड बदलला नाही",
               
                "सांगू शकत नाही","কেউ না/একা",]

  export  const  optionforShow=[
    { label: "Very much", code: "1" },
    { label: "To an extent", code: "2" },
    { label: "Not much", code: "3" },
    { label: "Don’t know/can’t say", code: "4" },
  ]
export function shuffleArray(array) {
  return array.sort((a, b) => {
    // Compare the label strings and sort randomly
    return a.label.localeCompare(b.label) * (Math.random() - 0.5);
  });
}

 export function shuffleArrayWithFixed(array, fixedCodes = [], randomizeOnce = false) {
  if (randomizeOnce && array._shuffled) {
    return array; // Return the array as-is if it has already been randomized
  }

  const fixedItems = array.filter(item => fixedCodes.includes(item.code));
  const shuffleItems = array.filter(item => !fixedCodes.includes(item.code));

  // Shuffle only the items that are not fixed
  for (let i = shuffleItems.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffleItems[i], shuffleItems[j]] = [shuffleItems[j], shuffleItems[i]];
  }

  // Combine fixed items and shuffled items, preserving the original positions of fixed items
  const result = [];
  array.forEach(item => {
    if (fixedCodes.includes(item.code)) {
      result.push(item); // Add fixed items in their original position
    } else {
      result.push(shuffleItems.shift()); // Add shuffled items
    }
  });

  if (randomizeOnce) {
    result._shuffled = true; // Mark as shuffled
  }

  return result;
}
export const sendBlobToBackend = async (blob) => {
  const formData = new FormData();
  formData.append("file", blob, "audio.mp4"); 
  
  // formData.append("file", blob, "audio.weblm");
  // Append the blob to FormData with a filename
  // https://fi-backend.vercel.app/add-audio
  // https://pptv-backend.vercel.app/add-audio
  try {
    const response = await fetch("https://pptv-backend.vercel.app/add-audio", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Upload successful:", data.fileUrl);
      return data.fileUrl;
    } else {
      console.error("Upload failed:", response.statusText);
    }
  } catch (error) {
    console.error("Error uploading file:", error);
  }
};
export function formatDuration(seconds) {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  return `${hrs}:${mins}:${secs}`;
}

export  const getIndianTime = () => {
  // Get the current date and time in UTC
  const d = new Date();
  const utc = d.getTime() + (d.getTimezoneOffset() * 60000); // Calculate UTC time in milliseconds
  const nd = new Date(utc + (3600000 * 5.5)); // Add 

  const istTime = nd; // Use the Date object representing IST
  const istFormatted = istTime.toLocaleString('en-IN'); // Format the IST time
  console.log("IST now is: " + istFormatted); // Log the IST time

  return istTime; // Return the Date object for IST
};

// Function to calculate survey duration and prepare updated product test
export const calculateSurveyData = (existingData, end) => {
  const startTimeDate = existingData.startTime?.date;
  const startTimeStr = existingData.startTime?.time;

  const [day, month, year] = startTimeDate.split('/');
  const formattedDate = `${month}/${day}/${year}`; // Reformat the date as mm/dd/yyyy

  const startTimeFull = `${formattedDate} ${startTimeStr}`; // Combine date and time to create a full start time

  const startTime = new Date(startTimeFull); // Create a Date object from the start time string

  const surveyDuration = Math.floor((end.getTime() - startTime.getTime()) / 1000); // Calculate duration in seconds

  const updatedProductTest = {
    ...existingData,
    endTime: {
      date: end.toLocaleDateString('en-IN'), // Format end date for India
      time: end.toLocaleTimeString('en-IN'), // Format end time for India
    },
    Duration: formatDuration(surveyDuration), // Format duration
  };

  return updatedProductTest; // Return the updated product test object
};
