# 3–5 Minute Video Explanation Script & Demo Guide
## Project: KannadaVaividhya (ಕನ್ನಡ ವೈವಿಧ್ಯ) — Regional Language Explorer
### Hackathon: Kannada Digital Innovation Hackathon 2026 (NIE Mysuru & HackerRank Campus Crew)
### Problem Statement: PS 04 — Namma Kannada: Regional Language Explorer

---

### Video Delivery Notes:
- **Duration**: 4 minutes 30 seconds (within the 3–5 minute window).
- **Format**: Screen recording with voiceover (no face needed).
- **Audio Quality**: Clear microphone audio, calm and energetic tone.
- **Screen Resolution**: 1080p (1920x1080) in browser full screen (Press F11 for clean view).

---

## Timed Video Script

### ⏱️ 0:00 – 0:45 | Section 1: Problem Statement & Requirements
**[Visual on Screen]:** Open with the title slide of the PPT or the hero section of the live deployed web app, showing the emblem, "KannadaVaividhya", and the hackathon banner.

> **Voiceover:**  
> "Namaskara and hello everyone! Welcome to the presentation of **KannadaVaividhya (ಕನ್ನಡ ವೈವಿಧ್ಯ)**, built for the Kannada Digital Innovation Hackathon 2026, organized by HackerRank Campus Crew and The National Institute of Engineering, Mysuru.  
> 
> We chose **Problem Statement 04: Namma Kannada — Regional Language Explorer**.  
> Across Karnataka, over 50 million people communicate daily not in standard textbook Kannada, but through vivid, living regional dialects. Whether it is the polite courtly tone of Old Mysuru, the rhythmic and energetic cadence of North Karnataka around Dharwad, the musical coastal lilt of Kundapura and Karavali, the Deccani heritage of Kalyana Karnataka, or the modern fast-paced Bengaluru slang.  
> 
> For students, travelers, non-native speakers, and professionals moving to Karnataka, these regional variations are often misunderstood. Furthermore, our rich oral traditions, grandma's proverbs, and colloquial expressions risk being lost in the digital era. Our objective was to build an interactive, living digital ecosystem that documents, translates, pronounces, and celebrates this linguistic diversity."

---

### ⏱️ 0:45 – 1:30 | Section 2: Existing Systems & Their Gaps
**[Visual on Screen]:** Switch to Slide 3 of the PPT or show a quick side-by-side comparison illustrating generic tools vs. regional dialects.

> **Voiceover:**  
> "When looking at the existing ecosystem today, we found three critical gaps:  
> 
> First, **Generic Machine Translation engines** like Google Translate or DeepL only recognize formal, standardized Kannada. When a user in Hubballi hears *'Barri oota maadoonri'* or a passenger in Kundapura hears *'Ellig poopudu maaraya'*, standard translators either fail or translate robotically without context.  
> 
> Second, **Language Learning Apps** like Duolingo or Babbel focus on rigid textbook grammar drills. They have zero coverage of regional street idioms, auto-rickshaw bargaining, or local market conversations.  
> 
> Third, **Academic Dictionaries and Folk Books** are static and paper-bound. They lack audio pronunciation, cannot capture dynamic modern slang, and are completely inaccessible to the younger generation.  
> 
> This created an urgent need for an interactive, audio-first platform tailored specifically for Karnataka’s regional linguistic landscape."

---

### ⏱️ 1:30 – 3:30 | Section 3: Live Product Demonstration & Solution Approach
**[Visual on Screen]:** Switch to the live deployed web application and actively demo each feature smoothly.

