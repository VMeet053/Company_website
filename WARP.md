# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a Node.js/Express-based digital platform for a company specializing in innovative, animated, and interactive digital experiences. The company offers services including mobile/web app development, AR/VR experiences, blockchain technology, and game development.

## Development Commands

### Essential Commands
- `npm install` - Install dependencies
- `npm run dev` - Start development server with nodemon (hot reload)
- `npm start` - Start production server
- `npm test` - Run Jest test suite
- `npm run lint` - Run ESLint on src/ directory
- `npm run format` - Format code with Prettier

### Build Commands
- `npm run build` - Build both frontend and backend
- `npm run build:frontend` - Build frontend with webpack (production mode)
- `npm run build:backend` - Build backend (currently just echoes completion)

### Testing Individual Components
- `npx jest <test-file>` - Run specific test file
- `npx jest --watch` - Run tests in watch mode
- `npx eslint src/<specific-file>.js` - Lint specific file

## Architecture

### Current Structure
- **Backend**: Express.js API server with basic middleware (helmet, cors, dotenv)
- **Entry Point**: `src/index.js` - Simple Express server with health endpoint
- **Static Assets**: Served from `public/` directory
- **Build System**: Webpack for frontend, Node.js for backend

### Key Characteristics
- **Minimalist Setup**: Currently a basic Express API with two endpoints (/, /health)
- **Security**: Uses helmet for security headers
- **CORS Enabled**: Configured for cross-origin requests
- **Environment Config**: Uses dotenv for configuration
- **Error Handling**: Basic error and 404 middleware in place

### Services Focus Areas
The platform is designed to support:
- Mobile and web app development workflows
- AR/VR experience development
- Blockchain technology integration  
- Game development projects
- Animated and interactive digital experiences

### Frontend Considerations
- Webpack configured for production builds
- Public directory for static assets (currently empty)
- Emphasis on animations, transitions, and 3D models (as per company focus)
- Responsive design for all devices

## Development Notes

### Environment
- Default PORT: 3000 (configurable via environment)
- Development server uses nodemon for auto-restart
- Static files served from `public/` directory

### Code Quality
- ESLint configured for src/ directory
- Prettier for code formatting
- Jest for testing (currently no tests implemented)

### Expansion Areas
The current codebase is minimal and appears ready for expansion into:
- API routes for different services (mobile, web, AR/VR, blockchain, games)
- Frontend components for animated experiences
- Database integration
- Authentication/authorization systems
- File upload handling for assets
- WebSocket support for real-time features