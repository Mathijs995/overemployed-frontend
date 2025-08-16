# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 React application that serves as an AI-powered voice assistant by Overemployed Ltd. It provides a voice interface with support for voice interaction, transcriptions, and virtual avatars.

## Development Commands

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build production version
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check code formatting

The project uses pnpm as package manager (specified in package.json).

## Architecture

### Key Technologies
- **Next.js 15** with App Router architecture
- **WebRTC** for real-time voice/video communication
- **React 19** with TypeScript
- **Tailwind CSS** for styling
- **Radix UI** components for UI primitives
- **Motion** for animations

### Directory Structure

```
app/                    - Next.js App Router pages and API routes
├── (app)/             - Main application pages 
├── api/               - API endpoints (connection-details)
├── components/        - Page-specific components
└── layout.tsx         - Root layout

components/            - Reusable React components
├── livekit/          - Real-time communication components (agent controls, chat, video tiles)
├── ui/               - Base UI components (shadcn/ui style)
├── app.tsx           - Main app component managing room state
├── session-view.tsx  - Active session interface
└── welcome.tsx       - Landing/welcome screen

hooks/                - Custom React hooks
├── useChatAndTranscription.ts
├── useConnectionDetails.ts
└── useDebug.ts

lib/                  - Utility functions and types
├── types.ts          - TypeScript type definitions
└── utils.ts          - Utility functions
```

### Core Components Architecture

1. **App Component** (`components/app.tsx`) - Central state manager for WebRTC room connection and session lifecycle
2. **Welcome Component** - Initial landing screen with start call functionality  
3. **SessionView Component** - Active call interface with video tiles, chat, and controls
4. **Communication Components** - Specialized components for agent interaction, media handling, and chat

### Configuration System

- **App Configuration** (`app-config.ts`) - Centralized configuration for branding, features, and UI customization
- **Theme System** - Light/dark mode support with system preference detection
- **Environment Variables** - WebRTC credentials configured via `.env.local`

### State Management

The application uses React state and WebRTC room context for:
- Session state (started/stopped)
- Room connection state
- Media device permissions
- Chat and transcription data

### WebRTC Integration

Core real-time communication features implemented:
- Real-time voice communication
- Video streaming and screen sharing
- Chat messaging with transcription
- Agent control interface
- Media device selection and management

The app follows modern WebRTC patterns for room lifecycle management and participant handling.