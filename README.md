# Gemini Clone

A React + Vite web app that mimics a Gemini-style chat interface using the Google GenAI SDK.

## Features
- Prompt-based chat UI with loading and typing effect
- Markdown rendering for AI responses (`react-markdown` + `remark-gfm`)
- Reusable context state management for chat flow
- Retry handling for API rate limits (HTTP 429)
- Tailwind CSS based styling
- GitHub Pages deploy script

## Tech Stack
- React 19
- Vite 7
- Tailwind CSS 4
- `@google/genai`
- `react-markdown` + `remark-gfm`
- `react-icons`

## Prerequisites
- Node.js 18+
- npm
- A Google Gemini API key

## Environment Variables
Create a `.env` file in the project root and add:

```env
VITE_GEMINI_API_KEY=your_api_key_here
```

The key is read in `src/config/GeminiAPI.js` via `import.meta.env.VITE_GEMINI_API_KEY`.

## Getting Started
1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Open the local URL shown by Vite (usually `http://localhost:5173`).

## Available Scripts
- `npm run dev` - Start the Vite development server
- `npm run build` - Build production assets into `dist`
- `npm run preview` - Preview production build locally
- `npm run deploy` - Deploy `dist` to GitHub Pages (runs `predeploy` first)

## Project Structure

```text
src/
  Components/
    Main/
    Sidebar/
  Context/
    AppContext.js
    Context.jsx
  config/
    GeminiAPI.js
    Chat.js
  utils/
    formatGeminiResponse.js
```

## How Chat Requests Work
1. UI calls `onSent(prompt)` from `Context.jsx`
2. `onSent` delegates to `sendMessage(prompt)` in `src/config/Chat.js`
3. `Chat.js` uses the client from `src/config/GeminiAPI.js`
4. Response text is saved in context state and rendered in `Result.jsx`

## Deployment (GitHub Pages)
This project includes `gh-pages` setup and a `homepage` field in `package.json`.

Deploy with:

```bash
npm run deploy
```

## Notes
- Never commit real API keys.
- If rate-limited, the app retries automatically with a short backoff.
- Model currently used: `gemini-3-flash-preview`.
