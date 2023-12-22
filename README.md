# SpaceX Launch Tracker

## Introduction
The SpaceX Launch Tracker is an interactive web application built with React, showcasing both past and upcoming SpaceX launches. Utilizing the SpaceX API, it offers a detailed and engaging interface for space enthusiasts and general users alike.

## Technical Specifications and Design Details

- **SpaceX API**: Optimized data retrieval from SpaceX API, pulling only essential fields to minimize payload size.
- **React**: Application is built using React.
- **State Management**: Employs React's Context API with LaunchContext for launch data and FilterContext for persisting user filters across navigation.
- **React Router**: Utilizes the latest React Router for smooth navigation and includes error route handling.
- **Code Quality**: Focus on clean, modular, and reusable coding practices.
- **User Interface and Accessibility**: Emphasizes a user-friendly and accessible interface, featuring a loading screen during data fetch, enlarged icons on hover, generic images for launches lacking specific patches, and a gradient-enhanced banner image.
- **Styling**: Employs styled components.

## Setup and Run

1. **Clone the Repository**: `git clone https://github.com/mohit4444/SpaceX-Launch-Tracker`
2. **Install Dependencies**: `npm install`
3. **Run the Application**: `npm start`
4. **Access Local**: Visit `http://localhost:3000` in your browser.

## Deployment

The application is hosted on Vercel. Access it [here](https://spacex-launch-tracker-mohit.vercel.app/).
