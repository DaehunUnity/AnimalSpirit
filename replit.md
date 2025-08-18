# Overview

This is a React-based Animal Personality Test application that helps users discover their "spirit animal" through a quiz-based personality assessment. The application features a modern, user-friendly interface with colorful gradients and smooth animations. Users take a 10-question quiz and receive personalized results showing which animal best matches their personality traits, along with detailed descriptions and sharing capabilities.

**Language Support**: The application supports Korean (default) and English with a language selector in the top-right corner. All content including questions, animal descriptions, and UI text is fully localized.

# User Preferences

Preferred communication style: Simple, everyday language.
Default language: Korean (한국어) with English language switching capability.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **UI Library**: Shadcn/ui components built on Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with custom color variables and gradients (coral, teal, sky, mint, golden)
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation
- **Internationalization**: Custom translation system with React Context for language switching (Korean/English)

## Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API with JSON responses
- **Data Storage**: In-memory storage with PostgreSQL schema definitions for future database integration
- **Session Management**: Express sessions with connect-pg-simple for PostgreSQL session storage

## Database Schema
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Tables**: 
  - `questions` - Quiz questions with options and personality trait mappings
  - `animals` - Animal profiles with traits, descriptions, and compatibility data
  - `quiz_results` - User quiz responses and calculated results
- **Data Types**: JSONB columns for flexible trait scoring and option storage

## Application Flow
- **Quiz Logic**: Trait-based scoring system that maps user answers to personality characteristics
- **Matching Algorithm**: Calculates best animal match based on trait similarity scoring
- **Result Generation**: Provides detailed personality analysis with strengths and compatible animals

## Component Structure
- **Pages**: Home (landing), Quiz (interactive assessment), Result (personalized outcome)
- **Shared Components**: Progress tracking, question cards, result displays, social sharing
- **UI Components**: Comprehensive component library with consistent theming
- **Language Components**: Language selector dropdown, translation context provider
- **Localization**: Full Korean and English translations for all UI text, questions, and animal descriptions

## Development Features
- **Hot Reload**: Vite HMR for fast development iteration
- **Error Handling**: Runtime error overlay and comprehensive error boundaries
- **Type Safety**: Full TypeScript coverage with strict mode enabled
- **Code Organization**: Monorepo structure with shared types and utilities

# External Dependencies

## Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form with Hookform Resolvers
- **Build Tools**: Vite with React plugin, TypeScript compiler, ESBuild for production builds
- **UI Components**: Radix UI component primitives, Shadcn/ui design system
- **Styling**: Tailwind CSS with PostCSS and Autoprefixer

## Backend Dependencies
- **Server Framework**: Express.js with TypeScript execution via TSX
- **Database**: Drizzle ORM, Neon Database serverless driver, PostgreSQL session store
- **Validation**: Zod schema validation library
- **Development**: Runtime error modal for Replit integration

## Utility Libraries
- **State Management**: TanStack React Query for server state
- **Routing**: Wouter for lightweight client-side navigation
- **Styling Utilities**: Class Variance Authority, CLSX, Tailwind Merge
- **Date Handling**: Date-fns for date manipulation
- **Unique IDs**: Nanoid for generating unique identifiers

## Development Tools
- **Replit Integration**: Cartographer plugin and runtime error modal for Replit environment
- **Type Definitions**: Node.js and Vite client type definitions
- **Code Quality**: TypeScript strict mode with comprehensive path mapping