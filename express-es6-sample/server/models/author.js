  
import mongoose from "./db";

const Schema = mongoose.Schema;

const authorSchema = new Schema(
  {
    name: String,
    full_name: String,
    birth_date: Date,
    death_date: Date,
    img_url: String,
    nationality: String,
    books: Array
  },
  { strict: true }
);

export default mongoose.model("authors", authorSchema);