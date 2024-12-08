import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, IconButton, Typography, Button, Switch, Box, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom"; // Import Link and useLocation from react-router-dom

const Navbar = ({ toggleTheme, isDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // State to manage mobile menu open/close
  const location = useLocation(); // Get the current location (route)

  // Change background color on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Adjust threshold as needed
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Function to check if the route is active
  const isActive = (path) => location.pathname === path;

  return (
    <AppBar
      position="fixed" // Keeps the header static on scroll
      sx={{
        background: scrolled
          ? isDarkMode
            ? "black"
            : "#24243e" // Darker shade on scroll
          : isDarkMode
          ? "transparent"
          : "linear-gradient(145deg, #0f0c29, #302b63, #24243e)",
        boxShadow: scrolled ? "0px 4px 6px rgba(0, 0, 0, 0.1)" : "none",
        padding: "0 2rem",
        transition: "background 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
      }}
    >
      <Toolbar sx={{ maxWidth: "1200px", width: "100%", margin: "0 auto" }}>
        {/* Brand Name */}
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
            color: isDarkMode ? "white" : "#fff",
          }}
        >
          CEEPRINTZ
        </Typography>

        {/* Navigation Buttons */}
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Button
            component={Link}
            to="/"
            sx={{
              color: isDarkMode ? "white" : "#fff",
              textDecoration: "none",
              ":focus": { outline: "none", border: "none" },
              borderBottom: isActive("/") ? "2px solid red" : "none", 
            }}
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/projects"
            sx={{
              color: isDarkMode ? "white" : "#fff",
              textDecoration: "none",
              ":focus": { outline: "none", border: "none" },
              // borderBottom: isActive("/projects") ? "2px solid red" : "none", // Apply red bottom border if active
            }}
          >
            Projects
          </Button>
          <Button
            component={Link}
            to="/skills"
            sx={{
              color: isDarkMode ? "white" : "#fff",
              textDecoration: "none",
              ":focus": { outline: "none", border: "none" },
              // borderBottom: isActive("/skills") ? "2px solid red" : "none", // Apply red bottom border if active
            }}
          >
            Skills
          </Button>
          <Button
            component={Link}
            to="/services"
            sx={{
              color: isDarkMode ? "white" : "#fff",
              textDecoration: "none",
              ":focus": { outline: "none", border: "none" },
              // borderBottom: isActive("/services") ? "2px solid red" : "none", // Apply red bottom border if active
            }}
          >
            Services
          </Button>
        </Box>

        {/* Theme Toggle Switch */}
        <Switch
          checked={isDarkMode}
          onChange={toggleTheme}
          color="default"
          inputProps={{ "aria-label": "theme toggle" }}
        />

        {/* Mobile Menu Button (Hamburger) */}
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          sx={{
            display: { xs: "block", sm: "none" },
            ":focus": { outline: "none", border: "none" },
          }}
          onClick={toggleMobileMenu}
        >
          <MenuIcon sx={{ color: isDarkMode ? "white" : "#fff" }} />
        </IconButton>

        {/* Mobile Drawer (Slide Out Menu) */}
        <Drawer
          anchor="right"
          open={mobileMenuOpen}
          onClose={toggleMobileMenu}
        >
          <Box sx={{ width: 250, padding: 2 }}>
            <Button
              component={Link}
              to="/"
              sx={{ display: "block", color: isDarkMode ? "black" : "#000", padding: "10px 0" }}
            >
              Home
            </Button>
            <Button
              component={Link}
              to="/projects"
              sx={{ display: "block", color: isDarkMode ? "black" : "#000", padding: "10px 0" }}
            >
              Projects
            </Button>
            <Button
              component={Link}
              to="/skills"
              sx={{ display: "block", color: isDarkMode ? "black" : "#000", padding: "10px 0" }}
            >
              Skills
            </Button>
            <Button
              component={Link}
              to="/services"
              sx={{ display: "block", color: isDarkMode ? "black" : "#000", padding: "10px 0" }}
            >
              Services
            </Button>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
