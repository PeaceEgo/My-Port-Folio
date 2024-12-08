import React, { useState } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import HeroSection from "./heroSection";
import AboutSection from "./aboutSection";
import MySkills from "./skills";
import ServicesSection from "./service";
import ProjectsSection from "./projects";
import ClientSection from "./components/testimonial";
import Footer from "./components/footer";  

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
          {/* Navbar */}
          <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
          
          {/* Main content */}
          <main style={{ flex: 1 }}>
            <Routes>
              {/* Home route that displays all sections */}
              <Route 
                path="/" 
                element={
                  <>
                    <HeroSection />
                    <AboutSection />
                    <ServicesSection />
                    <MySkills />
                    <ProjectsSection />
                    <ClientSection />
                  </>
                }
              />
              {/* Routes for individual sections */}
              <Route path="/about" element={<AboutSection />} />
              <Route path="/services" element={<ServicesSection />} />
              <Route path="/skills" element={<MySkills />} />
              <Route path="/projects" element={<ProjectsSection />} />
              <Route path="/clients" element={<ClientSection />} />
            </Routes>
          </main>
          
          {/* Footer */}
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
