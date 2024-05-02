import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { GalleryProvider } from "./context/GalleryContext.jsx";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./components/pages/Home.jsx";
import DisplayingList from "./components/pages/DispalyingList.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="gallery" element={<DisplayingList />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GalleryProvider>
      <RouterProvider router={router} />
    </GalleryProvider>
  </React.StrictMode>
);
