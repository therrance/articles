import mongoose from "mongoose";
import app from "./app";

const PORT = process.env.PORT || 3001;
const MONGODB_URI = "mongodb://mongo:27017/your-database-name"; // Update with your MongoDB URI

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
