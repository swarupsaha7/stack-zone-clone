# React + Vite + Tailwind CSS Application

A modern React application built with Vite and styled with Tailwind CSS.

## Features

- ⚡ **Vite** - Lightning fast build tool and development server
- ⚛️ **React 18** - Latest React with hooks and modern features
- 🎨 **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- 🔥 **Hot Module Replacement (HMR)** - Instant updates during development
- 📱 **Responsive Design** - Mobile-first approach with Tailwind CSS
- 🎯 **Modern UI** - Beautiful gradient backgrounds and smooth animations

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

Build the application for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── App.jsx          # Main application component
├── index.css        # Tailwind CSS imports
├── main.jsx         # Application entry point
└── assets/          # Static assets
```

## Technologies Used

- **React** - UI library for building user interfaces
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing tool
- **Autoprefixer** - CSS vendor prefixing

## Customization

### Tailwind CSS Configuration

The Tailwind CSS configuration is located in `tailwind.config.js`. You can customize:

- Color palette
- Typography
- Spacing
- Breakpoints
- Custom animations

### Adding New Components

Create new React components in the `src/` directory and import them into `App.jsx` or other components.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test your changes
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).
