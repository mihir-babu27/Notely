import mongoose from "mongoose";

// Define the note Schema
const noteSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required: true,
        },
        content:{
            type: String,
            required: true,
        },
    },
    {timestamps: true} // This will add createdAt and updatedAt fields
);

// Create the Note model
const Note = mongoose.model("Note", noteSchema);

export default Note;
