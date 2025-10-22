FROM synesthesiam/opentts:latest

USER root  

RUN apt-get update && apt-get install -y espeak-ng

ENV TTS_VOICE=en

USER opentts  
