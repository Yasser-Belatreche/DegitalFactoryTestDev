import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import { Home } from "./Home/Home";
import { Search } from "./Search/Search";

interface Props {}

const Pages: React.FC<Props> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<p>not found</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export { Pages };
