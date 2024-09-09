# Real Estate Property Management Web Application

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [API and Context Management](#api-and-context-management)
- [Firebase Integration](#firebase-integration)
- [Routing](#routing)
- [Authentication](#authentication)
- [Toast Notifications](#toast-notifications)
- [Deployment](#deployment)
- [Extra Features Implemented](#extra-features-implemented)
- [Contribution](#contribution)
- [Acknowledgments](#acknowledgments)
- [License](#license)
- [Authors](#authors)

## Overview
This project is a fully functional Real Estate Property Management Web Application where users can browse, search, and filter properties, add properties to a cart, and book properties. The application supports user authentication, allowing users to sign up, log in, and manage their bookings. Firebase is used for backend services including authentication and database management.

## Features
- **User Authentication:** Sign up, log in, and manage sessions using Firebase.
- **Property Browsing:** Users can browse through a list of properties with detailed descriptions and images.
- **Search and Filtering:** Implemented a powerful search and filter feature to help users find properties based on different criteria.
- **Cart Management:** Users can add properties to their cart and proceed to book them.
- **Responsive Design:** The application is fully responsive, providing a seamless experience across different devices.
- **Toast Notifications:** Real-time feedback for user actions using `react-toastify`.

## Demo
You can view a live demo of the application [here](https://rental-plateform-o95j-9m38ukvgh-ganesh-patels-projects.vercel.app/).

## Installation

To run this project locally, follow these steps:

### Prerequisites
- Node.js installed
- Firebase account
- Razorpay account

1. **Clone the repository:**
    ```bash
    git clone https://github.com/Ganesh-Patel/Totality-frontend-challenge.git
    cd Rental-Plateform
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up Firebase:**
   - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
   - Enable Authentication (Email/Password).
   - Create a Firestore database for property listings, user data, etc.
   - Get your Firebase configuration details and add them to your project.

4. **Create a `.env` file in the root directory and add your Firebase configuration:**
    ```env
    REACT_APP_FIREBASE_API_KEY=your_api_key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
    REACT_APP_FIREBASE_PROJECT_ID=your_project_id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
    REACT_APP_FIREBASE_APP_ID=your_app_id
    ```

5. **Start the application:**
    ```bash
    npm start
    ```

## Usage

Once the application is running, users can:

- **Sign Up/Log In:** Create an account or log in with existing credentials.
- **Browse Properties:** View a list of available properties with detailed descriptions.
- **Search & Filter:** Search for properties by name, location, or other criteria. Use filters to narrow down the search results.
- **Add to Cart:** Add selected properties to the cart.
- **Book Property:** Proceed to book properties added to the cart.
- **Manage Account:** View and manage account details and bookings.

## Screenshots

### Home Page
![Home Page](https://github.com/user-attachments/assets/ba9687da-e048-468a-b5e6-d47934988600)

### Properties Page
![Properties Page](https://github.com/user-attachments/assets/67e72402-8f18-43fb-b9f7-c31b3a154048)

### Account 
![Search and Filter](https://github.com/user-attachments/assets/dd112473-e5e6-4cbd-a93f-922ba7e5a58c)

### Cart Page
![Cart Page](https://github.com/user-attachments/assets/3f7b7b02-f8cf-4b07-832c-feb777045bf2)

### Login Page
![Login Page](https://github.com/user-attachments/assets/2b3a69be-7f2d-40ac-abc6-96e519e2c5d1)

![Login Page](https://github.com/user-attachments/assets/2337ab14-539c-431e-8eb3-910352eec87d)


## Technologies Used

- **React:** Frontend library used to build the user interface.
- **React Router:** For handling routing between different pages.
- **Firebase:** Backend services including authentication and Firestore database.
- **Context API:** For state management across the application.
- **React Toastify:** For real-time notifications.
- **Tailwind CSS:** For responsive and modern styling.
- **Icons:** `react-icons` package for using icons.

## API and Context Management

This application uses React's Context API to manage global state, particularly for user authentication, search terms, and cart management.

### Context Setup
1. **SearchContext:** Manages the search state across the application.
2. **AuthContext:** Manages user authentication state and actions using Firebase.
3. **CartContext:** Manages the cart state, including adding and removing properties.

## Deployment

The application is deployed on [Vercel](https://vercel.com/). Replace with your hosting link.

## Extra Features Implemented

- **Search Functionality:** Enhanced search functionality to find products based on keywords.
- **Advanced Filters:** Users can filter products not only by price and rating but also by categories and brands.
- **Responsive Design:** Ensured the platform is fully responsive and mobile-friendly.
- **Toast Notifications:** Added real-time notifications for user interactions, like adding items to the cart or completing payments.

## Contribution

Contributions are welcome! If you'd like to contribute, please fork the repository and create a pull request.

## Acknowledgments
- **Razorpay** for payment gateway integration.
- **RapidAPI** for providing the Amazon Product Data API.
- **Firebase** for authentication services.
- Special thanks to the developers whose tutorials and resources helped in building this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Authors

- **Ganesh Patel** - *Initial work* - [Ganesh-Patel](https://github.com/Ganesh-Patel)
