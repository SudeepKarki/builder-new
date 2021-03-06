import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RouterApp from "router/index";
import LoadingSpinner from "components/LoadingSpinner";
import { Layout } from "antd";
import TopHeader from "layout/TopHeader";
import Footer from "layout/Footer";

function App() {
  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner />}>
        <Router>
          <TopHeader />
          <RouterApp />
          <Footer />
        </Router>
      </Suspense>
    </Layout>
  );
}

export default App;
