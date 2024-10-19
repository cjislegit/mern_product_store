# MERN Product Store

The **MERN Product Store** is a full stack e-commerce platform built to demonstrate my ability to write a comprehensive MERN stack application. The store allows users to add, modify, and delete products, as well as manage a shopping cart with real-time pricing and a total calculation.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [Acknowledgments](#acknowledgments)

## Features

- Add, modify, and delete products from the store.
- Add products to a shopping cart.
- View cart details, including individual product prices and total price for all items.
- Remove items from the cart.

This project started as a tutorial from [freeCodeCamp](https://www.youtube.com/watch?v=O3BUHwfHf84&t=761s&ab_channel=freeCodeCamp.org), but I extended it by adding more functionality, such as cart management and item removal.

## Technologies Used

- **MongoDB & Mongoose** for the database and data modeling.
- **Express.js** for the backend server and API creation.
- **React Router** for navigation between pages.
- **Zustand** for state management.
- **dotenv** for environment variables.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/cjislegit/mern_product_store.git
   ```
2. Navigate to the project directory:
   ```bash
   cd mern-product-store
   ```
3. Install dependencies and build the project:
   ```bash
   npm run build
   ```
4. Create a .env file in the root directory and add the following variables:
   ```bash
   MONGO_URI=your-mongodb-connection-string
   PORT=your-desired-port-number
   ```
5. Start the server:
   ```bash
   npm start
   ```

## Usage

Once the server is running, you can visit the app in your browser at `http://localhost:your-port`. From there, you can:

- View available products.
- Add, modify, and delete products as an admin.
- Add items to your cart, review prices, and remove items as needed.

## Environment Variables

This project requires the following environment variables:

- `MONGO_URI`: Your MongoDB connection string.
- `PORT`: The port the server will run on (default is usually 3000).

## Contributing

Feel free to open issues or pull requests if you'd like to contribute to this project.

## Acknowledgments

- Thanks to [freeCodeCamp](https://www.youtube.com/watch?v=O3BUHwfHf84&t=761s&ab_channel=freeCodeCamp.org) for providing the original tutorial, which was the foundation for this project.
