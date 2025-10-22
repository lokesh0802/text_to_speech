const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const OPENTTS_URL = 'http://localhost:5500';


// warp kr rha hu sare text ko ssml mae
// function toSSMLMixedHindiEnglish(text) {
//   return `<speak><s lang="hi">${text}</s></speak>`;
// }

app.post('/api/speak', async (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: 'No text provided' });

  // const ssml = toSSMLMixedHindiEnglish(text); // <-- REMOVE THIS bcz bhai sabh ek hi kaam krne ko doh instruction
  // de rha tha mae
  // console.log(ssml); // <-- REMOVE THIS

  try {
    const response = await axios.get(`${OPENTTS_URL}/api/tts`, 
      {
        // Parameters for the GET request
        params: {
          voice: "espeak:hi",//line 21 mae bhi same bola tha kaam krne ko isliye
          // text: ssml, // <-- no need abh
          text: text,    // <-- raw text hi send kr de woh khud dekh lega
          cache: false
        },
        responseType: 'arraybuffer',
        headers: { 
          'Accept': 'audio/wav'
        }
      }
    );

    res.set('Content-Type', 'audio/wav');
    res.send(Buffer.from(response.data));
  } catch (err) {
    console.error(err);
    
    if (err.response && err.response.data) {
      console.error("Error from TTS Server:", Buffer.from(err.response.data).toString());
    }
    res.status(500).json({ error: 'TTS failed' });
  }
});

app.listen(4000, () => console.log('Server running on port 4000'));
