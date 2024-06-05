# RV Rental Company Website

This project is a website for a company that specializes in renting RVs
(Recreational Vehicles). The website allows users to browse available RVs, make
reservations, and manage their bookings.

## Technologies

- **React**: The main framework for building the user interface.
- **Axios**: A library for making HTTP requests.
- **React Router**: A library for routing in React applications.
- **Chakra UI**: A component library for building user interfaces.
- **Redux Toolkit**: A tool for managing application state.
- **mockapi.io**: A service for creating mock APIs, used for the backend.

## Features

- **Browse RVs**: Users can browse through a list of available RVs.
- **Make Reservations**: Users can book an RV for their desired dates.
- **Add To Favorite**: Users can add to favorites RVs.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/oshuster/camper-run.git
   ```
2. Navigate to the project directory:
   ```bash
   cd rv-rental-company
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Application

1. Start the development server:
   ```bash
   npm start
   ```
2. Open your browser and go to `http://localhost:5173/camper-run/` to view the
   application.

## Project Structure

- `src/`: The main source code directory.
  - `api/`: API service functions.
  - `components/`: Reusable components.
  - `pages/`: Page components representing different routes.
  - `redux/`: Redux slices and store configuration.
  - `App.js`: The main application component.
  - `main.js`: The entry point for the React application.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file
for details.

## Acknowledgements

- Thanks to the developers of React, Axios, React Router, Chakra UI, Redux
  Toolkit, and mockapi.io for their great tools.
