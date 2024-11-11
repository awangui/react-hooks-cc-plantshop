# Plantsy Admin Dashboard

## Demo

Explore how Plantsy works with this GIF showcasing the app's core functionality.

![Demo GIF](https://curriculum-content.s3.amazonaws.com/phase-2/react-hooks-mock-code-challenge-plantshop/plantsy_demo.gif)

## Overview

Welcome to Plantsy, a project focused on the admin side of a plant store. This dashboard allows users to manage plant inventory, including adding, updating, and filtering plant items. The app is powered by React, with a backend API to handle data persistence.

## Setup

1. Run `npm install` to install dependencies.
2. Start the backend with `npm run server` (runs on port `6001`).
3. Open a new terminal and start the frontend with `npm start`.

Verify that the backend is running by visiting [http://localhost:6001/plants](http://localhost:6001/plants) in your browser.

## API Endpoints

Base URL for the backend: `http://localhost:6001`

## Features

Plantsy supports the following features:

1. **View All Plants**: Display a list of all available plants upon loading the app.
2. **Add New Plant**: Add a new plant to the inventory by submitting a form.
3. **Mark Plant as Sold Out**: Update plant status to "sold out."
4. **Search Plants**: Filter plants by name to easily find specific items.

### Core Endpoints

#### GET `/plants`

Retrieves the list of all plants.

Example Response:

```json
[
  {
    "id": 1,
    "name": "Aloe",
    "image": "./images/aloe.jpg",
    "price": 15.99
  },
  {
    "id": 2,
    "name": "ZZ Plant",
    "image": "./images/zz-plant.jpg",
    "price": 25.98
  }
]
```

#### POST `/plants`

Adds a new plant to the inventory.

Headers:

```js
{
  "Content-Type": "application/json"
}
```

Request Body:

```json
{
  "name": "string",
  "image": "string",
  "price": number
}
```

Example Response:

```json
{
  "id": 1,
  "name": "Aloe",
  "image": "./images/aloe.jpg",
  "price": 15.99
}
```
---

Plantsy provides a streamlined and user-friendly experience for managing plant inventory, making it a valuable tool for plant store administrators.