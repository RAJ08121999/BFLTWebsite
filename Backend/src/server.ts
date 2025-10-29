import { config } from "dotenv";
import { connectDB } from "./config/db";
import app from "./app";

config(); // load .env

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  await connectDB();
  console.log(`✅ Server running on port ${PORT}`);
});
