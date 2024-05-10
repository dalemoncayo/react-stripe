# React with Stripe Project

This project demonstrates the integration of Stripe checkout functionality into a React application. It provides a seamless user experience for purchasing products or services securely using Stripe's payment processing capabilities.

## Features

- Allows users to enter a product name and price.
- Dynamically updates the price based on user input.
- Handles errors during the checkout process.
- Redirects users to the Stripe Checkout page for payment processing.

## Getting Started

1. Clone the repository:
   `
   git clone https://github.com/your-username/react-stripe.git
   `
2. Navigate to the project directory:
   `
   cd react-stripe
   `
3. Install dependencies:
   `
   npm install
   `
4. Replace 'YOUR_STRIPE_PUBLISHABLE_KEY' in the code with your actual Stripe publishable key.

## Usage

To start the application, run:
`
npm run dev
`
The application will run on port 3000 by default.

## Dependencies

- @stripe/react-stripe-js: ^2.7.1
- react: ^18.2.0
- react-dom: ^18.2.0

## Backend API

The backend API responsible for creating checkout sessions can be found at [express-stripe](https://github.com/dalemoncayo/express-stripe).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

