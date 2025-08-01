// import express from 'express';

// const router = express.Router();

// // Signup route
// router.post('/signup', (req, res) => {
//   const { name, email, password } = req.body;

//   // Placeholder logic (replace with real DB logic)
//   if (!name || !email || !password) {
//     return res.status(400).json({ message: 'All fields are required.' });
//   }

//   return res.status(201).json({ message: 'User registered successfully!' });
// });

// // Login route
// router.post('/login', (req, res) => {
//   const { email, password } = req.body;

//   // Placeholder logic (replace with real DB logic)
//   if (email === 'test@example.com' && password === 'password') {
//     return res.status(200).json({ message: 'Login successful!' });
//   }

//   return res.status(401).json({ message: 'Invalid credentials.' });
// });

// export default router;

// import express from 'express';
// import User from '../models/user.model.js'; // Make sure path is correct
// import bcrypt from 'bcryptjs';

// const router = express.Router();

// // ✅ Signup Route
// router.post('/signup', async (req, res) => {
//   const { name, email, password } = req.body;

//   try {
//     if (!name || !email || !password) {
//       return res.status(400).json({ message: 'All fields are required.' });
//     }

//     const userExists = await User.findOne({ email });
//     if (userExists) {
//       return res.status(400).json({ message: 'User already exists.' });
//     }

//     const user = new User({ name, email, password });
//     await user.save();

//     res.status(201).json({ message: 'User registered successfully!' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error during signup.' });
//   }
// });

// // ✅ Login Route
// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) return res.status(401).json({ message: 'Invalid credentials.' });

//     const isMatch = await user.matchPassword(password);
//     if (!isMatch) return res.status(401).json({ message: 'Invalid credentials.' });

//     res.status(200).json({ message: 'Login successful!' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error during login.' });
//   }
// });

// export default router;

import express from "express";
import { signup, login } from "../controllers/auth.contorller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

export default router;