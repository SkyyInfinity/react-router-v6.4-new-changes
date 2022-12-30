import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import App from "./App";
import Home, { fetchAllPosts } from './pages/Home';
import Contact from './pages/Contact';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={ <App/> }>
            <Route index element={ <Home/> } loader={ fetchAllPosts }/>
            <Route path="/contact" element={ <Contact/> }/>
        </Route>
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<RouterProvider router={ router }/>
);
