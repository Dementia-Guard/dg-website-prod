import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Box, IconButton, Typography, Paper } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';
import { RiRobot2Fill } from "react-icons/ri";
import './Chatbot.css';

const researchDetails = [
  {
    projectName: '4th Year Research Project',
    projectTitle: 'DementiaGuard: A Supportive App for Dementia Patients',
    description: 'This is a smart solution for supporting dementia patients. App is implemented to enhance cognitive health and improve the quality of life for individuals affected by Alzheimer’s Disease by integrating personalized Cognitive Health Improvement Activities, an innovative Voice Enabled Therapy Assistant, Geo-Location Fencing with security measurements, and advanced MRI analysis for medical personals. ​',
    appName: 'DementiaGuard',
    stakeHolders:[
      {
        "stakeHolder": "patients",
        "appType": "mobile",
        "platform": "android",
      },
      {
        "stakeHolder": "caregivers",
        "appType": "mobile",
        "platform": "android",
      },
      {
        "stakeHolder": "doctors",
        "appType": "web",
        "platform": "web",
      },
    ],
    contributors: [
      {
        name: 'Vidusha T. Jayaweera',
        role: 'Team Leader',
        email: 'vidushatjayaweera@gmail.com',
        linkedin: 'https://www.linkedin.com/in/vidusha-t-jayaweera/',
        contribution: 'Developed the voice-enabled therapy assistant and integrated it with the app.',
      },
      {
        name: 'Hasindu Ranasinghe',
        role: 'Team Member',
        email: 'hasinduranasinghe2098b@gmail.com',
        linkedin: 'https://www.linkedin.com/in/hasindu-ranasinghe-3327b2216/',
        contribution: 'Implemented the MRI analysis feature and personalized treatment plan generation feature for medical professionals.',
      },
      {
        name: 'Sanjana Nilanka',
        role: 'Team Member',
        email: 'nilankasanjana803@gmail.com',
        linkedin: 'https://www.linkedin.com/in/sanjana-nilanka/',
        contribution: 'Worked on the cognitive health improvement activities and their integration into the app.',
      },
      {
        name: 'Mohommad Shabeer',
        role: 'Team Member',
        email: 'moshdev2213@gmail.com',
        linkedin: 'https://www.linkedin.com/in/mohommad-shabeer-88328226b/',
        contribution: 'Developed the geo-location fencing feature with the wearable device.',
      },
    ],
    supervisor:{
      name: 'Ms. Sanjeevi Chandrasiri',
      role: 'Supervisor',
      email: '',
      linkedin: 'https://www.linkedin.com/in/sanjeevi-chandrasiri-6154b319/',
      occupation: 'Senior Lecturer, Department of Information Technology, SLIIT',
    },
    coSupervisor:{
      name: 'Dr. Dharshana Kasthurirathna',
      role: 'Co-Supervisor',
      email: '',
      linkedin: 'https://www.linkedin.com/in/dharshana-kasthurirathna-a4a3275/',
      occupation: 'Assistant Professor, Department of Computer Science, SLIIT',
    },
    Researchpaper:{
      title: 'DementiaGuard – Integrated Digital Healthcare Solution for Dementia Care',
      authors: [
        'Vidusha T. Jayaweera',
        'Hasindu Ranasinghe',
        'Sanjana Nilanka',
        'Mohommad Shabeer',
        'Ms. Sanjeevi Chandrasiri',
        'Dr. Dharshana Kasthurirathna'
      ],
      abstract:`Alzheimer’s Disease (AD), a progressive 
        neurodegenerative disorder, affects millions worldwide, leading to 
        significant challenges for patients and caregivers. Early detection 
        and effective caregiving are essential for addressing the issues 
        faced by these individuals. Previous studies on AD management 
        often face limitations, including a lack of interactive therapy, 
        cognitive engagement, comprehensive monitoring systems, and 
        early detection with personalized treatment planning. This 
        research aims to bridge these gaps by introducing 
        DementiaGuard, a web and mobile-based platform designed to 
        enhance early detection, caregiving, and patient safety. The 
        application offers a deep neural network-based MRI Analysis, 
        enabling early detection and disease progression tracking, the 
        results of which are used to create personalized treatment 
        planning with an expert system. The Cognitive Health 
        Improvement System provides personalized exercises to enhance 
        memory, problem-solving, and attention, helping to slow cognitive 
        decline. Furthermore, an AI-driven Voice-Enabled Therapy 
        Assistant sustains social interaction and emotional support 
        through reminiscence therapy. The platform also integrates a 
        Geolocation Fencing System using IoT, GPS, BLE, RF, and LoRa 
        technologies to ensure safety by monitoring both indoor and 
        outdoor movements through automated notifications. These 
        advancements can support individuals with dementia in 
        maintaining cognitive function, independence, and quality of life 
        while reducing caregiver burden. The DementiaGuard emphasizes 
        the importance of leveraging technology to bridge existing gaps in 
        AD diagnosis, therapy, and safety by contributing to a more 
        accessible approach to dementia care.`,
      keywords: [
        'DementiaGuard',
        'Alzheimer’s Disease',
        'MRI Analysis',
        'Cognitive Health',
        'Therapy Assistant',
        'Geolocation Fencing',
      ],
      publicationStatus: 'Submitted for publication',
      publicationDate: 'NOT PUBLISHED YET',
      conference: '7th Global Power, Energy and Communication Conference - GPECOM2025',
    },
    location: 'Sri Lanka',
  }
];

