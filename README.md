# Notely

A full-stack note-taking web application built with the MERN stack (MongoDB, Express.js, React, Node.js).

## Features

- Create, view, edit, and delete notes
- Responsive and modern UI built with React, Vite, and Tailwind CSS
- RESTful API for note management
- Server-side rate limiting using Upstash Redis
- Modular code structure for scalability and maintainability

## Project Structure

```
Notely/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── db.js
│   │   │   └── upstash.js
│   │   ├── controllers/
│   │   │   └── notesController.js
│   │   ├── middleware/
│   │   │   └── rateLimiter.js
│   │   ├── models/
│   │   │   └── Note.js
│   │   ├── routes/
│   │   │   └── notesRoutes.js
│   │   └── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── lib/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── public/
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (v18 or above recommended)
- npm
- MongoDB instance (local or cloud)
- Upstash Redis account (for rate limiting)

### Backend Setup

1. Navigate to the backend directory:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the `backend` directory and add your environment variables:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   UPSTASH_REDIS_REST_URL=your_upstash_redis_url
   UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
   PORT=5000
   ```
4. Start the backend server:
   ```sh
   npm start
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend development server:
   ```sh
   npm run dev
   ```

### Build

To build the frontend for production:

```sh
npm run build --prefix frontend
```

## Usage

- Access the frontend at `http://localhost:5173` (default Vite port)
- The backend runs on `http://localhost:5000` by default

## API Endpoints

- `GET /api/notes` - Get all notes
- `POST /api/notes` - Create a new note
- `GET /api/notes/:id` - Get a note by ID
- `PUT /api/notes/:id` - Update a note
- `DELETE /api/notes/:id` - Delete a note

## Technologies Used

- MongoDB
- Express.js
- React
- Node.js
- Vite
- Tailwind CSS
- Upstash Redis (rate limiting)

## License

This project is licensed under the ISC License.

## Author

- [mihir-babu27](https://github.com/mihir-babu27)
