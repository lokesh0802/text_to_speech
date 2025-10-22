import React, { useState } from 'react';

function App() {
  const [text, setText] = useState(
    'Hello! आज हम Text-to-Speech technology के बारे में बात करेंगे, जो किसी भी लिखे हुए text को आवाज़ में बदल सकती है।'
  );
  const [loading, setLoading] = useState(false);

  const handleSpeak = async () => {
    setLoading(true);

    try {
      const response = await fetch('http://localhost:4000/api/speak', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });

      const buffer = await response.arrayBuffer();
      const blob = new Blob([buffer], { type: 'audio/wav' });
      const url = URL.createObjectURL(blob);

      const audio = new Audio(url);
      audio.play();
    } catch (err) {
      console.error('Error during speech:', err);
      alert('Something went wrong while trying to speak the text.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>🗣️ Text To Speech (Hindi + English)</h1>

      <textarea
        rows={5}
        style={{ width: '100%', fontSize: 16 }}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={handleSpeak} disabled={loading} style={{ marginTop: 10 }}>
        {loading ? 'Speaking...' : 'Speak'}
      </button>
    </div>
  );
}

export default App;