> **Voiceover:**  
> *(Scroll to Karnataka Interactive Map at 1:30)*  
> "Here is **KannadaVaividhya** in action!  
> 
> **Feature 1: The Interactive Regional Map.**  
> We have mapped Karnataka into five primary linguistic and cultural zones across 31 districts. Clicking on any region—such as North Karnataka—instantly highlights its historical background, phonetic traits like the '-likkattiri' rhythmic marker, and triggers authentic audio greetings tuned to that regional tempo. Notice how selecting Karavali immediately brings up coastal Kundapra expressions like *'Bari bisi koodu'*, its Yakshagana heritage, and local gastronomy.  
> 
> *(Scroll to Dialect Morph Section at 2:00)*  
> **Feature 2: The Multi-Dialect Morph Translator.**  
> How does an everyday situation sound across Karnataka? In our Dialect Morph engine, users can pick common scenarios—like bargaining with an auto driver or greeting family.  
> Here, for 'How are you?', we see the exact side-by-side translation:  
> In Mysuru: *'Hegiddeeraari? Maneyalli ella chennaagiddaaraa?'* with polite honorifics.  
> In Dharwad: *'Eenree samachaara? Aaraam adeereenu?'*  
> In Kundapura: *'Entha maaraya samachaara?'*  
> In Bengaluru: *'Een maga hengiddiya? Scene sorted alwa?'*  
> Each variant has text-to-speech audio with dialect-tuned pacing and copy functionality! Users can even type any custom sentence into our Synthesizer to see regional adaptations.  
> 
> *(Scroll to Audio Waveform Lab at 2:40)*  
> **Feature 3: The Real-Time Voice Waveform Lab.**  
> Using the Web Audio API, users can test their own Kannada pronunciation. Clicking 'Record' captures live microphone audio, plots a real-time oscilloscope waveform on an HTML5 canvas, and provides an instant acoustic match score with phonetic coaching tips.  
> 
> *(Scroll to Dialect Detective Quiz & Folk Vault at 3:10)*  
> **Feature 4 & 5: 'Yava Kannada?' Quiz and Janapada Kosha.**  
> Users test their listening comprehension by guessing regional origins of idioms, earning cultural badges like 'Kavirajamarga Master' with confetti celebration!  
> Finally, our 'Janapada Kosha' allows anyone from any district to contribute native proverbs and slang, persisted in real time with upvoting."

---

### ⏱️ 3:30 – 4:30 | Section 4: Tech Stack & Architecture
**[Visual on Screen]:** Switch to Slide 6 of the PPT, highlighting the Architecture Diagram and Tech Stack components.

> **Voiceover:**  
> "Now let us take a look under the hood at our technology stack and architecture.  
> 
> **Frontend & UI:**  
> We built the platform using **React 18** and **Vite** for instantaneous sub-second bundling and 60fps rendering, styled with **Tailwind CSS** using a custom royal Mysore gold and glassmorphism design system.  
> 
> **Audio & Speech Pipeline:**  
> We leveraged browser-native **Web Audio API** with an `AnalyserNode` connected to dynamic canvas rendering for real-time frequency analysis. For speech synthesis, we integrated the **Web Speech API** with dialect-specific rate and pitch calibration.  
> 
> **Linguistic Data Architecture:**  
> Our data layer is organized in structured JSON schemas mapping phonetic rules, cultural heritage pillars, and multi-dialect translation vectors across all 31 districts.  
> 
> **Client-Side Persistence:**  
> Community submissions and upvotes are stored and synchronized using resilient local caching, allowing offline usability.  
> 
> The application is compiled into a lightweight production bundle and deployed globally on edge CDN hosting with zero latency."

---

### ⏱️ 4:30 – 5:00 | Section 5: Conclusion, Impact & Future Scope
**[Visual on Screen]:** Show the closing slide of the PPT or the footer of the web application with the NIE Mysuru logo and celebratory banner.

> **Voiceover:**  
> "In conclusion, **KannadaVaividhya** transforms regional Kannada from a fragmented spoken tradition into an engaging, interactive digital reality. It empowers newcomers to connect respectfully with local communities, preserves rural folk wisdom, and celebrates Karnataka’s unparalleled linguistic wealth.  
> 
> For our future roadmap, we aim to fine-tune open-source LLMs on conversational regional corpora and partner with state universities to expand our audio archive into an open-source Kannada dialect dataset.  
> 
> Thank you to HackerRank Campus Crew and NIE Mysuru for this wonderful challenge.  
> *Sirigannadam Gelge, Sirigannadam Baalge!*  
> Thank you!"

---

## Recording Checklist for You:
1. Open the deployed application in Chrome / Edge.
2. Press **F11** to enter fullscreen mode.
3. Test your microphone audio.
4. Keep the presentation slides and web application tabs adjacent so you can switch cleanly with `Ctrl + Tab`.
5. Speak smoothly following the timestamps above!
