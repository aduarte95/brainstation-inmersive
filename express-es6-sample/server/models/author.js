  
import mongoose from "./db";

const Schema = mongoose.Schema;

const authorSchema = new Schema(
  {
    name: String,
    fullName: String,
    birthdate: Date,
    books: Array
  },
  { strict: true }
);

export default mongoose.model("authors", authorSchema);