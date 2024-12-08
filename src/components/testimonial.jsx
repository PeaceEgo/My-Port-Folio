import React, { useEffect, useState, useRef } from "react";
import { Box, Typography, Grid } from "@mui/material";

const ClientSection = () => {
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);
  const [coffee, setCoffee] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false); // To prevent repeated animation
  const sectionRef = useRef(null); // Reference for the section

  // Counter animation function
  const animateCounters = () => {
    const animateValue = (setter, target, duration) => {
      const increment = target / (duration / 10); // Increment value per interval
      let current = 0;

      const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }
        setter(Math.floor(current)); // Update state
      }, 10); // Interval time (ms)
    };

    animateValue(setProjects, 15, 3000); // Animate to 25 in 2 seconds
    animateValue(setClients, 15, 3000); // Animate to 25 in 2 seconds
    animateValue(setCoffee, 3, 3000); // Animate to 100 in 2 seconds
  };

  // Observe when the section enters the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
        //   setHasAnimated(true); // Prevent animation from running again
          animateCounters();
        }
      },
      { threshold: 0.2 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <Box
      ref={sectionRef}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" }, // Stack elements on small screens
        alignItems: "center",
        justifyContent: "space-between",
        py: 6,
        px: 4,
        background: "linear-gradient(145deg, #0f0c29, #302b63, #24243e)",
        color: "#fff",
        minHeight: "50vh",
      }}
    >
      {/* Left Side - Image */}
      <Box
        sx={{
          flex: 1,
          textAlign: "center",
          mb: { xs: 4, sm: 0 }, // Add margin bottom on small screens to separate from text
        }}
      >
        <img
          src="/assets/happyClients.png"
          alt="Client Section"
          style={{
            borderRadius: "8px",
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </Box>

      {/* Right Side - Counters and Text */}
      <Box sx={{ flex: 1, textAlign: "center", px: 4 }}>
        <Typography
          variant="h4"
          sx={{
            mb: 4,
            textTransform: "uppercase",
            color: "#f50057", 
            fontWeight: "bold",
          }}
        >
          Some Words From Clients
        </Typography>

        {/* Client Feedback */}
        <Typography
          sx={{
            fontStyle: "italic",
            fontSize: "1.2rem",
            mb: 4,
            color: "#90caf9", 
          }}
        >
          "Working with Nnorom Peace was an absolute pleasure! From start to finish, the process was seamless, professional, and above all, creative. Her attention to detail and commitment to excellence truly set her apart. I couldn’t be happier with the results. If you’re looking for a top-notch experience, look no further!"
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            mb: 4,
            color: "#fff", 
            fontWeight: "bold",
          }}
        >
          Princess Frank
        </Typography>

        {/* Counters */}
        <Grid container spacing={4}>
          {/* Projects Done */}
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h3"
              sx={{ fontWeight: "bold", color: "#f50057" }} // Light green
            >
              {projects}+
            </Typography>
            <Typography variant="subtitle1">Projects Done</Typography>
          </Grid>

          {/* Happy Clients */}
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h3"
              sx={{ fontWeight: "bold", color: "#f50057" }}
            >
              {clients}+
            </Typography>
            <Typography variant="subtitle1">Happy Clients</Typography>
          </Grid>

          {/* Coffee Cups */}
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h3"
              sx={{ fontWeight: "bold", color: "#f50057" }}
            >
              {coffee}+
            </Typography>
            <Typography variant="subtitle1">Years Of Experience</Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ClientSection;