const parseResponse = (text) => {
  const lines = text.split('\n');
  let inList = false;
  let html = '';

  const urlRegex = /(?<!href=")(https?:\/\/[^\s]+)/g;

  lines.forEach((line) => {
    let processedLine = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    if (!/<a\s+href="/i.test(processedLine)) {
      processedLine = processedLine.replace(urlRegex, (url) => {
        let placeholder = 'Link';
        if (url.includes('linkedin.com')) {
          placeholder = 'LinkedIn Profile';
        } else if (url.includes('research')) {
          placeholder = 'Research Paper';
        }
        return `<a href="${url}" target="_blank" rel="noopener noreferrer">${placeholder}</a>`;
      });
    }

    if (processedLine.trim().startsWith('*')) {
      if (!inList) {
        html += '<ul>';
        inList = true;
      }
      const listItem = processedLine.replace(/^\*\s*/, '').trim();
      if (listItem) {
        html += `<li>${listItem}</li>`;
      }
    } else {
      if (inList) {
        html += '</ul>';
        inList = false;
      }
      if (processedLine.trim()) {
        html += `<p>${processedLine}</p>`;
      }
    }
  });

  if (inList) {
    html += '</ul>';
  }

  return html;
};

const Chatbot = ({ themeMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollTo({
        top: messagesEndRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages]);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages([...messages, userMessage]);
    setInput('');

    try {
      const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': import.meta.env.VITE_GEMINI_API_KEY
        },
        body: JSON.stringify({
          contents: [
            {
              role: 'user',
              parts: [
                {
                  text: `You are a chatbot representing our final year research project, developed by a four-member group. Here are our research details: ${JSON.stringify(researchDetails)}. 
Answer the user's question as if you are us, using first-person language (e.g., "we," "our," "us") and avoiding third-person references (e.g., "the developers"). 
Provide a concise, accurate, and relevant response. 
If the question is directly related to our research (e.g., about DementiaGuard, its features, contributors, or research details), base the answer solely on the provided research details. 
If the question is related to dementia or Alzheimer’s Disease but not specifically covered in the research details (e.g., general questions about dementia), provide a brief answer using general knowledge, framed in the context of our DementiaGuard project, and avoid contradicting the research details. 
If the question is unrelated to our research or dementia (e.g., weather, unrelated topics), respond with: "Sorry, that question is outside the scope of our research project. Please ask about DementiaGuard or dementia-related topics."
For any URLs mentioned in the response (e.g., LinkedIn profiles, publication links), format them as HTML links with a descriptive placeholder, like this: <a href="URL">LinkedIn Profile</a> or <a href="URL">Research Paper</a>.
If no specific answer is found in the research details for a project-related question, respond with: "We don't have specific information on that in our research details. Please ask about DementiaGuard's features, contributors, or research."
User question: ${input}`
                }
              ]
            }
          ]
        })
      });

      const data = await response.json();
      const botMessage = {
        role: 'bot',
        content: parseResponse(data.candidates[0].content.parts[0].text)
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      setMessages((prev) => [
        ...prev,
        { role: 'bot', content: parseResponse('Sorry, something went wrong. Please try again.') }
      ]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Box sx={{ position: 'fixed', bottom: 20, right: 20, zIndex: 1000 }}>
      {!isOpen && (
        <IconButton
          onClick={toggleChatbot}
          sx={{
            backgroundColor: themeMode === 'light' ? '#0bad0a' : '#61d860',
            color: 'white',
            '&:hover': { backgroundColor: themeMode === 'light' ? '#61d860' : '#0bad0a' },
            p: 2,
          }}
        >
          <ChatIcon />
        </IconButton>
      )}
      {isOpen && (
        <Paper
          elevation={3}
          sx={{
            width: '25vw',
            height: '70vh',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: themeMode === 'light' ? '#fff' : '#090e10',
            borderRadius: '15px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              px: 2,
              py: 1,
              backgroundColor: themeMode === 'light' ? '#0bad0a' : '#61d860',
              color: 'white',
              borderRadius: '15px 15px 0 0',
            }}
          >
            <Typography variant="h6" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
              <RiRobot2Fill style={{ fontSize: 22, fontWeight: 700 }} />
              Chatbot
            </Typography>
            <IconButton onClick={toggleChatbot} sx={{ color: 'white' }}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box
            ref={messagesEndRef}
            sx={{
              flex: 1,
              overflowY: 'auto',
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              gap: 1
            }}
          >
            {messages.map((msg, index) => (
              <Box
                key={index}
                sx={{
                  alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                  backgroundColor: msg.role === 'user' ? (themeMode === 'light' ? '#e3f2fd' : '#616161') : (themeMode === 'light' ? '#f5f5f5' : '#757575'),
                  borderRadius: 2,
                  p: 1,
                  maxWidth: '70%'
                }}
              >
                {msg.role === 'user' ? (
                  <Typography variant="body2">{msg.content}</Typography>
                ) : (
                  <Typography
                    variant="body2"
                    sx={{ '& p': { margin: 0 }, '& ul': { paddingLeft: 4, margin: 0 }, '& a': { color: themeMode === 'light' ? '#105bd8' : '#90caf9', textDecoration: 'underline' } }}
                    dangerouslySetInnerHTML={{ __html: msg.content }}
                  />
                )}
              </Box>
            ))}
          </Box>
          <Box sx={{ p: 2, borderTop: '1px solid', borderColor: 'divider' }}>
            <div className="Message">
              <input
                title="Write Message"
                placeholder="Ask about the research..."
                className="MsgInput"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                autoComplete="off"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.0"
                width="30.000000pt"
                height="30.000000pt"
                viewBox="0 0 30.000000 30.000000"
                preserveAspectRatio="xMidYMid meet"
                className="SendSVG"
                onClick={handleSend}
              >
                <g transform="translate(0.000000,30.000000) scale(0.100000,-0.100000)" fill="#0bad0a" stroke="none">
                  <path d="M44 256 c-3 -8 -4 -29 -2 -48 3 -31 5 -33 56 -42 28 -5 52 -13 52 -16 0 -3 -24 -11 -52 -16 -52 -9 -53 -9 -56 -48 -2 -21 1 -43 6 -48 10 -10 232 97 232 112 0 7 -211 120 -224 120 -4 0 -9 -6 -12 -14z"></path>
                </g>
              </svg>
              <span className="l"></span>
            </div>
          </Box>
        </Paper>
      )}
    </Box>
  );
};

export default Chatbot;