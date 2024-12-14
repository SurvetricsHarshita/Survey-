const English = {
  Section1: {

    Q1a: {
    
      section:"Introduction",
    
      para1:"Hello, my name is _________________________, and I work for ______________________ Ltd. We are conducting a research study on behalf of Apollo Tyres Foundation (ATF), which is running a healthcare center in collaboration with an NGO at this site. The purpose of this study is to evaluate the impact of the health interventions implemented by ATF and to identify areas for improvement. The findings will help ATF refine its strategies for addressing health-related challenges across various locations.",
      para2:"I kindly invite you to participate in this interview, which will take about 20 minutes. During the session, I will ask you some questions, and I assure you that your responses will remain completely confidential. Your honest answers will provide valuable insights into people’s understanding and experiences regarding communicable and non-communicable diseases, as well as the role of ATF/NGO in addressing them.",
      para3:"Your participation is entirely voluntary, and you are free to skip any question or stop the interview at any time if you feel uncomfortable. We sincerely appreciate your cooperation and thank you for contributing to this important study. ",
      
      type: "Introduction",
     
    },
    "QConsent": {
      "number": "QConsent",
      "question": "Are you willing to participate in this study?",
      "type": "radio",
     "options": [
        {
          "label": "Yes, I am willing to participate.",
          "code": "1"
        },
        {
          "label": "No, I do not wish to participate.",
          "code": "2"
        },
        
       
      ],
      termination:true,
      terminationCodes:["2"]
    },

    "1.1": {
      "number": "1.1",
      "question": "What is your age? (Enter completed years)",
      "type": "input",
      "label": "(Enter completed years)",
      section:"SECTION 1: RESPONDENT PROFILE",
      inputType:"number",

      inputLimit:2
      
    },
    "1.2": {
      "number": 1.2,
      "question": "What is your highest level of education?",
      "type": "radio",
      "options": [
        {
          "label": "Illiterate",
          "code": "1"
        },
        {
          "label": "Less than Primary",
          "code": "2"
        },
        {
          "label": "Completed Primary School",
          "code": "3"
        },
        {
          "label": "Completed Middle School",
          "code": "4"
        },
        {
          "label": "Completed High School/ Matriculation",
          "code": "5"
        },
        {
          "label": "Completed Higher Secondary/ Intermediate",
          "code": "6"
        },
        {
          "label": "Completed Graduation",
          "code": "7"
        },
        {
          "label": "Completed Post graduation/ Above",
          "code": "8"
        }
      ]
    },
    "1.3": {
      "number": 1.3,
      "question": "Apart from your current occupation (driver/helper), which of the following do you engage in to earn additional income?",
      "type": "radio",
      "options": [
       
        {
          "label": "Agriculture-based work (farming, labourer, livestock)",
          "code": "1"
        },
        {
          "label": "Construction work / masonry",
          "code": "2"
        },
        {
          "label": "Factory work / loading-unloading activities",
          "code": "3"
        },
       
        {
          "label": "Business (e.g., petty shop, workshop)",
          "code": "4"
        },
        {
          "label": "Home-based work",
          "code": "5"
        },
        {
          "label": "Unskilled / semi-skilled work",
          "code": "6"
        },
        {
          "label": "Do not do any additional work",
          "code": "7"
        },
        {
          "label": "Others (Specify)",
          "code": "8"
        }
      ]
    },
    "1.4": {
      "number": 1.4,
      "question": "How long do you work as a driver/helper in a year?",
      "type": "radio",
      "options": [
        {
          "label": "All months",
          "code": "1"
        },
        {
          "label": "Certain months of the year (lean season)",
          "code": "2"
        },
        {
          "label": "Irregularly",
          "code": "3"
        },
        {
          "label": "Others (Specify)",
          "code": "4"
        }
      ]
    },
    "1.5": {
      "number": 1.5,
      "question": "Does this occupation (driver/helper) constitute the major part of your income?",
      "type": "radio",
      "options": [
        {
          "label": "Yes",
          "code": "1"
        },
       
        {
          "label": "Yes, but I am not entirely dependent on it",
          "code": "2"
        },
        {
          "label": "No",
          "code": "3"
        }
      ]
    },
    "1.6": {
      "number": 1.6,
      "question": "How long have you been driving to this site? (Enter in years)",
      "type": "input",
      "inputType":"number",
    },
    "1.7": {
      "number": 1.7,
      "question": "What is your current marital status?",
      "type": "radio",
      "options": [
        {
          "label": "Married",
          "code": "1"
        },
        {
          "label": "Divorced",
          "code": "2"
        },
        {
          "label": "Separated/Deserted",
          "code": "3"
        },
        {
          "label": "Widower",
          "code": "4"
        },
        {
          "label": "Never Married",
          "code": "5"
        }
      ]
    },
    "1.8": {
      "number": 1.8,
      "question": "Who do you currently live with? ",
      "type": "multi",
      "options": [
        {
          "label": "Wife",
          "code": "1"
        },
        {
          "label": "Children",
          "code": "2"
        },
        {
          "label": "Live-in sexual partner/lover",
          "code": "3"
        },
        {
          "label": "Parents/ Siblings",
          "code": "4"
        },
        {
          "label": "Co-workers/Friends",
          "code": "5"
        },
        {
          "label": "None/Alone",
          "code": "6"
        }
      ]
    },
    "1.9": {
      "number": 1.9,
      "question": "How many times have you been away from home in the last six months?",
      "type": "input",
      "label": "(Enter number of times)",
      inputType:"number",

      inputLimit:2
    },
    "1.10": {
      "number": "1.10",
      "question": "How many days were you away from home in the last six months?",
      "type": "input",
      "label": "(Enter total days)",
      inputType:"number",

      // inputLimit:2
    },
    "1.11": {
      "number": 1.11,
      "question": "How often do you watch television or listen to the radio?",
      "type": "radio",
      "options": [
        {
          "label": "Almost Everyday",
          "code": "1"
        },
        {
          "label": "At least once a week",
          "code": "2"
        },
        {
          "label": "Less than once a week",
          "code": "3"
        },
        {
          "label": "Not at all",
          "code": "4"
        }
      ]
    },
    "1.12": {
      "number": 1.12,
      "question": "How often do you read newspapers or magazines? (Skip if respondent is illiterate)",
      "type": "radio",
      "options": [
        {
          "label": "Almost Everyday",
          "code": "1"
        },
        {
          "label": "At least once a week",
          "code": "2"
        },
        {
          "label": "Less than once a week",
          "code": "3"
        },
        {
          "label": "Not at all",
          "code": "4"
        }
      ]
    },
    "1.13": {
      "number": 1.13,
      "question": "Have you seen or heard any advertisements about HIV, TB, vision care, diabetes, or hypertension in the last six months?",
      "type": "radio",
      "options": [
        {
          "label": "Yes",
          "code": "1"
        },
        {
          "label": "No",
          "code": "2"
        }
      ],
      checkAsk:true,
      nextStep:4
    },
    "1.14": {
      "number": 1.14,
      "question": "What was your source of awareness? ",
      "type": "multi",
      "options": [
        {
          "label": "TV/ Radio",
          "code": "1"
        },
        {
          "label": "Newspaper/Magazine/Periodical",
          "code": "2"
        },
        {
          "label": "Outdoor media",
          "code": "3"
        },
        {
          "label": "Activities/Services by ATF or NGO at this site",
          "code": "4"
        },
        {
          "label": "Others (Specify)",
          "code": "5"
        }
      ]
    },
    "1.15": {
      "number": 1.15,
      "question": "Do you think your occupation as a trucker or helper exposes you to more health risks compared to other professions?",
      // type:"InputRadio",
      "type": "radio",
      options:[
            {
          "label": "Yes",
          "code":"1"
            },
            {
              "label": "No",
              "code":"2"
                }
          
      ],
      checkAsk:true,
      nextStep:2
    },
    "1.15a": {
      "number": "1.15a",
      "question": "what are those risks ",
      "type": "input",
     
    },
    "1.16": {
      "number": "1.16",
      "question": "Have you noticed any significant changes in your health over the years due to the nature of your work?",
      "type": "radio",
      options:[
            {
          "label": "Yes",
          "code":"1"
            },
            {
              "label": "No",
              "code":"2"
                }
          
      ],
      checkAsk:true,
      nextStep:2
    },
    "1.16a": {
      "number": "1.16a",
      "question": "what changes have you noticed?",
      "type": "input",
      placeHolder:"changes"
     
    },
  },
      Section2:{
     
    "2.1": {
        "number": "2.1",
      "question": "What are your main sources of information about HIV/AIDS and STI?",
      "type": "multi",
      section:"SECTION 2: AWARENESS, KNOWLEDGE, AND ATTITUDE ABOUT HIV/AIDS AND STI",
      label:"Part 1: Awareness and Knowledge Sources",
      "options": [
        {
          "label": "Friend / relative / neighbor",
          "code": "1"
        },
        {
          "label": "Peers / other community members",
          "code": "2"
        },
        {
          "label": "Panchayat members",
          "code": "3"
        },
        {
          "label": "Health functionaries like ASHA / ANM / AWW",
          "code": "4"
        },
        {
          "label": "ATF / Outreach workers at site",
          "code": "5"
        },
        {
          "label": "Other NGOs workers at residence",
          "code": "6"
        },
        {
          "label": "Red Ribbon Club / HIV worker",
          "code": "7"
        },
        {
          "label": "Electronic / print media",
          "code": "8"
        },
        {
          "label": "Social media (WhatsApp/Facebook etc.)",
          "code": "9"
        },
        {
          "label": "Sex partners / clients",
          "code": "10"
        },
        {
          "label": "IEC material",
          "code": "11"
        },
        {
          "label": "Others (Specify)",
          "code": "12"
        }
      ]
      
    },
    "2.2": {
      "number": 2.2,
      "question": "What are the main ways HIV/AIDS is transmitted?",
      "type": "multi",
      instruction:"[ Do Not Prompt]",
      label:"Part 2: Knowledge About Transmission",
      "options": [
        {
          "label": "Unprotected sex with an infected person",
          "code": "1"
        },
        {
          "label": "Multiple Sexual Partners",
          "code": "2"
        },
        {
          "label": "HIV-infected blood transfusion",
          "code": "3"
        },
        {
          "label": "Sharing unsterilized needles/syringes",
          "code": "4"
        },
        {
          "label": "From infected mother to child",
          "code": "5"
        },
        {
          "label": "Don’t know/can’t say",
          "code": "6"
        },
        {
          "label": "Others (Specify)",
          "code": "7"
        }
      ]
    },
    "2.3": {
      "number": 2.3,
      "question": "In your opinion, how can HIV/AIDS be prevented?",
      "type": "multi",
    instruction:"[ Do Not Prompt]",
    label:"Part 3: Preventive Measures",
      "options": [
        {
          "label": "Always use condoms",
          "code": "1"
        },
        {
          "label": "Stay faithful to partner",
          "code": "2"
        },
        {
          "label": "Encourage partner to stay faithful",
          "code": "3"
        },
        {
          "label": "Receive blood from accredited blood bank",
          "code": "4"
        },
        {
          "label": "Avoid sharing needles",
          "code": "5"
        },
        {
          "label": "Avoid commercial sex workers",
          "code": "6"
        },
        {
          "label": "Avoid casual sex",
          "code": "7"
        },
        {
          "label": "Consult doctor",
          "code": "8"
        },
        {
          "label": "Don’t know / can’t say",
          "code": "9"
        },
        {
          "label": "Other (specify)",
          "code": "99"
        }
      ]
    },
    "Part 4": {
      "number": "Part4",
      // "question": ":Perceptions and Attitudes",
      "type": "rate",
     label:"Part 4: Perceptions and Attitudes",
      "STATEMENTS": [
        {
          "label": "HIV/AIDS spreads by living with an infected person.",
          "id": "2.4A"
        },
        {
          "label": "HIV/AIDS spreads by sharing unsterilized needles/syringes",
          "id": "2.4B"
        },
        {
          "label": "A healthy-looking person can transmit HIV/AIDS.",
          "id": "2.4C"
        },
        {
          "label": "Pregnant women with HIV/AIDS can pass the virus to their unborn child.",
          "id": "2.4D"
        },
        {
          "label": "Consistent condom use protects against HIV/AIDS and STI infections.",
          "id": "2.4E"
        },
        {
          "label": "Family members would accept someone with HIV/AIDS in the household.",
          "id": "2.4F"
        }
      ],
      "FREQUENCIES": [
        {
          "label": "Agree",
          "value": "1"
        },
        {
          "label": "Disagree",
          "value": "2"
        }
      ]
    },
    "2.5": {
      "number": 2.5,
      "question": "Are you aware of infections other than HIV that can be transmitted through sexual intercourse (STIs)?",
      "type": "radio",
      label:"Part 5: STI Awareness",
      "options": [
        {
          "label": "Yes",
          "code": "1"
        },
        {
          "label": "No",
          "code": "2"
        }
      ]
    },
    "2.6": {
      "number": 2.6,
      "question": "Do you think STIs can be prevented?",
      "type": "radio",
      "options": [
        {
          "label": "Yes",
          "code": "1"
        },
        {
          "label": "No",
          "code": "2"
        },
        {
          "label": "can't say",
          "code": "3"
        }
      ]
    },
    "2.7": {
      "number": 2.7,
      "question": "Do you think STIs can be cured?",
      "type": "radio",
      "options": [
        {
          "label": "Yes",
          "code": "1"
        },
        {
          "label": "No",
          "code": "2"
        },
        {
          "label": "can't say",
          "code": "3"
        }
      ]
    },
    "2.9": {
      "number": 2.9,
      "question": "Can you identify any symptoms of STIs in men? ",
      label:"Part 6: Symptoms and Treatment",
      "type": "radio",
    
      "options": [
        {
          "label": "Genital discharge",
          "code": "1"
        },
        {
          "label": "Genital sores/ulcers",
          "code": "2"
        },
        {
          "label": "Burning sensation during urination",
          "code": "3"
        },
        {
          "label": "Swelling in the groin area",
          "code": "4"
        },
        {
          "label": "Skin rashes",
          "code": "5"
        },
        {
          "label": "Others",
          "code": "6"
        }
      ]
    },
    "2.10": {
      "number": "2.10",
      "question": "What did you do the last time you experienced these symptoms?",
      "type": "radio",
      "options": [
        {
          "label": "Took home remedies",
          "code": "1"
        },
        {
          "label": "Visited a health worker",
          "code": "2"
        },
        {
          "label": "Went to an NGO clinic or ATF center",
          "code": "3"
        },
        {
          "label": "Consulted a private or government hospital",
          "code": "4"
        }
      ]
    },
    "2.11": {
      "number": 2.11,
      "question": "Are there any myths or misconceptions about HIV/AIDS or STIs among truckers that you have encountered?",
      "type": "input"
    }
  },
  Section3:{
    "3.1": {
      "number": 3.1,
      "question": "Have you ever faced any vision",
      "type": "radio",
      section:"SECTION – 3 VISION CARE",
      "options": [
        {
          "label": "Yes",
          "code": "1"
        },
        {
          "label": "No",
          "code": "2"
        }
      ]
    },
    "3.2": {
      "number": 3.2,
      "question": "Which are symptoms of vision related problems?",
      "type": "multi",
      "options": [
       
        {
          "label": "Severe, sudden eye pain",
          "code": "1"
        },
        {
          "label": "Recurrent pain in or around the eye",
          "code": "2"
        },
        {
          "label": "Hazy or Blurred vision",
          "code": "3"
        },
       
        {
          "label": "Swollen, Red Eyes",
          "code": "4"
        },
        {
          "label": "Difficulty in Seeing flashes of light",
          "code": "5"
        },
       
        {
          "label": "Unusual, even painful, sensitivity to light or glare",
          "code": "6"
        },
        {
          "label": "Excessive tearing",
          "code": "7"
        },
        {
          "label": "Others (Specify)",
          "code": "8"
        },
        {
          "label": "Don’t Know",
          "code": "9"
        }
      ],
      "instruction": "(Do not read out the options)"
    },
    "3.3": {
      "number": 3.3,
      "question": "In how many months one should go for eye sight testing?",
      "type": "radio",
      "options": [
        {
          "label": "<12 months",
          "code": "1"
        },
        {
          "label": "12 months",
          "code": "2"
        },
        {
          "label": "18 months",
          "code": "3"
        },
        {
          "label": "24 months",
          "code": "4"
        },
        {
          "label": "36 months or more",
          "code": "5"
        }
      ]
    },
    "3.4": {
      "number": 3.4,
      "question": "Do you think that drivers should wear sun glasses when there is excessive sunlight?",
      "type": "radio",
      "options": [
        {
          "label": "Yes, it’s very much necessary",
          "code": "1"
        },
        {
          "label": "Yes, but it’s not necessary",
          "code": "2"
        },
        
       
        {
          "label": "No need to wear sunglasses",
          "code": "3"
        },
        {
          "label": "Others (Specify)",
          "code": "4"
        }
      ]
    },
    "3.5": {
      "number": 3.5,
      "question": "Do you think that regular smoking increases the risk of blurred vision?",
      "type": "radio",
      "options": [
        {
          "label": "Yes",
          "code": "1"
        },
        {
          "label": "No",
          "code": "2"
        },
        {
          "label": "Can't say",
          "code": "3"
        }
      ]
    },
    "3.6": {
      "number": 3.6,
      "question": "Do you wear spectacles or sun glass while driving?",
      "type": "radio",
      "options": [
        {
          "label": "Yes",
          "code": "1"
        },
        {
          "label": "No",
          "code": "2"
        }
      ]
    },
    "3.7": {
      "number": 3.7,
      "question": "Whether the ATF/ NGO health clinic provide vision care facilities.",
      "type": "radio",
      "options": [
        {
          "label": "Yes",
          "code": "1"
        },
        {
          "label": "No",
          "code": "2"
        },
        {
          "label": "Don't know",
          "code": "3"
        }
      ],
      checkAsk:true,
      nextStep:5
    },
    "3.8": {
      "number": 3.8,
      "question": "Have you ever visited ATF/NGO health clinic for vison related problem.",
      "type": "radio",
      "options": [
        {
          "label": "Yes",
          "code": "1"
        },
        {
          "label": "No",
          "code": "2"
        }
      ], checkAsk:true,
      nextStep:4
    },
    "3.9": {
      "number": 3.9,
      "question": "For what vision related issue you have visited ATF/NGO health clinic.",
      "type": "radio",
      "options": [
       
        {
          "label": "Severe, sudden eye pain",
          "code": "1"
        },
        {
          "label": "Recurrent pain in or around the eye",
          "code": "2"
        },
        {
          "label": "Hazy or Blurred vision",
          "code": "3"
        },
       
        {
          "label": "Swollen, Red Eyes",
          "code": "4"
        },
        {
          "label": "Difficulty in Seeing flashes of light",
          "code": "5"
        },
        
        {
          "label": "Unusual, even painful, sensitivity to light or glare",
          "code": "6"
        },
        {
          "label": "Excessive tearing",
          "code": "7"
        },
        {
          "label": "Others (Specify)",
          "code": "9"
        }
      ]
    },
    "3.10": {
      "number": "3.10",
      "question": "What kind of services were provided?",
      "type": "radio",
      "options": [
        {
          "label": "Eyes checkup was done",
          "code": "1"
        },
        {
          "label": "Given eye drops",
          "code": "2"
        },
        {
          "label": "Provided spectacles / goggles",
          "code": "3"
        },
        {
          "label": "Provided medicine",
          "code": "4"
        },
        {
          "label": "Any other (Specify )",
          "code": "5"
        }
      ]
    },
    "3.11": {
      "number": 3.11,
      "question": "Are you satisfied with the services provided to you?",
      "type": "radio",
      "options": [
        {
          "label": "Satisfied to a large extent",
          "code": "1"
        },
        {
          "label": "Satisfied to some extent",
          "code": "2"
        },
        {
          "label": "Not at all Satisfied",
          "code": "3"
        }
      ]
    },
    "4.1": {
      "number": 4.1,
      "question": "Awareness about Symptoms",
      "type": "rate",
      section:"SECTION – 4 TB CARE",
      "STATEMENTS": [
       
        {
          "label": "If somebody is Coughing for three or more week continuously, he should not be worried as it is common due to seasonal changes",
          "id": "4.1_A"
        },
        
        {
          "label": "If there is weight loss, he/she may be infected with TB",
          "id": "4.1_B"
        },
        {
          "label": "Chest pain is not a cause of TB",
          "id": "4.1_C"
        },
        {
          "label": "People say that sweating during night is one of the causes of TB",
          "id": "4.1_D"
        },
        
        {
          "label": "If a person has loss of appetite, he should go for TB testing",
          "id": "4.1_E"
        },
        {
          "label": "Regular headache can be one of the causes of TB",
          "id": "4.1_F"
        },
        {
          "label": "Is TB a communicable disease? It can be transmitted through cough/sneezing",
          "id": "4.1_G"
        },
        
        {
          "label": "Somebody experiences fever in the evening continuously for few days, he should get tested for TB",
          "id": "4.1_H"
        },
        
        {
          "label": "If someone is coughing for two or more weeks, he/she should immediately get his/her sputum tested.",
          "id": "4.1_I"
        },
        
      ],
      "FREQUENCIES": [
        {
          "label": "Agree",
          "value": "1"
        },
        {
          "label": "Disagree",
          "value": "2"
        },
        {
          "label": "DK/CS",
          "value": "3"
        }
      ],
      "instruction": "Now I am going to read out some statements, please tell whether you agree or disagree with this statement."
    },
    "4.12": {
      "number": 4.1,
      "question": "Awareness about Symptoms",
      "type": "rate",
      section:"SECTION – 4 TB CARE",
      "STATEMENTS": [
       
     
        {
          "label": "TB infected person needs to collect his/her sputum in a covered container and wash that container in running water",
          "id": "4.1_J"
        },
        {
          "label": "TB infected person should cover his/her mouth with cloth while coughing",
          "id": "4.1_K"
        },
        {
          "label": "TB infected person can spit anywhere",
          "id": "4.1_L"
        },
        
        {
          "label": "If someone is diagnosed with TB, he/she should not reveal this to anyone.",
          "id": "4.1_M"
        },
        {
          "label": "One should not take liquor or consume tobacco if diagnosed with TB",
          "id": "4.1_N"
        },
        {
          "label": "TB infected person should not hide his/her illness with anybody and should start treatment immediately as possible",
          "id": "4.1_O"
        },
        {
          "label": "TB infected person need not to complete his/her course of treatment if feeling better before completion of the course",
          "id": "4.1_P"
        },
        {
          "label": "One should strictly follow instructions of the doctor and complete the entire course for complete recovery ",
          "id": "4.1_Q"
        }
      ],
      "FREQUENCIES": [
        {
          "label": "Agree",
          "value": "1"
        },
        {
          "label": "Disagree",
          "value": "2"
        },
        {
          "label": "DK/CS",
          "value": "3"
        }
      ],
      "instruction": "Now I am going to read out some statements, please tell whether you agree or disagree with this statement."
    },
    "4.2": {
      "number": 4.2,
      "question": "Have you ever experienced continuous cough for more than 2 weeks in the last one year?",
      "type": "radio",
      "options": [
        {
          "label": "Yes",
          "code": "1"
        },
        {
          "label": "No",
          "code": "2"
        }
      ],
      checkAsk:true,
        nextStep:4
    },
    "4.3": {
      "number": 4.3,
      "question": "If Yes, did you go for sputum test or X-ray?",
      "type": "radio",
      "options": [
        {
          "label": "Yes",
          "code": "1"
        },
        {
          "label": "No",
          "code": "2"
        }
      ],
      checkAsk:true,
      nextStep:3
    },
    "4.4": {
      "number": 4.4,
      "question": "where did you go for sputum test or X-ray.",
      type:"radio",
      "options": [
        {
          "label": "Govt. Health Facility",
          "code": "1"
        },
        {
          "label": "ATF Health Clinic",
          "code": "2"
        },
        {
          "label": "Other NGO Health Clinic",
          "code": "3"
        },
        {
          "label": "Private Health Facility / Pathology lab",
          "code": "4"
        },
        {
          "label": "Others (Specify)",
          "code": "5"
        }
      ]
    },
    "4.5": {
      "number": 4.5,
      "question": "If gone to ATF or NGO health clinic, are you satisfied with services?",
      type:"radio",
      "options": [
        {
          "label": "Yes",
          "code": "1"
        },
        {
          "label": "No",
          "code": "2"
        }
      ]
    },
    "5.1": {
      "number": 5.1,
      "question": "Do you know early signs and symptoms of diabetes?",
      "type": "radio",
      section:"SECTION – 5 DIABETES & HYPERTENSION",
      "options": [
        {
          "label": "Yes",
          "code": "1"
        },
        {
          "label": "No",
          "code": "2"
        }
      ],
      "checkAsk": true,
      nextStep:2
    },
    "5.2": {
      "number": 5.2,
      "question": "If Yes, what are the early signs and symptoms of Diabetes?",
      "type": "multi",
      "options": [
        {
          "label": "Increased thirst",
          "code": "1"
        },
        {
          "label": "Frequent Urination",
          "code": "2"
        },
        {
          "label": "Fatigue / tiredness",
          "code": "3"
        },
        {
          "label": " Unexpected weight loss",
          "code": "4"
        },
        {
          "label": "Dry Mouth",
          "code": "5"
        },
        {
          "label": "Others (Specify)",
          "code": "6"
        }
      ]
    },
    "5.3": {
      "number": 5.3,
      "question": "What are the problems faced by diabetes patient after few years of diagnosis of diabetes?",
      "type": "multi",
      "options": [
        {
          "label": "Blurred Vision",
          "code": "1"
        },
        {
          "label": "Malfunctioning of Kidney",
          "code": "2"
        },
        {
          "label": "Heart Attack/Stroke",
          "code": "3"
        },
        {
          "label": "Slow healing sores",
          "code": "4"
        },
        {
          "label": "Frequent Infections such as gums or skin infections",
          "code": "5"
        },
        {
          "label": "Others (Specify)",
          "code": "6"
        }
      ]
    },
    "5.4": {
      "number": 5.4,
      "question": "What are the things that we should do to control diabetes?",
      "type": "multi",
      "options": [
        {
          "label": "Take healthy and balanced diet",
          "code": "1"
        },
        {
          "label": "Reduce weight (if the person is overweight)",
          "code": "2"
        },
        {
          "label": "Avoid smoking",
          "code": "3"
        },
        {
          "label": "Do physical exercise regularly",
          "code": "4"
        },
        {
          "label": "Check blood sugar on regular basis",
          "code": "5"
        }
      ]
    },
    "5.5": {
      "number": 5.5,
      "question": "Have you ever tested for diabetes?",
      "type": "radio",
      "options": [
        {
          "label": "Yes",
          "code": "1"
        },
        {
          "label": "No",
          "code": "2"
        }
      ],
      "checkAsk": true,
      nextStep:5
    },
    "5.6": {
      "number": 5.6,
      "question": "If Yes, what was the result?",
      "type": "radio",
      "options": [
        {
          "label": "You tested diabetes positive",
          "code": "1"
        },
        {
          "label": "You tested diabetes negative",
          "code": "2"
        }
      ]
    },
    "5.7": {
      "number": 5.7,
      "question": "Where did you go for the test?",
      "type": "radio",
      "options": [
        {
          "label": "Govt. Health Facility",
          "code": "1"
        },
        {
          "label": "ATF Health Clinic",
          "code": "2"
        },
        {
          "label": "Any other NGO Clinic/Health Facility",
          "code": "3"
        },
        {
          "label": "Private Doctor/Clinic/Hospital",
          "code": "4"
        },
        {
          "label": "Any other (Specify )",
          "code": "5"
        }
      ]
    },
    "5.8": {
      "number": 5.8,
      "question": "Did you pay for the services / testing?",
      "type": "radio",
      "options": [
        {
          "label": "Paid for the testing service",
          "code": "1"
        },
        {
          "label": "It was free of cost",
          "code": "2"
        }
      ]
    },
    "5.9": {
      "number": 5.9,
      "question": "Are you satisfied with the services?",
      "type": "radio",
      "options": [
        
        {
          "label": "Yes,very much satisfied",
          "code": "1"
        },
       
        {
          "label": "Yes,satisfied to some extent",
          "code": "2"
        },
        {
          "label": "Not at all satisfied",
          "code": "3"
        }
      ],
      

    },
    "5.10": {
      "number": "5.10",
      "question": "When did you visited the doctor last time, were your blood pressure checked?",
      "type": "radio",
      "options": [
        {
          "label": "Yes",
          "code": "1"
        },
        {
          "label": "No",
          "code": "2"
        },
       
      ],
      checkAsk:true,
      nextStep:3
    },
    "5.11": {
      "number": 5.11,
      "question": "Whether the blood pressure was normal?",
      "type": "radio",
      "options": [
        {
          "label": "Yes, it was normal",
          "code": "1"
        },
        {
          "label": "No, it was low",
          "code": "2"
        },
        {
          "label": "No, it was high",
          "code": "3"
        },
        {
          "label": "Don’t know as the doctor did not tell",
          "code": "4"
        },
      ],
      checkAsk:true,
      nextStep:2
    },
    "5.12": {
      "number": 5.12,
      "question": "Did you get advice about food that you should take/ avoid? ",
      "type": "radio",
      "options": [
        {
          "label": "Yes",
          "code": "1"
        },
        {
          "label": "No",
          "code": "2"
        },
        {
          "label": "Don’t remember",
          "code": "3"
        }
      ],
   
    },
    "5.13": {
      "number": 5.13,
      "question": "Which health facility did you visit last time?",
      "type": "radio",
      "options": [
        {
          "label": "Govt. Health Facility",
          "code": "1"
        },
        {
          "label": "ATF Health Clinic",
          "code": "2"
        },
        {
          "label": "Any other NGO Clinic/Health Facility",
          "code": "3"
        },
        {
          "label": "Private Doctor/Clinic/Hospital",
          "code": "4"
        },
        {
          "label": "Any other (Specify )",
          "code": "5"
        }
      ]
    },
    "6.1": {
      "number": 6.1,
      "question": "How long you know the ATF /NGO worker / health clinic at this	site?",
      "type": "radio",
      section:"SECTION 6: ROLE OF ATF OR NGO WORKER",
      "options": [
        {
          "label": "One month",
          "code": "1"
        },
        {
          "label": "Three months",
          "code": "2"
        },
        {
          "label": "Six months",
          "code": "3"
        },
        {
          "label": "Twelve months",
          "code": "4"
        },
        {
          "label": "More than twelve months",
          "code": "5"
        },
        
      ]
    },
    "6.2": {
      "number": 6.2,
      "question": "How did you get to know about ATF/ NGO worker / health clinic?",
      "type": "multi",
      "options": [
        {
          "label": "Directly contacted by them",
          "code": "1"
        },
        {
          "label": "Through other community member /peer",
          "code": "2"
        },
        {
          "label": "Through allied population",
          "code": "3"
        },
        {
          "label": "Through community stakeholders",
          "code": "4"
        },
        {
          "label": "During IEC campaign at site",
          "code": "5"
        },
        {
          "label": "Others (Specify)",
          "code": "6"
        }
      ]
    },
    "6.3": {
      "number": 6.3,
      "question": "Have you ever personally met withATF / NGO worker?",
      "type": "radio",
      "options": [
        {
          "label": "Yes",
          "code": "1"
        },
        {
          "label": "No",
          "code": "2"
        }
      ]
    },
    "6.4": {
      "number": 6.4,
      "question": "How frequently have you met\r\nin the past 6 months?",
      "type": "radio",
      "options": [
        {
          "label": "Quite regularly",
          "code": "1"
        },
        {
          "label": "At times",
          "code": "2"
        },
        {
          "label": "Only once",
          "code": "3"
        }
      ]
    },
    "6.5": {
      "number": 6.5,
      "question": "If met only once, what are the reasons?",
      instruction:"Do Not Prompt",
      "type": "multi",
      "options": [
        {
          "label": "I already know the information provided by them so did not feel necessary to meet again",
          "code": "1"
        },
        {
          "label": "The information provided was not much helpful",
          "code": "2"
        },
        {
          "label": "I do not have time",
          "code": "3"
        },
        {
          "label": "worker may disclose my identify",
          "code": "4"
        },
        {
          "label": "Others (Specify)",
          "code": "5"
        }
      ]
    },
    "6.6": {
      "number": 6.6,
      "question": "During the meetings / IPC sessions, what topics have been discussed with you by the ATF / NGO worker?",
      "type": "multi",
      "options": [
        {
          "label": "Information about HIV / AIDS / STI",
          "code": "1"
        },
        {
          "label": "Information about Vision Care",
          "code": "2"
        },
        {
          "label": "Information about Diabetes",
          "code": "3"
        },
        {
          "label": "Information about Hypertension",
          "code": "4"
        },
        {
          "label": "Information about TB",
          "code": "5"
        },
        {
          "label": "Information on condom including demo",
          "code": "6"
        },
        {
          "label": "Information about health clinic run by ATF / NGO",
          "code": "7"
        },
        {
          "label": "Information on health services like ART / ICTC / STI etc",
          "code": "8"
        },
        {
          "label": "Referral of health Services like ART / ICTC / CCC / STI etc",
          "code": "9"
        },
        {
          "label": "None",
          "code": "10"
        },
        {
          "label": "Others (Specify)",
          "code": "11"
        }
      ]
    },
    "6.7": {
      "number": 6.7,
      "question": "Have these sessions help you.",
      "type": "radio",
      "options": [
        
        {
          "label": "Yes,very much",
          "code": "1"
        },
        {
          "label": "It was somewhat helpful",
          "code": "2"
        },
        {
          "label": "Not at all helpful",
          "code": "3"
        }
      ]
    },
    "6.8": {
      "number": 6.8,
      "question": "Reasons for not finding the meetings/ IPC sessions helpful?",
      "type": "multi",
      "options": [
        {
          "label": "The behaviour of ATF / NGO worker was not friendly",
          "code": "1"
        },
        {
          "label": "Timing of the meeting is not convenient",
          "code": "2"
        },
        {
          "label": "The IPC session was lengthy and boring",
          "code": "3"
        },
        {
          "label": "ATF / NGO worker could not explain or answer my queries",
          "code": "4"
        },
        {
          "label": "The IPC sessions was not supplemented with IEC material",
          "code": "5"
        },
        {
          "label": "Sessions were too technical",
          "code": "6"
        },
        {
          "label": "Others (Specify)",
          "code": "9"
        }
      ]
    },
    "6.9": {
      "number": 6.9,
      "question": "How would you rate the quality of interaction and information provided by ATF or NGO workers?",
      "type": "radio",
      options:[
        {
          "label": "Very poor",
          "code": "1"
        },
        {
          "label": "Poor",
          "code": "2"
        },{
          "label": "Neutral",
          "code": "3"
        },{
          "label": "Good",
          "code": "4"
        },{
          "label": "Very Good",
          "code": "5"
        },
      ]


    },
    "6.10": {
      "number": "6.10",
      "question": " Are there any additional health topics you think ATF or NGO workers should address in their awareness sessions?",
      "type": "input",
      
    },
    "7.1": {
      "number": 7.1,
      section:"SECTION 7: AWARENESS ABOUT ATF / NGO HEALTHCARE CENTRE AND SERVICES",
      "question": "Are you aware of the health clinic run by ATF or NGO at this site?",
      "type": "radio",
      "options": [
        {
          "label": "Yes",
          "code": "1"
        },
        {
          "label": "No",
          "code": "2"
        }
      ],
      "instruction": "I will read out the following services one by one and ask certain questions from you.",
      checkAsk:true,
      nextStep:13
      // [Ask SECTION 7 from ATF / NGO beneficiaries (CODED “a” IN QUESTION “2” OF IDENTIFICATION DETAILS)]
    },
    "7.2": {
      "number": 7.2,
      "question": "Which one of following services you are aware of at the clinic?",
      "type": "radio",
      "options": [
        {
          "label": "Counseling and HIV testing",
          "code": "1"
        },
        {
          "label": "Counseling and STI testing",
          "code": "2"
        },
        {
          "label": "Vision Care/Eye Testing",
          "code": "3"
        },
        {
          "label": "TB care/treatment",
          "code": "4"
        },
        {
          "label": "Diabetes/High BP testing/treatment",
          "code": "5"
        },
        {
          "label": "Other health care/treatment.",
          "code": "6"
        }
      ]
    },
    "7.3": {
      "number": 7.3,
      "question": "What are the main source of awareness?",
      "type": "radio",
      "options": [
        {
          "label": "ATF/NGO Workers",
          "code": "1"
        },
        {
          "label": "Peers/friends",
          "code": "2"
        },
        {
          "label": "Advertisement",
          "code": "3"
        },
        {
          "label": "Stakeholders/allied population",
          "code": "4"
        },
        {
          "label": "Others (Specify)",
          "code": "5"
        }
      ]
    },
    "7.4": {
      "number": 7.4,
      "question": "Which one of following you have ever used?",
      "type": "radio",
      "options": [
        {
          "label": "Counseling and HIV testing",
          "code": "1"
        },
        {
          "label": "Counseling and STI testing",
          "code": "2"
        },
        {
          "label": "Vision Care/Eye Testing",
          "code": "3"
        },
        {
          "label": "TB care/treatment",
          "code": "4"
        },
        {
          "label": "Diabetes/High BP testing/treatment",
          "code": "5"
        },
        {
          "label": "Other health care/treatment .",
          "code": "6"
        }
      ]
    },
    "7.5": {
      "number": 7.5,
      "question": "Extent of utilization\r\nOf services?",
      "type": "radio",
      "options": [
        {
          "label": "Frequently",
          "code": "1"
        },
        {
          "label": "Moderately",
          "code": "2"
        },
        {
          "label": "Only once",
          "code": "3"
        }
      ]
    },
    "7.6": {
      "number": 7.6,
      "question": "Are you satisfied with the accessibility of the services",
      type:"radio",
      options:[
        {
          "label": "Yes",
          "code": "1"
        },
        {
          "label": "No",
          "code": "2"
        }
      ]
    },
    "7.7": {
      "number": 7.7,
      "question": "What is your\r\nSatisfaction with the\r\nservices?",
      "type": "radio",
      "options": [
        {
          "label": "Satisfied",
          "code": "1"
        },
        {
          "label": "Moderately satisfied",
          "code": "2"
        },
        {
          "label": "Not satisfied",
          "code": "3"
        }
      ]
    },
    "7.8": {
      "number": 7.8,
      "question": "Do you think you have been benefited after using these services?"
    },
    "8.1": {
      question:"Perception about ATF / NGO worker / Health clinic",
      "number": 8.1,
      "type": "rate",
      section:"SECTION 8: PERCEPTION ABOUT ATF / NGO WORKER / HEALTH CLINIC",
      instruction:"Note: Now I will read out some statements to you one by one and ask you to tell me to what extent you agree / disagree with each of the statements on a five-point rating scale.",
      "STATEMENTS": [
        {
          "label": "Perception about ATF/NGO worker/Health clinic",
          "id": "8.1_1"
        },
        {
          "label": "I am aware that ATF/NGO workers are running a health clinic at site",
          "id": "8.1_2"
        },
        {
          "label": "The services provided by ATF/NGO health clinic are beneficial to the common people",
          "id": "8.1_3"
        },
        {
          "label": "ATF / NGO worker have helped to access the free health services like HIV/AIDS, STI, Eye, Sugar, & High BP testing or other health care treatment",
          "id": "8.1_4"
        },
        
        
        {
          "label": "I am highly dependent upon ATF/NGO health clinic for my health whenever I come to the site",
          "id": "8.1_5"
        },
        
        {
          "label": "In the need of health treatment, I prefer to go ATF / NGO health clinic as not only it is affordable but the quality of services is good",
          "id": "8.1_6"
        },
       
        {
          "label": "There is no health facility available nearby this site. Hence, I go for ATF / NGO clinic",
          "id": "8.1_7"
        },
        {
          "label": "ATF/NGO workers organize awareness activities quite regularly for the community members",
          "id": "8.1_8"
        },
        
      
        {
          "label": "ATF / NGO worker are always approachable and they extend all possible help in clarifying doubts related   to   HIV/AIDS, Vision,  TB, Hypertension, Diabetes and others",
          "id": "8.1_9"
        },
       
       
      ],
      "FREQUENCIES": [
        {
          "label": "Strongly Agree",
          "value": "5"
        },
        {
          "label": "Agree",
          "value": "4"
        },
        {
          "label": "Neither agree nor disagree",
          "value": "3"
        },
        {
          "label": "Disagree",
          "value": "2"
        },
        {
          "label": "Strongly Disagree",
          "value": "1"
        },
        {
          "label": "DK/CS",
          "value": "8"
        }
      ]
    },
    "8.11": {
      question:"Perception about ATF / NGO worker / Health clinic",
      "number": 8.1,
      "type": "rate",
      // section:"SECTION 8: PERCEPTION ABOUT ATF / NGO WORKER / HEALTH CLINIC",
      instruction:"Note: Now I will read out some statements to you one by one and ask you to tell me to what extent you agree / disagree with each of the statements on a five-point rating scale.",
      "STATEMENTS": [
       
       
        {
          "label": "ATF / NGO worker did not have adequate understanding and knowledge about HIV/AIDS, STI, Vision Care, TB, Hypertension, & Diabetes related problems",
          "id": "8.1_10"
        },
       
        {
          "label": "The information on HIV/AIDS, STI, Vision Care, TB, Hypertension, Diabetes/Sugar provided by ATF / NGO worker is useful ",
          "id": "8.1_11"
        },
        {
          "label": "The IPC session conducted by ATF/NGO workers is not effective as they could not answer all/some of my queries",
          "id": "8.1_12"
        },
        
        {
          "label": "ATF / NGO worker often organize programme at the site for HIV/AIDS, Vision Care, TB, Diabetes & Hypertension awareness generation",
          "id": "8.1_13"
        },
       
        {
          "label": "ATF / NGO worker maintain the confidentiality, privacy and identity of the members",
          "id": "8.1_14"
        },
        {
          "label": "They work in collaboration with community stakeholders",
          "id": "8.1_15"
        },
        {
          "label": "I can afford more than what ATF/NGO charges as fees for treatment",
          "id": "8.1_16"
        },
        
        {
          "label": "I am satisfied with the role of ATF / NGO worker which has helped me in protecting myself from HIV / AIDS / STI, etc.",
          "id": "8.1_17"
        },
        
        {
          "label": "Overall,I am satisfied with the role of ATF/NGO workers and I will always purchase Apollo tyres in future also.",
          "id": "8.1_18"
        }
      ],
      "FREQUENCIES": [
        {
          "label": "Strongly Agree",
          "value": "5"
        },
        {
          "label": "Agree",
          "value": "4"
        },
        {
          "label": "Neither agree nor disagree",
          "value": "3"
        },
        {
          "label": "Disagree",
          "value": "2"
        },
        {
          "label": "Strongly Disagree",
          "value": "1"
        },
        {
          "label": "DK/CS",
          "value": "8"
        }
      ]
    },
    "8.2": {
      "number": 8.2,
      "question": "what are your future expectations from ATF / NGO worker?\r\n\r\n\r\n[Please use the given codes]",
      "type": "multi",
      "options": [
       
        {
          "label": "More information about STI, AIDS",
          "code": "1"
        },
        {
          "label": "More information on Vision Care",
          "code": "2"
        },
        {
          "label": "More information on TB",
          "code": "3"
        },
        {
          "label": "More information on Diabetes & Hypertension",
          "code": "4"
        },
        {
          "label": "More information on health services like ART/ICTC/STI etc.",
          "code": "5"
        },
       
        {
          "label": "Referral of health services like ART/ICTC/STI etc.",
          "code": "6"
        },
        
        {
          "label": "Free checkup or testing facility",
          "code": "7"
        },
        {
          "label": "Resolving issues related to distance and making services available at convenient location",
          "code": "8"
        },
        {
          "label": "Others (Specify)",
          "code": "9"
        }
      ]
    },
    
    "8.3": {
      "number": 8.3,
      "question": "Do you think the ATF/NGO healthcare centres are adequately equipped to handle common health issues faced by truckers?",
      // "type": "input",
      "type": "radio",
      "options": [
        {
          "label": "yes",
          "code": "1"
        },
        {
          "label": "No",
          "code": "2"
        },
      ]
    },
    "8.4": {
      "number": 8.4,
      "question": "What specific improvements would you suggest for the services provided by ATF/NGO healthcare centres?",
      "type": "input"
    },
    "9.1": {
      "number": 9.1,
      "question": "Have you heard of Apollo Tyres? ",
      // "label": "Brand Name",
      type:"radio",

      "options": [
       
        {
          "label": "Yes",
          "code": "1"
        },
        {
          "label": "No",
          "code": "2"
        },
      
        
     
      ]
    },
    "9.2": {
      "number": 9.2,
      "question": "What does Apollo Tyres mainly do?\r\n(Multi code possible)",
      "type": "multi",
      "options": [
        {
          "label": "Manufacture Tyres",
          "code": "1"
        },
        {
          "label": "Running Health Clinic",
          "code": "2"
        },
        {
          "label": "Others (Specify)",
          "code": "3"
        }
      ]
    },
    "9.3": {
      "number": 9.3,
      "question": " From where  you  seen/heard any advertisement of Apollo Tyres brand?",
      "type": "multi",
      "options": [
        {
          "label": "Radio",
          "code": "1"
        },
        {
          "label": "TV",
          "code": "2"
        },
        {
          "label": "Newspaper",
          "code": "3"
        },
        {
          "label": "Hoarding",
          "code": "4"
        },
        {
          "label": "Wall painting",
          "code": "5"
        },
        {
          "label": "Cinema hall",
          "code": "6"
        },
        {
          "label": "Others (Specify)",
          "code": "9"
        },
        {
          "label": "Don’t remember ",
          "code": "10"
        }
      ]
    },
    "9.4": {
      "number": 9.4,
      "question": "Which brand of tyres you use currently?[MULTIPLE RESPONSE POSSIBLE]",
      "type": "multi",
      "options": [
        {
          "label": "Apollo",
          "code": "1"
        },
        {
          "label": "Continental",
          "code": "2"
        },
        {
          "label": "MRF",
          "code": "3"
        },
        {
          "label": "Good Year",
          "code": "4"
        },
        {
          "label": "Bridgestone",
          "code": "5"
        },
        {
          "label": "Birla",
          "code": "6"
        },
        {
          "label": "JK",
          "code": "7"
        },
        {
          "label": "Others (Specify)",
          "code": "9"
        }
      ]
    },
    "9.5": {
      "number": 9.5,
      "question": "Which is your most preferred tyre brand?",
      "instruction":" RECORD VERBATIM",
      "type": "input"
    },
    "9.6a": {
      "number": "9.6a",
      "question": "What are the reasons for preferring this brand over others? ",
      "instruction":"RECORD VERBATIM AND THEN POST CODE -------",
      "type": "input",
      placeHolder:"reasons"
    },
    "9.6": {
      "number": 9.6,
      // "question": "What are the reasons for preferring this brand over others? ",
      "instruction":"RECORD VERBATIM AND THEN POST CODE -------",
      "type": "radio",
      subLabel:"Respondent Answers",
      "options": [
        {
          "label": "It is affordable",
          "code": "1"
        },
        {
          "label": "Durable",
          "code": "2"
        },
        {
          "label": "Safe",
          "code": "3"
        },
        {
          "label": "Superior quality",
          "code": "4"
        },
        {
          "label": "Used by other drivers",
          "code": "5"
        },
        {
          "label": "Persuasive Marketing",
          "code": "6"
        },
        {
          "label": "Easily available at all halting points",
          "code": "7"
        },
        {
          "label": "Recommended by mechanics",
          "code": "8"
        },
        {
          "label": "Also provides healthcare services at the Trans-Shipment Locations (TSL)(TSLs)",
          "code": "9"
        },
        {
          "label": "Have been using this brand for a long time",
          "code": "10"
        },
        {
          "label": "Brand is preferred by the owner/influencer",
          "code": "11"
        },
        {
          "label": "Servicing",
          "code": "12"
        },
        {
          "label": "All of the above",
          "code": "13"
        },
        {
          "label": "Can’t Say",
          "code": "14"
        },
        {
          "label": "Others (Specify)",
          "code": "99"
        }
      ]
    },
   "9.7": {
      "number": 9.7,
      "question": "What is your opinion about Apollo Tyres ",
      "type": "RatingSlider",
      "label": " Insert 5 Point Scale \r\nVery Good 5   4    3   2   1   Very Poor",
      label1:"Very Good ",
      label2:"Very Poor",
      "lableOptions": [
        {
          "label": "5 ",
          "value": "5"
        },
        {"label": "4",
          "value": "4"},
          
          {
           "label": "3",
          "value": "3" 
          },
        {"label": "2",
          "value": "2"

        },
        {
          "label": "1",
          "value": "1"
        }
      ]
    },
    "9.7(i)": {
      "number": "9.7(i)",
      "question": "Have you ever switched between\r\nbrands for tyres in the last 2 years?",
      "type": "radio",
      "options": [
        {
          "label": "Yes",
          "code": "1"
        },
        {
          "label": "No",
          "code": "2"
        }
      ],
      checkAsk:true,
      nextStep:4
    },
    "9.8a": {
      "number": "9.8",
      "question": "Can you please tell me which was your previous using brand and which is   your current using brand of tyre? ",
      instruction:"[ Please record information on the last shift of brands]",
      
      "type": "multiInput",
   

      formFieldsStep1: [
        { name: "9.8_Earlier", placeholder: "Earlier Brand" },
        { name: "9.8_Current ", placeholder: "Current Brand" },
       
      ],


      languageText: {

        en: {
          // title: "Respondent Demographic",
          Earlier:"Earlier",
          Current:"Current"

        },

        isCompulsory: true,
        // anwerNeed:all
      },
    },
    
    "9.9": {
      "number": 9.9,
      "question": "Can you please tell us the reason for shifting between brands? [MULTIPLE RESPONSE POSSIBLE]",
      "type": "multi",
      "options": [
        {
          "label": "Low price than the earlier brand",
          "code": "1"
        },
        {
          "label": "Durable",
          "code": "2"
        },
        {
          "label": "Safe",
          "code": "3"
        },
        {
          "label": "Superior Quality",
          "code": "4"
        },
        {
          "label": "Used by other truck drivers/peers",
          "code": "5"
        },
        {
          "label": "Persuasive Marketing",
          "code": "6"
        },
        {
          "label": "Easily available at all halting points",
          "code": "7"
        },
        {
          "label": "Recommended by mechanics",
          "code": "8"
        },
        {
          "label": "Also provides healthcare services at the TSLs",
          "code": "9"
        },
        {
          "label": "Have been using this brand for a long time",
          "code": "10"
        },
        {
          "label": "Brand is preferred by the owner/influencer",
          "code": "11"
        },
        {
          "label": "Servicing",
          "code": "12"
        },
        {
          "label": "All of the above",
          "code": "13"
        },
        {
          "label": "Have not changed the brand",
          "code": "14"
        },
        {
          "label": "Can’t Say",
          "code": "15"
        },
        {
          "label": "Others (Specify)",
          "code": "99"
        }
      ]
    },
    "9.10": {
      "number": "9.10",
      "question": "How would you rate brands of tyres on given parameters (Quality of a tyre includes smoothness, retreading, power, noise level, cushioning etc.) ",
      // "label": "Brand Name",
      heading:"Brand Name",
      type:"rank",
      "FREQUENCIES": [
        {
          "label": "Apollo Tyre",
          "value": "1"
        },
        {
          "label": "MRF",
          "value": "2"
        },
        {
          "label": "JK",
          "value": "3"
        },
        {
          "label": "Bridgestone",
          "value": "4"
        },
        {
          "label": "Birla",
          "value": "5"
        },
        {
          "label": "Continental",
          "value": "6"
        },
        {
          "label": "Goodyear",
          "value": "7"
        },
        // {
        //   "label": "Other",
        //   "id": "99"
        // }
      ],
      "STATEMENTS": [
        {
          "label": "Price",
          "id": "9.10_1"
        },
        {
          "label": "Quality",
          "id": "9.10_2"
        },
        {
          "label": "Safety",
          "id": "9.10_3"
        },
        {
          "label": "Durability",
          "id": "9.10_4"
        },
        {
          "label": "Availability",
          "id": "9.10_5"
        },
        {
          "label": "Company image",
          "id": "9.10_6"
        },
        {
          "label": "Social work .",
          "id": "9.10_7"
        }
      ]
    },
    "9.11": {
      "number": 9.11,
      "question": "Before purchasing a tyre what will be the key factor a transporter/ truck driver will keep in his mind? (RANK)\r\nREAD OUT THE OPTIONS BEFORE RANKING",
      type:"multi",
      "options": [
        {
          "label": "Low price",
          "code": "1"
        },
        {
          "label": "Superior Quality",
          "code": "2"
        },
        {
          "label": "Used by other truck drivers/peers",
          "code": "3"
        },
        {
          "label": "Persuasive Marketing",
          "code": "4"
        },
        {
          "label": "Easily available at all halting points",
          "code": "5"
        },
        {
          "label": "Recommended by mechanics",
          "code": "6"
        },
        {
          "label": "Also provides healthcare services at the TSLs",
          "code": "7"
        },
        {
          "label": "Have been using this brand for a long time",
          "code": "8"
        },
        {
          "label": "Brand is preferred by the owner/influencer",
          "code": "9"
        },
        {
          "label": "Servicing",
          "code": "10"
        },
        {
          "label": "All of the above",
          "code": "11"
        },
        {
          "label": "Can’t Say",
          "code": "12"
        },
        {
          "label": "Others (Specify)",
          "code": "99"
        }
      ],
      // maxSelections:3,
    },
    "9.12": {
      "number": 9.12,
      "question": "Rank 3 major strengths of\r\nApollo tyres",
      "type": "multi",
      "options": [
        {
          "label": "Low price",
          "code": "1"
        },
        {
          "label": "Superior Quality",
          "code": "2"
        },
        {
          "label": "Used by other truck drivers/peers",
          "code": "3"
        },
        {
          "label": "Persuasive Marketing",
          "code": "4"
        },
        {
          "label": "Easily available at all halting Points",
          "code": "5"
        },
        {
          "label": "Recommended by mechanics",
          "code": "6"
        },
        {
          "label": "Also provides healthcare services at the TSLs",
          "code": "7"
        },
        {
          "label": "Have been using this brand for a long time",
          "code": "8"
        },
        {
          "label": "Brand is preferred by the owner/influencer",
          "code": "9"
        },
        {
          "label": "Servicing",
          "code": "10"
        },
        {
          "label": "All of the above",
          "code": "11"
        },
        {
          "label": "Can’t Say",
          "code": "12"
        },
        {
          "label": "Others (Specify)",
          "code": "99"
        }
      ],     
      maxSelections:3,
      // "depend on": "9.11",
      // "labels": "",
      // optionsDependOn: "9.11",
      // optionsRemove: [],
    },
    "9.13": {
      "number": 9.13,
      "question": "RANK 3 major weaknesses\r\nof Apollo tyres.",
      "type": "multi",
      maxSelections:3,
      "options": [
        {
          "label": "Price higher than competition",
          "code": "1"
        },
        {
          "label": "Inferior quality",
          "code": "2"
        },
        {
          "label": "Not aware of this brand",
          "code": "3"
        },
        {
          "label": "Not used by other drivers/peers",
          "code": "4"
        },
        {
          "label": "Not easily available/accessible",
          "code": "5"
        },
        {
          "label": "Not preferred by the owner/influencer",
          "code": "6"
        },
        {
          "label": "Mechanics recommend not to buy this brand",
          "code": "7"
        },
        {
          "label": "Don’t Know",
          "code": "8"
        },
        {
          "label": "Others (Specify)",
          "code": "99"
        },
        
      ]
    },
 
    "9.14a+b": {
      "number": "9.14a+b",
      "question": "If using Apollo tyres currently, from how long you are using this brand",
      type:"InputRadio",
     answer1:"In Years",
     answer2:"In Months",
    option1:"Not using Apollo Tyres",
     option2:"Yes, using Apollo tyres"
    

    },
  
    "9.14c": {
      "number": "9.14c",
      "question": "Not using Apollo tyres",
      "type": "input"
    },
    "9.15": {
      "number": 9.15,
      "question": "What are the reasons for not using\r\nApollo tyres?",
      "type": "multi",
      "options": [
        {
          "label": "Price higher than competition",
          "code": "1"
        },
        {
          "label": "Inferior quality",
          "code": "2"
        },
        {
          "label": "Not aware of this brand",
          "code": "3"
        },
        {
          "label": "Not used by other drivers/peers",
          "code": "4"
        },
        {
          "label": "Not easily available/accessible",
          "code": "5"
        },
        {
          "label": "Not preferred by the owner/influencer",
          "code": "6"
        },
        {
          "label": "Mechanics recommend not to buy this brand",
          "code": "7"
        },
        {
          "label": "Don’t Know",
          "code": "8"
        },
        {
          "label": "Others (Specify)",
          "code": "9"
        },
        
      ]
    },
    "9.16": {
      "number": 9.16,
      "question": "What perception do you have about\r\nBrand Apollo as a tyre manufacturer?",
      "type": "multi",
      "options": [
        {
          "label": "High priced premium product",
          "code": "1"
        },
        {
          "label": "Variety of products for all types of Trucks",
          "code": "2"
        },
        {
          "label": "Cares for its customer",
          "code": "3"
        },
        {
          "label": "Value for money/Cost effective",
          "code": "4"
        },
        {
          "label": "Superior quality products",
          "code": "5"
        },
        {
          "label": "Safe and reliable",
          "code": "6"
        },
        {
          "label": "Easily accessible brand",
          "code": "7"
        },
        {
          "label": "Caters to the comfort of the truck Drivers",
          "code": "8"
        },
        {
          "label": "Tyres with longer life",
          "code": "9"
        },
        {
          "label": "Owner’s pride",
          "code": "10"
        },
        {
          "label": "Only rich truck owners can afford this brand",
          "code": "11"
        },
        {
          "label": "It is better only for long distance Travel",
          "code": "12"
        },
        {
          "label": "It is only better for short distance Travel",
          "code": "13"
        },
        {
          "label": "It is just like any other tyre brand available in the market",
          "code": "14"
        },
        {
          "label": "Don’t Know/can’t say",
          "code": "15"
        },
        {
          "label": "Others (Specify)",
          "code": "99"
        },
       
      ]
    },
    "9.17": {
      "number": 9.17,
      "question": "Have you ever recommended others\r\nto purchase Apollo tyres",
      "type": "radio",
      "options": [
        {
          "label": "Yes",
          "code": "1"
        },
        {
          "label": "No",
          "code": "2"
        }
      ]
    },
    "9.18": {
      "number": 9.18,
      "question": "What is the perception of Apollo\r\nTyres’ Limited in Trucker’s mind",
      "type": "radio",
      "options": [
        {
          "label": "Apollo produces high quality tyres",
          "code": "1"
        },
        {
          "label": "Apollo produces high priced tyres",
          "code": "2"
        },
        {
          "label": "Apollo produces high quality tyres in good price bracket",
          "code": "3"
        },
        {
          "label": "Apollo produces average quality tyres in high price bracket",
          "code": "4"
        },
        {
          "label": "Apollo produces high quality tyres in very reasonable price brackets",
          "code": "5"
        },
        {
          "label": "Others (Specify)",
          "code": "9"
        }
        
      ],
      termination:true,

      // checkAsk:true,
      // nextStep:7
    },
    "9.19": {
      "number": 9.19,
      "question": "Do you think ATF (Apollo Tyres Foundation)  is doing a good work that benefit the common person like you?",
      "type": "radio",
      "options": [
        {
          "label": "Yes",
          "code": "1"
        },
        {
          "label": "No",
          "code": "2"
        },
        {
          "label": "Don’t know/can’t say",
          "code": "3"
        },
       
      ],
      //  checkAsk:true,
      // nextStep:2,
      "instruction": "INSTRUCTION: ASK FROM THOSE WHO HAVE CODED”1” IN 7.1 TERMINATE THE INTERVIEW OTHERWISE."
    },
    "9.21": {
      "number": 9.21,
      "question": "Do you think the purchasing of Apollo tyres has increased considering the works that ATF is doing?",
      "type": "radio",
      "options": [
        {
          "label": "Very much",
          "code": "1"
        },
        {
          "label": "To an extent",
          "code": "2"
        },
        {
          "label": "Not much",
          "code": "3"
        },
        {
          "label": "Don’t know/can’t say",
          "code": "4"
        },
        
      ]
    },
    "9.22": {
      "number": "9.22",
      "question": "Do you think the strategy used by Apollo Tyres Limited by running health clinics in India will enhance the sale of its brand in the country?",
      "type": "radio",
      "options": [
        {
          "label": "Very much",
          "code": "1"
        },
        {
          "label": "To an extent",
          "code": "2"
        },
        {
          "label": "Not much",
          "code": "3"
        },
        {
          "label": "Don’t know/can’t say",
          "code": "4"
        },
        
      ]
    },
    "9.23": {
      "number": "9.23",
      "question": "Can you explain the reason for your answer to above question\r\n\r\n",
      subLabel:"Respondent answers for 9.22",
      "type": "input",
      "instruction": "\r\n\r\nPlease note VERBATIM for any of the options mentioned above",
      optionforShow:[
        { label: "Very much", code: "1" },
        { label: "To an extent", code: "2" },
        { label: "Not much", code: "3" },
        { label: "Don’t know/can’t say", code: "4" },
      ]
      
    },
    "9.24": {
      "number": 9.24,
      "question": "What could be the reasons for which Apollo is providing healthcare services to the truckers?",
      "type": "multi",
      "options": [
        {
          "label": "Company wants to improve the health conditions of the truckers",
          "code": "1"
        },
        {
          "label": "Company cares for its customers",
          "code": "2"
        },
        {
          "label": "Company wants to add value to the lives of its customers",
          "code": "3"
        },
        {
          "label": "Improving the company’s image among its customers",
          "code": "4"
        },
        {
          "label": "To increase sales of their products",
          "code": "5"
        },
        {
          "label": "Don’t know/can’t say",
          "code": "6"
        },
        {
          "label": "Others (Specify)",
          "code": "9"
        },
       
      ]
    },
    "9.26": {
      "number": 9.26,
      "question": "Would you recommend Apollo Tyres to other truckers based on the health services they provide?",
      "type": "radio",
     "options": [
        {
          "label": "Yes",
          "code": "1"
        },
        {
          "label": "No",
          "code": "2"
        },
      ]
    }
  }

    }






export default English