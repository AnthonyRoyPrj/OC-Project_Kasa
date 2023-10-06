import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Lodging from './pages/Lodging';
import Error from './pages/Error';

const Globalstyle = createGlobalStyle`
	* {
		font-family: Montserrat;
		margin: 0;
		padding: 0;
		color: #FF6060;
	}
	main, header {
		margin: auto;
		width: 88%;
	}
	a {
		text-decoration: none;
	}
	ul {
		list-style: none;
	}
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  	<React.StrictMode>
    	<Router>
			<Globalstyle />
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/lodgings/:id" element={<Lodging />} />
				<Route path="*" element={<Error />} />
			</Routes>
			<Footer />
    	</Router>
  	</React.StrictMode>
);