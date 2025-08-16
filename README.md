# Voice Assistant by Overemployed

This is an AI-powered voice assistant application built with React and Next.js. It provides a seamless voice interface with real-time communication capabilities, transcriptions, and modern UI/UX design.

<picture>
  <source srcset="./.github/assets/readme-hero-dark.webp" media="(prefers-color-scheme: dark)">
  <source srcset="./.github/assets/readme-hero-light.webp" media="(prefers-color-scheme: light)">
  <img src="./.github/assets/readme-hero-light.webp" alt="App screenshot">
</picture>

### Features:

- Real-time voice interaction with AI agents
- Camera video streaming support
- Screen sharing capabilities
- Audio visualization and level monitoring
- Virtual avatar integration
- Light/dark theme switching with system preference detection
- Customizable branding, colors, and UI text via configuration

This application is built with Next.js and modern web technologies.

### Project structure

```
voice-assistant/
├── app/
│   ├── (app)/
│   ├── api/
│   ├── components/
│   ├── fonts/
│   ├── globals.css
│   └── layout.tsx
├── components/
│   ├── livekit/
│   ├── ui/
│   ├── app.tsx
│   ├── session-view.tsx
│   └── welcome.tsx
├── hooks/
├── lib/
├── public/
└── package.json
```

## Getting started

To run the voice assistant locally:

```bash
pnpm install
pnpm dev
```

Then open http://localhost:3000 in your browser.

## Configuration

The application is designed to be flexible and customizable. You can easily configure branding, features, and UI elements:

#### App configuration (`app-config.ts`)

```ts
export const APP_CONFIG_DEFAULTS = {
  companyName: 'Overemployed Ltd',
  pageTitle: 'Overemployed',
  pageDescription: 'AI-powered voice assistant',
  supportsChatInput: true,
  supportsVideoInput: true,
  supportsScreenShare: true,
  logo: '/logo.svg',
  accent: '#002cf2',
  logoDark: '/logo-dark.svg',
  accentDark: '#1fd5f9',
  startButtonText: 'Start call',
};
```

You can update these values in [`app-config.ts`](./app-config.ts) to customize branding, features, and UI text.

#### Environment Variables

Configure your WebRTC credentials in `.env.local`:

```env
LIVEKIT_API_KEY=your_api_key
LIVEKIT_API_SECRET=your_api_secret
LIVEKIT_URL=https://your-server-url
```

These are required for the voice agent functionality to work.

## About

Developed by Overemployed Ltd - Innovative AI solutions for modern businesses.
