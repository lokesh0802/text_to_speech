# 🗣️ Text-to-Speech App (React + OpenTTS via Docker)

This project is a full-stack **Text-to-Speech (TTS)** app that supports **Hindi + English** mixed text input. The frontend is built with **React**, and the backend uses **[OpenTTS](https://github.com/synesthesiam/opentts)**, running inside Docker.

## 🧱 Folder Structure
```bash
project-root/

├── client/ # React app (your UI)

├── server/ # 

└── Docker/ # Docker-based OpenTTS setup
```
## 🧑‍💻 Tech Stack

- ✅ React (Frontend)
- 🎤 OpenTTS (Backend TTS engine)
- 🐳 Docker (to run OpenTTS easily)
## 🎥 Demo Video

[![Watch the demo](https://img.youtube.com/vi/yj9uAOTROCw/maxresdefault.jpg)](https://youtu.be/yj9uAOTROCw)


## 🚀 Getting Started

### 📦 1. Clone the Repository

```bash
git clone https://github.com/lokesh0802/text_to_speech.git
cd text_to_speech

```
### 2. Build &  Run opentts engine using docker
```bash
docker-compose up -d --build
-> you can check all voice by going on 
http://localhost:5500/api/voices 
```
### 3. Run backend
``` bash
cd server 
npm install
npm start

The server will run on:
👉 http://localhost:4000
```

### 4. Run frontend
```bash
cd client
npm install
npm run dev

The app will run on:
👉 http://localhost:5173
```