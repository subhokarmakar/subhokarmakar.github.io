import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// utils
import history from "./utils/history";

// pages
import Home from "./routes/home/home";
import Layout from "./components/layout/layout";

const App = () => {
  return (
    <Layout>
      <Router history={history}>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </Layout>
  );
};

export default App;
