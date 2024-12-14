const tamil = {
  Section1: {


    Q1:
    {
      number: "QH",
      question: "Please select the appropriate option from the list. This household is located in …",
      instruction: "Please check that the residence is not used for commercial purposes based on observation. Survey can be conducted with a householder or CWE for identifying Premium. Before knocking the door select the correct option for QH",
      response: "",
      options: [
        { label: "A gated community with 24 hours security", code: "1" },
        { label: "A gated community with 24 hours security and amenities like swimming pool / gym /play area etc.", code: "2" },
        { label: "No 24 hours security but in a premium locality", code: "3" },
        { label: "Individual row house or bungalow", code: "4" },
        { label: "No 24 hours security and no premium locality", code: "5" },
        { label: "Other specify ……….", code: "6" },

      ],
      // sd
      termination: "true",
      terminationCodes: ["3", "5"],
      type: "radio",
      first: true,
      // audio:true
    },

   

    Q2_a:
    {
      number: "Introduction",
      question: " ",
      label: "The survey is very short and will only take about 5 minutes. May I please proceed? ",
      response: " ",
      instruction: "Hello! I am _from __(Agency name) and we are conducting a brief survey to gather information for empanelment to study TV viewing behaviour.Since we get an idea of TV viewing from overall lifestyle and education, we'll be asking a few questions on ownership of household items, education, and languages spoken in your home",

      options: [
        { label: "Yes", code: "1" },
        { label: "No", code: "2" }

      ],
      type: "radio",
      termination: true,
      terminationCodes: ["2"],
      // audio:true


    },

    Q2: {
      number: "QConsent",
      question: "Before we start with the survey, may I request your consent to use your contact details (e.g., email or phone) to follow up on your survey responses. Your information will be kept confidential and used only for this purpose. ",
      response: "",
      instruction: "Proceed only if selected yes",


      label: "Do you consent to share your contact details?",
      options: [
        { label: "Yes, I consent.", code: "1" },
        { label: "No, I do not consent.", code: "2" },

      ],
      type: "radio",
      termination: true,
      terminationCodes: ["2"],
      // audio:true

    },

    QRes:
    {
      number:"QRes1",
      question: "Can you please tell me your name",
      response: "",
      type: "input",
      "placeHolder": "",
      "label": "Name",

    },
    QRes2:
    {
      number:"QRes2",
      question: "Can you please tell me your age",
      response: "",
     "inputType": "number",
      type: "input",
      "placeHolder": "",
      "label": "Age",

    },
    QRes3:{
      number:"QRes3",
      question: "select the gender",
      response: "",
      type: "radio",
      "placeHolder": "",
      "label": "Gender",
      options: [
        { label: "Male", code: "1" },
        { label: "Female", code: "2" },
        { label: "other", code: "3" },
      ],

    },
    Q3:
    {
      number: "Q1",
      "question": "நீங்களோ அல்லது உங்களுடைய குடும்ப உறுப்பினர்கள் யாரேனும் பின்வரும் நிறுவன வகைகளில் எதிலேனும் வேலை செய்கிறீர்களா என தயவு செய்து எனக்குச் சொல்ல முடியுமா? ",
      response: "",
      type: "radio",
      options: [
          {
            "label": "மார்க்கெட்டிங்/மார்க்கெட் ரிசர்ச்",
            "code": "1"
          },
          {
            "label": "மீடியா (அச்சு & டிவி) /ஒளிபரப்புகிற ஏஜென்சி /டிவி சேனல் நெட்வொர்க்",
            "code": "2"
          },
          {
            "label": "டிடிஎச் /ஐபிடிவி/கேபிள் ஆப்ரேட்டர் உடன் வேலை செய்வது",
            "code": "3"
          },
          {
            "label": "விளம்பரம்/பொது ஜன தொடர்பு/மீடியா திட்டமிடுகிற ஏஜென்சி",
            "code": "4"
          },
          {
            "label": "பத்திரிக்கையாளர்/ஆங்கர் (முழு நேரம் அல்லது பகுதி நேரம்)",
            "code": "5"
          },
          {
            "label": "கடந்த 2 வருடங்களில் ஏதேனும் டிவி/மீடியா பேனலில் பகுதியாக (உதாரணம் பார்க்இண்டியா டிவி பேனல்)",
            "code": "6"
          },
          {
            "label": "மேலேயுள்ளவற்றில் எதுவுமில்லை",
            "code": "7"
          }
        ]
        ,
      termination: true,
      terminationCodes: ["1", "2", "3", "4", "5", "6"],
    },


    Q4:
    {
      number: "Q2_a",
      question: "இந்தக் குடும்பத்தின் முக்கிய வருமானதாரின் பெயர் என்ன என்பதை தயவு செய்து எனக்குச் சொல்ல முடியுமா. இதன் மூலம். குடும்பச் செலவிற்கு மிகவம் அதிகம் பங்களிக்கிற நபரை நான் குறிப்பிடுகிறேன்,",
      response: "",
      type: "input",
      "placeHolder": "please mention name",
      "label": "பெயர்",

    },




    Q6:
    {
      "number": "Q2_b",
      "question": "தயவு செய்து _____ -ன் கல்விக்கான சரியான பதிலைத் தேர்ந்தெடுக்கவும்",
      "type": "radio",
      "    placeHolder": "",
      "label": "பெயர்",
      "options": [
          {
            "label": "படிப்பறிவற்றவர்",
            "code": "1"
          },
          {
            "label": "படிப்பறிவுள்ளவர், ஆனால் முறையான பள்ளிப்படிப்பு இல்லை/பள்ளிப்படிப்பு - 4 வருடங்கள் வரை",
            "code": "2"
          },
          {
            "label": "பள்ளிப்படிப்பு 5 முதல் 9 ஆம் வகுப்பு",
            "code": "3"
          },
          {
            "label": "எஸ்எஸ்சி / ஹெச்எஸ்சி (10வது-12 வது)",
            "code": "4"
          },
          {
            "label": "ஒரு கல்லூரிப் படிப்பு (டிப்ளமோ உட்பட) ஆனால் பட்டதாரி அல்ல",
            "code": "5"
          },
          {
            "label": "பட்டதாரி :பொதுவானது (பி.ஏ, பி.எஸ்சி,பி.காம்)/ முது நிலைப் பட்டதாரி :பொதுவானது (எம்.ஏ,எம்.எஸ்சி, எம்.காம்,எம்.ஃபில்)",
            "code": "6"
          },
          {
            "label": "பட்டதாரி :தொழில் பூர்வமானது (பி.ஈ., எம்.பி.பி.எஸ்,பி.டெக்)/ முது நிலைப் பட்டதாரி :தொழில் பூர்வமானது (எம்.ஈ,எம்.டெக்,எம்.பி.ஏ)",
            "code": "7"
          }
        ]
        ,
      audio:true
    },

    Q7:
    {
      "number": "Q2_c",
      "question": "தயவுசெய்து  நீங்கள் இந்த நீடித்துழைக்கும் சாதனங்களில்/பொருள்களில் எவற்றை வீட்டில் வைத்திருக்கிறீர்கள் என்பதை என்னிடம் சொல்லுங்கள்? இது உங்களுக்கு , உங்கள் குடும்பத்தினருக்கு சொந்தமானதாக இருக்கலாம் அல்லது வேலை அளித்தவர் அளித்திருக்கலாம் அல்லது அது நீங்கள் வசிக்கும் வீட்டில் இருந்திருக்கலாம்; ஆனால் இது உங்களுடைய அல்லது உங்கள் குடும்பத்தினரின் உபயோகத்திற்கானதாக இருக்க வேண்டும்.  இந்த சாதனங்கள் வேலை செய்யும் நிலையில் இருக்க வேண்டும்.",

      "type": "multi",

      "label": "பெயர்",
      "options": [
          {
            "label": "ஏர் கண்டிஷனர்",
            "code": "1"
          },
          {
            "label": "ஃப்ரிட்ஜ்-ரெஃப்ரிஜிரேட்டர்",
            "code": "2"
          },
          {
            "label": "வாஷிங் மெஷின்",
            "code": "3"
          },
          {
            "label": "கலர் டிவி/எல்சிடி/எல்ஈடி/பிளாஸ்மா டிவி",
            "code": "4"
          },
          {
            "label": "பெர்சனல் கம்ப்யூட்டர் / லேப்டாப்",
            "code": "5"
          },
          {
            "label": "மின் இணைப்பு (மின்சாரம் கிடைக்கக்கூடிய தன்மை)",
            "code": "6"
          },
          {
            "label": "சீலிங் ஃபேன்",
            "code": "7"
          },
          {
            "label": "கேஸ் ஸ்டவ்/பிஎன்ஜி ஸ்டவ்",
            "code": "8"
          },
          {
            "label": "இரு சக்கர வாகனம்",
            "code": "9"
          },
          {
            "label": "கார் / ஜீப் / வேன்",
            "code": "10"
          },
          {
            "label": "விவசாய நிலம்",
            "code": "11"
          }
        ]
        ,

      termination: true,
      autoCodeQuestion: true,
      autoCodeQuestionVar: "NCCS",
      audio:true
    },

    Q7_a:
    {
      "number": "Q2_d1",
      "question": "You mentioned you own a car. Can you please tell me if the car used predominantly for commercial purpose?",
      instruction:"Terminate if the HH has just one car which is predominantly used for commercial purpose",
      "type": "radio",
    
      
      options: [
        {
          "label": "Yes",
          "code": "1"
        },
        {
          "label": "No",
          "code": "2"
        }
      ],
      termination: true,
      terminationCodes:["1"],
    },
    
    Q7_b:
    {
      "number": "Q2_d2",
      "question": "What was the approximate cost of the car (the one used for your travel i.e. non-commercial purpose) at the time of purchase?",
      label:"Price Range",
      "type": "radio",
      
      
      options: [
        { label: "Below INR 15 Lakhs", code: "1" }, 
        { label: "15 to 20 Lakhs", code: "2" },
        { label: "21 to 30 Lakhs", code: "3" },
        { label: "31 to 40 Lakhs", code: "4" },
        { label: "41 to 50 Lakhs", code: "5" },
        { label: "50 Lakhs +", code: "6" }
      ]
      ,
    },


    Q8:
  {
    "number": "Q2_e",
    "question": "நீங்கள் இந்த நீடித்துழைக்கும் சாதனங்களில்/பொருள்களில் எவற்றை வீட்டில் வைத்திருக்கிறீர்கள் என்பதை என்னிடம் சொல்லுங்கள்?",

    "type": "rate",


    heading: "பெயர்",
    "options": "",
    "lableoptions": "",
    "STATEMENTS": [
      {
        "label": "Air cooler",
        "id": "Q2_e_1"
      },
      {
        "label": "Tablet computer (example: Tab OR iPad etc…and must not be a pure reader such as kindle)",
        "id": "Q2_e_2"
      },
      {
        "label": "Smart TV",
        "id": "Q2_e_3"
      },
      {
        "label": "Non-smart TV which is connected to internet/ WIFI / Fiber via set-top box or device such as chrome cast or Amazon fire stick",
        "id": "Q2_e_4"
      },
      {
        "label": "Modular Kitchen",
        "id": "Q2_e_5"
      },
      {
        "label": "Microwave",
        "id": "Q2_e_6"
      }
    ],
    "FREQUENCIES": [
      {
        "label": "Yes",
        "value": "1"
      },
      {
        "label": "No",
        "value": "2"
      }
    ],
    termination: true,
  },

  Q9:
  {
    "number": "Q3",
    "question": "உங்கள் வீட்டில், இந்த டிவி இணைப்புகளில் எவை தற்சமயம் இருக்கின்றன? நீங்கள் பல டிவிகளுக்காக பல இணைப்புகள் வைத்திருக்கிறீர்கள் எனில். தயவு செய்து அனைத்து வகை இணைப்புகளையும் தேர்ந்தெடுக்கவும்.",

    "type": "multi",
    "    placeHolder": "",
    "label": "பெயர்",
    "options": [
      {
        "label": "DD Direct/DD Freedish OR Pay DTH (Tata Play, Dish TV, Sun Direct, Zing Digital, Airtel Xstream set top box) ",
        "code": "1"
      },
      {
        "label": "சாதாரண ஆன்டனா",
        "code": "2"
      },
      {
        "label": "உள்ளூர் கேபிள் ஆப்ரேட்டர் (செட் டாப் பாக்ஸ் உடன்)",
        "code": "3"
      },
      {
        "label": "எதுவுமில்லை",
        "code": "4"
      },
      {
        "label": "ஐபிடிவி/இன்டர்நெட்- அடிப்படையிலான ஸ்ட்ரீமிங் சாதனங்கள்/ வைஃபை",
        "code": "5"
      },
    
    ],

    termination: true,
    terminationCodes: ["4"]
  },

  Q10:
  {
    "number": "Q4_a",
    "question": "தயவு செய்து இந்த வீட்டிற்காக பட்டடியலிலிருந்து சரியான விருப்பத் தேர்வைத் தேர்ந்தெடுக்கவும்",
    "instruction": "",
    " inputType": "",
    "  inputLimit": "",
    "type": "radio",
    "    placeHolder": "",
    "label": "பெயர்",
    "options": [
      {
        "label": "1 பிஎச்கே (1 பெட்ரூம், ஹால், கிச்சன்) அல்லது சிறியது",
        "code": "1"
      },
      {
        "label": "2 பிஎச்கே (2 பெட்ரூம்ஸ், ஹால், கிச்சன்)",
        "code": "2"
      },
      {
        "label": "3 பிஎச்கே (3 பெட்ரூம்ஸ், ஹால், கிச்சன்)",
        "code": "3"
      },
      {
        "label": "4 பிஎச்கே (4 பெட்ரூம்ஸ், ஹால், கிச்சன்) அல்லது பெரியது",
        "code": "4"
      }
    ]
    ,


    termination: true,
    terminationCodes: ["1"]
  },

  Q4b: {
    "number": "Q4_b",
    "question": "தயவு செய்து  பட்டடியலிலிருந்து சரியான விருப்பத் தேர்வைத் தேர்ந்தெடுக்கவும் ",
    "instruction": "",
    " inputType": "",
    "  inputLimit": "",
    "type": "rate",
    "    placeHolder": "",
    // "label": "Lifestyle",
    heading: "பெயர்",
    "options": "",
    "lableoptions": "",
    "STATEMENTS": [
      {
        "label": "Membership of a privileged Club or Gymkhana (e.g., The Club, Recreation Club, Club Millennium).",
        "id": "Q4_b_1"
      },
      {
        "label": "Premium Gym membership ",
        "id": "Q4_b_2"
      },
      {
        "label": "கடந்த 2 ஆண்டுகளில் குடும்ப உறுப்பினர்களில் யாராவது 4/5 ஹோட்டலில் தங்கியிருந்தால்",
        "id": "Q4_b_3"
      },
      {
        "label": "Purchased a mobile handset costing more than ₹ 60,000 in the past two years.",
        "id": "Q4_b_4"
      },
      {
        "label": "The monthly electricity bill is above ₹10,000.",
        "id": "Q4_b_5"
      },
      {
        "label": "Is a regular golf player OR in Horse riding OR Scuba diving ",
        "id": "Q4_b_6"
      }, {
        "label": "Visits Pubs/ Clubs / Restaurant for eating out at least once every week with individual expenditure exceeding INR 3000+ per visit",
        "id": "Q4_b_7"
      },
      {
        "label": "Travelled outside Asia in the past 2 years for leisure.",
        "id": "Q4_b_8"
      },
      {
        "label": "Own home gaming consoles (PS 5 OR Xbox series X)",
        "id": "Q4_b_9"
      }

    ],
    "FREQUENCIES": [
      {
        "label": "Yes",
        "value": "1"
      },
      {
        "label": "No",
        "value": "2"
      }
    ],
  },
  Q5a: {
    "number": "Q5",
    "question": "தயவு செய்து ____ வேலைக்காக பட்டடியலிலிருந்து சரியான விருப்பத் தேர்வைத் தேர்ந்தெடுக்கவும்",
   
    "type": "radio",

    "label": "பெயர்",
    options: [
      {
        "label": "பயிற்சி பெறாத ஊழியர்",
        "code": "1"
      },
      {
        "label": "பயிற்சி பெற்ற ஊழியர்",
        "code": "2"
      },
      {
        "label": "சிறு வியாபாரி",
        "code": "3"
      },
      {
        "label": "கடை உரிமையாளர்",
        "code": "4"
      },
      {
        "label": "வியாபாரி / தொழிலதிபர் - ஊழியர்களின் எண்ணிக்கை: யாருமில்லை",
        "code": "5"
      },
      {
        "label": "வியாபாரி / தொழிலதிபர் - ஊழியர்களின் எண்ணிக்கை: 1 முதல் 9 வரை",
        "code": "6"
      },
      {
        "label": "வியாபாரி / தொழிலதிபர் - ஊழியர்களின் எண்ணிக்கை: 10+",
        "code": "7"
      },
      {
        "label": "தொழிற்படிப்பு படித்து சுய-தொழில் செய்பவர்",
        "code": "8"
      },
      {
        "label": "கிளார்க்/ சேல்ஸ்மேன்",
        "code": "9"
      },
      {
        "label": "மேற்பார்வையாளர் நிலை",
        "code": "10"
      },
      {
        "label": "அலுவலர்/ எக்ஸிக்யூடிவ் -இளநிலை",
        "code": "11"
      },
      {
        "label": "அலுவலர்/எக்சிக்யூடிவ் -நடுநிலை/மேல்நிலை",
        "code": "12"
      },
      {
        "label": "சொந்தமாக நிலம் வைத்திருக்கிற விவசாயி",
        "code": "13"
      },
      {
        "label": "குத்தகைக்கு நிலம் எடுத்திருக்கிற விவசாயி",
        "code": "14"
      },
      {
        "label": "ஓய்வு பெற்றவர்",
        "code": "15"
      },
      {
        "label": "மற்றவர்கள்  குறிப்பிடவும்",
        "code": "98"
      }
    ]
    ,


  }
  ,
  Q6_a: {
    "number": "Q6_a",
    "question": "தயவு செய்து குடுபம்த்தில் உள்ள உறுப்பினர்களின் எண்ணிக்கையை எனக்குச் சொல்லவும். அதாவது ஒரே சமையலறையிலிருந்து உணவை பகிர்ந்து  கொள்கிறவர்கள் என்று அர்த்தம். தயவு செய்து விருந்தினர்கள். முழு நேர வீட்டு உதவியாள். அல்லது வீட்டில் ஒரே சமையலறையிலிருந்து உணவை பகிரந்து கொள்கிற மற்ற ஏதேனும் உறுப்பினர்களையும் சேர்த்துக் கொள்ளவும்.",
    "instruction": "",
    "inputType": "number",
    "inputLimit": 2,
    "type": "input",
    "    placeHolder": "",
    "label": "பெயர்",

    "termination": true,

  },
  

  Q32: {
    "number": "Q7_a",
    "question": "உங்களது குடும்ப உறுப்பினர்களிடையே பேசுகிற போது நீ்ங்கள் எந்த மொழிகளில் எல்லாம் பேசுகிறீர்கள்?",
    "instruction": "",
    " inputType": "",
    "  inputLimit": "",
    "type": "multi",
    "    placeHolder": "",
    "label": "பெயர்",
    "options": [
      {"label": "அஸ்ஸாமீஸ்", "code": "1"},
      {"label": "அவாதி", "code": "2"},
      {"label": "வங்காளம்", "code": "3"},
      {"label": "போஸ்பூரி", "code": "4"},
      {"label": "போடோ", "code": "5"},
      {"label": "பன்டெல்ஹந்தி", "code": "6"},
      {"label": "சத்தீஸ்காரியா", "code": "7"},
      {"label": "டாக்ரி", "code": "8"},
      {"label": "ஆங்கிலம்", "code": "9"},
      {"label": "கார்வாலி", "code": "10"},
      {"label": "குஜராத்தி", "code": "11"},
      {"label": "ஹிந்தி", "code": "12"},
      {"label": "கன்னடம்", "code": "13"},
      {"label": "காஷ்மீரி", "code": "14"},
      {"label": "ஹாஸி", "code": "15"},
      {"label": "கொங்கனி", "code": "16"},
      {"label": "குட்சி", "code": "17"},
      {"label": "லஸாய்/மிஸோ", "code": "18"},
      {"label": "மாஹாய்/மஹாதி", "code": "19"},
      {"label": "மைதிலி", "code": "20"},
      {"label": "மலையாளம்", "code": "21"},
      {"label": "மல்வானி", "code": "22"},
      {"label": "மனிபுரி", "code": "23"},
      {"label": "மராத்தி", "code": "24"},
      {"label": "மார்வாரி", "code": "25"},
      {"label": "நேபாளி", "code": "26"},
      {"label": "ஒரியா", "code": "27"},
      {"label": "மற்ற வெளிநாட்டு மொழிகள்", "code": "28"},
      {"label": "மற்ற இந்திய மொழிகள்", "code": "29"},
      {"label": "பஹாரி", "code": "30"},
      {"label": "பஞ்சாபி", "code": "31"},
      {"label": "சமஸ்கிருதம்", "code": "32"},
      {"label": "சாந்தலி", "code": "33"},
      {"label": "சிந்தி", "code": "34"},
      {"label": "தமிழ்", "code": "35"},
      {"label": "தெலுங்கு", "code": "36"},
      {"label": "துளு", "code": "37"},
      {"label": "உருது", "code": "38"}
    ]
    ,
    "lableoptions": "",
    "STATEMENTS": "",
    "FREQUENCIES": "",
    "lastOption": "",
    "termination": "",
    " terminationCodes": "",
    "audio": "",
    "randomize": "",
    "fixedCodes": "",
    " RandomizeOnce": "",
    " maxSelections": "",
    "  checkAsk": "",
    "readout": "",
    "depend on": "",
    "labels": ""
  },
  Q324: {
    "number": "Q7_b",
    "question": "மேலே குறிப்பிட்டுள்ள மொழிகளிடையே நீ்ங்கள் உங்கள் குடும்ப உறுப்பினர்களுடன் எந்த மொழியில் மிகவும் அடிக்கடி பேசுகிறீர்கள்?",

    " inputType": "",
    "  inputLimit": "",
    "type": "radio",
    "    placeHolder": "",
    "label": "பெயர்",
    "options": [
      {"label": "அஸ்ஸாமீஸ்", "code": "1"},
      {"label": "அவாதி", "code": "2"},
      {"label": "வங்காளம்", "code": "3"},
      {"label": "போஸ்பூரி", "code": "4"},
      {"label": "போடோ", "code": "5"},
      {"label": "பன்டெல்ஹந்தி", "code": "6"},
      {"label": "சத்தீஸ்காரியா", "code": "7"},
      {"label": "டாக்ரி", "code": "8"},
      {"label": "ஆங்கிலம்", "code": "9"},
      {"label": "கார்வாலி", "code": "10"},
      {"label": "குஜராத்தி", "code": "11"},
      {"label": "ஹிந்தி", "code": "12"},
      {"label": "கன்னடம்", "code": "13"},
      {"label": "காஷ்மீரி", "code": "14"},
      {"label": "ஹாஸி", "code": "15"},
      {"label": "கொங்கனி", "code": "16"},
      {"label": "குட்சி", "code": "17"},
      {"label": "லஸாய்/மிஸோ", "code": "18"},
      {"label": "மாஹாய்/மஹாதி", "code": "19"},
      {"label": "மைதிலி", "code": "20"},
      {"label": "மலையாளம்", "code": "21"},
      {"label": "மல்வானி", "code": "22"},
      {"label": "மனிபுரி", "code": "23"},
      {"label": "மராத்தி", "code": "24"},
      {"label": "மார்வாரி", "code": "25"},
      {"label": "நேபாளி", "code": "26"},
      {"label": "ஒரியா", "code": "27"},
      {"label": "மற்ற வெளிநாட்டு மொழிகள்", "code": "28"},
      {"label": "மற்ற இந்திய மொழிகள்", "code": "29"},
      {"label": "பஹாரி", "code": "30"},
      {"label": "பஞ்சாபி", "code": "31"},
      {"label": "சமஸ்கிருதம்", "code": "32"},
      {"label": "சாந்தலி", "code": "33"},
      {"label": "சிந்தி", "code": "34"},
      {"label": "தமிழ்", "code": "35"},
      {"label": "தெலுங்கு", "code": "36"},
      {"label": "துளு", "code": "37"},
      {"label": "உருது", "code": "38"}
    ]
    ,

    "depend on": "Q7_a",
    "labels": "",
    optionsDependOn: "Q7_a",
    optionsRemove: [],
  },

  Q3A: {
    "number": "Q8_a",
    "question": "தயவு செய்து உங்களை தொடர்பு கொள்வதற்கான விவரங்களை பகிரவும்- மொபைல்",
    "inputType": "number",
    inputLimit: 10,

    "label": "பெயர்",


    "type": "multiInput",
    "  placeHolder": "",

    formFieldsStep1: [
      { name: "Q8_a_1", placeholder: "Mobile Number 1", type: "number" ,inputLimit:"10"},
      { name: "Q8_a_2", placeholder: "Mobile Number -2 (optional)", type: "number" ,inputLimit:"10"},

    ],


    languageText: {

      en: {
        Q8_a1: "Mobile Number1",
        Q8_a2: "Mobile Number2"

      },

    },
  },
  Q34: {
    "number": "Q8_b",
    "question": "தயவு செய்து உங்களை தொடர்பு கொள்வதற்கான விவரங்களை பகிரவும்- லேண்டலைன்/ ஃபிக்ஸடு்லைன்",
    "instruction": "",
    " inputType": "",
    "  inputLimit": "",
    "type": "multiInput",
    "  placeHolder": "",

    formFieldsStep1: [
      { name: "Q8_b_1", placeholder: "லேண்டலைன்/ ஃபிக்ஸடு்லைன் 1" },
      { name: "Q8_b_2", placeholder: "லேண்டலைன்/ ஃபிக்ஸடு்லைன் 2" },

    ],


    languageText: {

      en: {

        Q8_b_1: "லேண்டலைன்/ ஃபிக்ஸடு்லைன் 1",
        Q8_b_2: "லேண்டலைன்/ ஃபிக்ஸடு்லைன் 2"


      },

      // isCompulsory: true,
    }
  },
  Q34_a: {
    "number": "Q8_cc",
    "question": "Please share your Email ID",
    "instruction": "",
    " inputType": "",
    "  inputLimit": "",
    "type": "",
    "  placeHolder": "",
label:"Email ID",
    
  },

  Q35: {
    "number": "Q8_c",
    "question": "Detailed address",
    "instruction": "",
    " inputType": "",
    "  inputLimit": "",
    "type": "multiInput",
    "  placeHolder": "",

    formFieldsStep1: [
      { name: "Q8_c_1", placeholder: "வீட்டு எண்" },
      { name: "Q8_c_2", placeholder: "பிலடிங் எண் பெயர்" },
      { name: "Q8_c_3", placeholder: "லேன்/தெரு/வார்டு எண்/லேன் பெயர்/தெரு/வார்டு எண்/பெயர்", type: "tel", label: "" },
      { name: "Q8_c_4", placeholder: "ஏரியா/இடத்தின் பெயர்",  },
      { name: "Q8_c_5", placeholder: "நகரத்தின் பெயர்" },
      { name: "Q8_c_6", placeholder: "பின் கோடு" ,type: "number"},
      { name: "Q8_c_7", placeholder: "லேண்ட்மார்க் 1" },
      { name: "Q8_c_8", placeholder: "லேண்ட்மார்க் 2" },
    ],


    languageText: {

      en: {
        // title: "Respondent Demographic",
        name: "Address line 1 - வீட்டு எண்",

        address: "Address line 2 - பிலடிங் எண் பெயர்",
        contact: "Address line 3 - லேன்/தெரு/வார்டு எண்/லேன் பெயர்/தெரு/வார்டு எண்/பெயர்",
        doorNo: "Address line 4 - ஏரியா/இடத்தின் பெயர்",
        floorNo: "Floor No.",
        houseName: "Address line 5 - நகரத்தின் பெயர்",
        streetName: "Address line 6 - பின் கோடு",
        areaName: "Address line 7 - லேண்ட்மார்க் 1",
        townName: "Address line 8 - லேண்ட்மார்க் 2",


      },

      isCompulsory: true,
      // anwerNeed:all
    },
    
  },
Q36:{
"number": "Q9Consent",
"question": "Broadcast Audience Research Council India (BARC India), a Joint Industry Body registered with the Ministry of Information & Broadcasting (MIB) manages the world's largest TV panel as a TV Viewership Measurement agency and generates authentic TV audience estimates - What India WatchesTM. ",
type:"Q9Consent",
label:"As a token of appreciation for their participation, the panel household also receives an incentive.Please request respondent to scan QR code in case they need more information."
},
  Q43: {
    "number": "Q9",
    "question": "நீங்கள் பேனலின் பகுதியாக இருப்பதற்கு விரும்புகிறீர்களா?",
    "instruction": "If selected yes, inform the respondent that he/she would receive a call/visit for next steps. Thank the respondent for participating in the survey before leaving the household ",
    " inputType": "",
    "  inputLimit": "",
    options: [
      { label: "Yes", code: "1" },
      { label: "No", code: "2" }

    ],
    type: "radio",



  }



},
Section2: {}
}

export default tamil