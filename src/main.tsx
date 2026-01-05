import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import { AnimatePresence } from "framer-motion";

import Layout from "./layout";
import App from "./App";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
import MyCards from "@/pages/MyCards";
import Search from "@/pages/Search";
import Recommendation from "@/pages/Recommendation";
import CardDetail from "@/pages/CardDetail";
import More from "@/pages/More";

import './index.css'

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/my-cards" element={<MyCards />} />
          <Route path="/search" element={<Search />} />
          <Route path="/recommendation" element={<Recommendation />} />
          <Route path="/card-detail" element={<CardDetail />} />
          <Route path="/more" element={<More />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  </StrictMode>
);
