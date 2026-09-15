# Weather Router Application

A modern web application for searching real-time weather information by city location. Built with React, Vite, and powered by the Open-Meteo API.

## Features

- 🌍 **City Weather Search** - Search for weather information by city name
- 🌡️ **Current Weather Data** - Display real-time temperature and wind speed
- ⚡ **Fast Performance** - Built with Vite for rapid development and optimized production builds
- 🔀 **Client-Side Routing** - Seamless navigation between search and results pages
- 🚀 **Firebase Hosting** - Easily deployable to Firebase Hosting
- 📱 **Responsive Design** - Works on desktop and mobile devices

## Tech Stack

- **Frontend Framework**: React 19.2.8
- **Build Tool**: Vite 8.3.0
- **Routing**: React Router 8.3.1 / 7.18.3
- **API**: Open-Meteo (Free, no authentication required)
- **Hosting**: Firebase
- **Code Quality**: Oxlint

## Project Structure

```bash
src/
├── main.jsx              # Application entry point
├── Routes.jsx            # Router configuration
├── index.css             # Global styles
├── pages/
│   ├── Search.jsx        # City search page
│   └── Result.jsx        # Weather results page
└── services/
    └── MeteoService.jsx  # API integration service
```


## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tp-router-meteo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**

   ```bash
   cp .env.example .env
   ```

   Edit `.env` and add your Open-Meteo API URL:

   ```bash
   VITE_API_URL=https://geocoding-api.open-meteo.com
   ```

### Development

Start the development server with hot module replacement (HMR):

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building

Build the application for production:

```bash
npm run build
```

The compiled files will be in the `dist/` directory.

### Preview

Preview the production build locally:

```bash
npm run preview
```

### Linting

Run the code linter:

```bash
npm run lint
```

## How It Works

1. **Search Page** (`/`) - User enters a city name in the search box
2. **API Lookup** - The application:
   - First calls the Open-Meteo Geocoding API to convert city name to coordinates (latitude/longitude)
   - Then calls the Open-Meteo Weather API to fetch current weather data
3. **Results Page** (`/:city`) - Displays:
   - Current temperature in Celsius
   - Wind speed in km/h

## Deployment

### Firebase Hosting

Deploy your application to Firebase Hosting:

```bash
npm run deploy
```

This command builds the project and deploys it to Firebase Hosting configured in `firebase.json`.

### Prerequisites for Firebase Deployment

1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login to Firebase: `firebase login`
3. Initialize Firebase project: `firebase init hosting` (if not already done)

## Environment Variables

Create a `.env` file in the root directory:

```bash
VITE_API_URL=https://geocoding-api.open-meteo.com
```

**Note**: This variable is required to fetch weather data from the Open-Meteo API.


## API Reference

### Open-Meteo APIs Used

- **Geocoding API**: Converts city names to geographic coordinates
  - Endpoint: `GET /v1/search?name={city}`
  - Documentation: [Geocoding API](https://open-meteo.com/en/docs/geocoding-api)

- **Weather API**: Retrieves current weather data
  - Endpoint: `GET /v1/forecast?latitude={lat}&longitude={lng}&current_weather=true`
  - Documentation: [Weather API](https://open-meteo.com/en/docs)


## Error Handling

- If a city is not found, an error message is displayed
- API errors are caught and shown to the user
- Users can navigate back to the search page to try again

## Performance Optimizations

- Vite ensures fast build times and rapid development cycles
- React 19 with optimized rendering
- Code splitting for efficient asset loading
- Oxlint for code quality and performance warnings

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires ES2020+ JavaScript support

## Contributing

Feel free to fork this project and submit pull requests for any improvements.

## License

This project is open source and available for educational and personal use.

## Troubleshooting

### "City not found" error
- Ensure you're entering the correct city name (e.g., "London", "Paris", "Tokyo")
- Some city names may require disambiguation

### API Connection Issues
- Verify your internet connection
- Check that the `VITE_API_URL` environment variable is correctly set
- Ensure Open-Meteo API is accessible

### Build Errors
- Clear `node_modules` and reinstall:

  ```bash
  rm -rf node_modules && npm install
  ```

- Clear the Vite cache:

  ```bash
  rm -rf dist
  ```

## Resources


- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [React Router Documentation](https://reactrouter.com)
- [Open-Meteo API Documentation](https://open-meteo.com)
- [Firebase Hosting Documentation](https://firebase.google.com/docs/hosting)

