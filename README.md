# Getting Started Guide - GIDDAA Interview Project

## Prerequisites

- Node.js (v18.x or later)
- npm (v9.x or later)
- macOS/Windows/Linux environment

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd GIDDAA/interview
```

2. Install dependencies:

```bash
npm install
```

## Available Scripts

### Development Server

```bash
npm run dev
```

The development server will start at `http://localhost:5173`

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Linting and Type Checking

```bash
npm run lint
npm run type-check
```

## Project Structure

```plaintext
interview/
├── src/
│   ├── components/
│   │   └── ui/
│   ├── lib/
│   ├── styles/
│   │   └── globals.css
│   ├── assets/
│   └── App.tsx
├── public/
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.js
└── package.json
```

## Configuration Files

### Vite Configuration

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

### TypeScript Configuration

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

## Development Tools

- Webstorm Extensions Recommended:
  - ESLint
  - Prettier
  - Tailwind CSS IntelliSense
  - TypeScript Vue Plugin (Volar)
