import express from "express"
import dotenv from "dotenv";
import cors from "cors";


import notesRoutes from "./routes/notesRoutes.js";
import { connectDb } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();


const app = express();
const PORT = process.env.PORT || 5001;

app.use(
  cors({
    origin: 'http://localhost:5173',
  })
);
app.use(express.json()); // Middleware to parse JSON bodies => req.body
app.use(rateLimiter);


// Logging middleware
// app.use((req,res,next) => {
//   console.log(`Request Method: ${req.method} and Request URL: ${req.url}`);
//   next();
// })

app.use("/api/notes", notesRoutes);


connectDb(). then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

