# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + TypeScript landing page for "Academia Joelly Kerolin", a fitness coaching/personal training business. The site features multiple sections and an interactive chatbot that collects user data and redirects to WhatsApp.

## Commands

```bash
# Development
npm run dev          # Start Vite dev server

# Build & Preview
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
npm run typecheck    # Run TypeScript type checking
```

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom fonts (Montserrat, Inter)
- **Icons**: lucide-react
- **Backend**: Supabase (configured via .env)

## Architecture

### Component Structure

All components are in `src/components/` and are assembled in `App.tsx`:

- `Navigation` - Fixed header with navigation
- `Hero` - Hero section with CTAs linking to WhatsApp
- `About` - About section
- `Modalities` - Training modalities offered
- `Gallery` - Photo gallery
- `Pricing` - Pricing plans
- `Testimonials` - Client testimonials
- `FinalCTA` - Final call-to-action
- `Footer` - Site footer
- `ChatBot` - Interactive floating chatbot widget

### ChatBot Flow

The chatbot (`ChatBot.tsx`) is a multi-step form that:
1. Collects user name, age, and fitness goal
2. Generates a structured message
3. Redirects to WhatsApp with pre-filled message

It uses a step-based state machine (`step` 0-3) and displays rotating notification messages when closed.

### Styling Patterns

- Primary accent color: `#FF6B00` (orange)
- Dark theme with black/gray backgrounds
- Custom fonts via CSS classes: `.font-montserrat`, `.font-inter`
- Custom animation: `.animate-fade-in-up` (defined in `index.css`)
- Hover states use `lg:hover:` prefix for desktop-only hover effects

### WhatsApp Integration

CTAs and the chatbot redirect to WhatsApp via `https://wa.me/5522992359977` with pre-formatted messages.
