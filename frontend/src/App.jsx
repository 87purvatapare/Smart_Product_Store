// import { Box, useColorModeValue } from "@chakra-ui/react";
// import { Route, Routes } from "react-router-dom";

// import CreatePage from "./pages/CreatePage";
// import HomePage from "./pages/HomePage";
// import Navbar from "./components/Navbar";

// function App() {
// 	return (
// 		<Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
// 			<Navbar />
// 			<Routes>
// 				<Route path='/' element={<HomePage />} />
// 				<Route path='/create' element={<CreatePage />} />
// 			</Routes>
// 		</Box>
// 	);
// }

// export default App;

// src/App.jsx

import { Box, useColorModeValue } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import SignupPage from './pages/SignupPage'; // ✅ Correct casing
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/signup" element={<SignupPage />} /> {/* ✅ Correct */}
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Box>
  );
}

export default App;
