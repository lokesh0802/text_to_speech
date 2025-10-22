# 🗣️ Text-to-Speech App (React + OpenTTS via Docker)

This project is a full-stack **Text-to-Speech (TTS)** app that supports **Hindi + English** mixed text input. The frontend is built with **React**, and the backend uses **[OpenTTS](https://github.com/synesthesiam/opentts)**, running inside Docker.

## 🧱 Folder Structure
project-root/
├── client/ # React app (your UI)
├── server/ # 
└── Docker/ # Docker-based OpenTTS setup

## 🧑‍💻 Tech Stack

- ✅ React (Frontend)
- 🎤 OpenTTS (Backend TTS engine)
- 🐳 Docker (to run OpenTTS easily)

## 🎥 Demo Video

[![Watch the demo](https://img.youtube.com/vi/gt9z7pBwBTw/maxresdefault.jpg)](https://youtu.be/gt9z7pBwBTw)


## 🚀 Getting Started

### 📦 1. Clone the Repository

```bash
git clone https://github.com/lokesh0802/text_to_speech.git
cd text_to_speech

```
### 2. Build &  Run opentts engine using docker
docker-compose up -d --build
-> you can check all voice by going on 
http://localhost:5500/api/voices 

### 3. Run backend
cd server 
npm install
npm start

The server will run on:
👉 http://localhost:4000

### 4. Run frontend
cd client
npm install
npm run dev

The app will run on:
👉 http://localhost:5173
