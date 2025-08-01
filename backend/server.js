
// import express from "express";
// import dotenv from "dotenv";
// import path from "path";
// import cors from "cors";
// import { connectDB } from "./config/db.js";       
// import productRoutes from "./routes/product.route.js";
// import authRoutes from "./routes/auth.route.js";
// import { connectDB } from "./config/db.js";

// dotenv.config();
// const app = express();
// const PORT = process.env.PORT || 5000;
// const __dirname = path.resolve();

// // ✅ Parse JSON bodies
// app.use(express.json());

// // ✅ Allow CORS for both dev and production
// app.use(cors({
//   origin: [
//     "http://localhost:5173",
//     "https://smart-product-store-2.onrender.com"
//   ],
//   credentials: true
// }));

// // ✅ Routes
// app.use("/api/products", productRoutes);
// app.use("/api/auth", authRoutes);

// // ✅ Serve frontend in production

// app.listen(PORT, () => {
//   connectDB();
//   console.log(`Server started at http://localhost:${PORT}`);
// });

import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors"; // 

import { connectDB } from "./config/db.js";

import productRoutes from "./routes/product.route.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

const allowedOrigins = [
  "http://localhost:5173",
  "https://smart-product-store-2.onrender.com"
]; //
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
})); 

app.use(express.json()); // allows us to accept JSON data in the req.body

app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}

app.listen(PORT, () => {
	connectDB();
	console.log("Server started at http://localhost:" + PORT);
});