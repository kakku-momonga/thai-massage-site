# ぶむちゃんお店 (Bumuchan Shop)

A premium relaxation salon website built with React, TypeScript, and Vite.
Features a modern, responsive design with Thai-inspired aesthetics.

## Features

- **Beautiful Hero Section**: High-quality imagery with a calm, premium vibe.
- **Service Menu**: Detailed list of services (Foot, Thai, Oil, Head Spa) with pricing.
- **Reservation System**: Functional reservation form with validation (simulated API).
- **Responsive Design**: Optimized for mobile, tablet, and desktop.
- **Routing**: Client-side routing with `react-router-dom`.

## Tech Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: Vanilla CSS (Scoped & Utility classes)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Forms**: [React Hook Form](https://react-hook-form.com/)

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm or yarn

### Installation

1. Clone the repository (or extract the project).
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

### Build

Build for production:
```bash
npm run build
```

## Project Structure

```
src/
  ├── components/   # Reusable UI components (Header, Footer, Cards)
  ├── pages/        # Page components (Top, Access, Pricing, Staff, Reservation)
  ├── utils/        # Utility functions (image path resolution)
  ├── App.tsx       # Main application entry and routing
  └── main.tsx      # React DOM rendering
public/
  └── image/        # Static assets
```

## License

Private
