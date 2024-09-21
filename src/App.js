import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import { Helmet } from 'react-helmet';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <>
            <Helmet>
              <title>Ana Sayfa | Mutlu Can ÖZEL</title>
              <meta name="description" content="Yazılım Geliştirici" />
            </Helmet>
            <Home />
          </>
        } 
      />
      <Route 
        path="/about" 
        element={
          <>
            <Helmet>
              <title>Mutlu Can ÖZEL Hakkında</title>
              <meta name="description" content="Mutlu Can ÖZEL kimdir ?" />
            </Helmet>
            <About />
          </>
        } 
      />
      <Route 
        path="/project" 
        element={
          <>
            <Helmet>
              <title>Geliştirilen Projeler</title>
              <meta name="description" content="Mutlu Can ÖZEL tarafomdam geliştirilen, tamamlanmış ve yayınlanan projeleri bu sayfada bulabilirisiniz." />
            </Helmet>
            <Project />
          </>
        } 
      />
      <Route 
        path="/contact" 
        element={
          <>
            <Helmet>
              <title>İletişim</title>
              <meta name="description" content="İletişim formunu doldurarak veya sosyal medya hesaplarımdan bana ulaşabilirsiniz." />
            </Helmet>
            <Contact />
          </>
        } 
      />
    </Routes>
  );
}

export default App;
