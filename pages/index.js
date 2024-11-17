import { Box, Typography, Button, Container, Grid } from "@mui/material";
import { styled } from "@mui/system";
import Image from "next/image";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SoundWaveAnimation from "./components/SoundWaveAnimation";
import React from "react";
import CalendarIcon from "@mui/icons-material/CalendarToday"; // Or use an SVG import if specific
import BarChartIcon from "@mui/icons-material/BarChart";
import CheckmarkIcon from "@mui/icons-material/CheckCircle";

// Styled component for the hero section
const Section = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "bgColor" && prop !== "textColor" && prop !== "minHeight",
})(({ theme, bgColor, textColor, minHeight }) => ({
  backgroundColor: bgColor,
  color: textColor,
  display: "flex",
  alignItems: "center",
  minHeight: minHeight || "100vh", // Default to '100vh' if minHeight is not provided
  padding: theme.spacing(8),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(4),
  },
}));

export default function Home() {
  // Updated statsData array
  const statsData = [
    {
      icon: <CalendarIcon sx={{ fontSize: "3rem", color: "white" }} />,
      initialValue: 44,
      finalValue: 20,
      label: "Days to hire candidates",
      prefix: "",
    },
    {
      icon: (
        <BarChartIcon
          sx={{
            fontSize: "3rem",
            color: "white",
          }}
        />
      ),
      initialValue: 4700,
      finalValue: 2600,
      label: "Total cost per candidate",
      prefix: "$",
      suffix: "",
    },
    {
      icon: <CheckmarkIcon sx={{ fontSize: "3rem", color: "white" }} />,
      initialValue: 4,
      finalValue: 12,
      label: "Success rate of placing candidates",
      prefix: "",
      suffix: "%",
    },
  ];

  function StatCard({ icon, initialValue, finalValue, label, prefix, suffix }) {
    const [value, setValue] = React.useState(initialValue);

    React.useEffect(() => {
      let startTime;
      const duration = 3000; // Animation duration in milliseconds

      function animate(time) {
        if (!startTime) startTime = time;
        const elapsed = time - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Calculate the current value based on progress
        const currentValue =
          initialValue + (finalValue - initialValue) * progress;

        setValue(Math.round(currentValue));

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          // Restart the animation after a delay
          setTimeout(() => {
            startTime = null;
            requestAnimationFrame(animate);
          }, 3000); // Delay before restarting
        }
      }

      requestAnimationFrame(animate);

      // Cleanup function to prevent memory leaks
      return () => {
        startTime = null;
      };
    }, [initialValue, finalValue]);

    return (
      <Box
        sx={{
          backgroundColor: "#000000",
          color: "#ffffff",
          padding: "24px",
          textAlign: "center",
          padding: "8px 0",
          flex: 1,
          margin: 0,
        }}
      >
        {icon}
        <Typography variant="h3" sx={{ fontWeight: "bold", fontSize: "3rem" }}>
          {prefix}
          {value}
          {suffix}
        </Typography>
        <Typography
          variant="h6"
          sx={{ marginTop: "8px", fontSize: "0.875rem" }}
        >
          {label}
        </Typography>
      </Box>
    );
  }

  return (
    <>
      {/* Navbar at the top */}
      <NavBar />

      {/* Hero Section */}
      <Section bgColor="#000000" textColor="#ffffff" minHeight="100vh">
        <Container maxWidth="xl">
          <Grid container alignItems="center" spacing={4}>
            {/* Left Side - Text Content */}
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: "left", mt: 0 }}>
                <Typography
                  variant="h1"
                  gutterBottom
                  sx={{
                    fontSize: "clamp(2rem, 5vw, 4rem)", // Dynamically adjust font size for two lines
                    fontWeight: "bold",
                    lineHeight: "1.2",
                    marginBottom: "20px",
                    maxWidth: "95%",
                  }}
                >
                  AI-Powered Talent Screening
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Typography
                    variant="h5"
                    paragraph
                    sx={{
                      fontSize: "clamp(1rem, 2.5vw, 1.4rem)", // Dynamically adjust font size for four lines
                      lineHeight: "1.5",
                      marginBottom: "10px",
                      maxWidth: "95%",
                    }}
                  >
                    Recruitment agencies, Series C+ companies, & talent
                    acquisition teams leverage Contrario to compress
                    time-to-hire, vet qualified candidates, and automate their
                    hiring processes.
                  </Typography>
                  {/* Demo Video Button */}
                  <Button
                    href="https://www.youtube.com/watch?v=grTjbvJSVhU&feature=youtu.be"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outlined"
                    sx={{
                      color: "#000000",
                      backgroundColor: "#ffffff",
                      borderColor: "#ffffff",
                      fontSize: "1.1rem",
                      padding: "8px 16px",
                      fontFamily: "Inter, sans-serif",
                      "&:hover": {
                        backgroundColor: "#000000",
                        color: "#ffffff",
                      },
                      mt: 1,
                      width: {
                        xs: "80%",
                        sm: "40%",
                      },
                      whitespace: "nowrap",
                    }}
                  >
                    See Live Demo{" "}
                    <span style={{ marginLeft: "8px", fontSize: "1rem" }}>
                      ↗
                    </span>
                  </Button>
                </Box>
              </Box>
            </Grid>

            {/* Right Side - Centered Animation with reduced gap */}
            <Grid
              item
              xs={12}
              md={6}
              display="flex"
              justifyContent="center"
              sx={{ xs: 0, med: -4 }}
            >
              <SoundWaveAnimation />
            </Grid>

            {/* Stats below Animation */}
            <Grid item xs={12} sx={{ mt: 4 }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" }, // Stack vertically on small screens
                  flexWrap: "wrap",
                  width: "100%",
                  margin: 0,
                  padding: 0,
                  gap: { xs: 2, sm: 0 }, // Adds spacing between items on small screens
                }}
              >
                {statsData.map((stat, index) => (
                  <StatCard {...stat} key={index} />
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Section>

      {/* Info Section */}
      <Section
        bgColor="#ffffff"
        textColor="#000000"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Grid container spacing={0} alignItems="center">
            {/* Left Side - Text Content */}
            <Grid item xs={12} md={5}>
              <Box sx={{ textAlign: "left", padding: "0 24px" }}>
                <Typography
                  variant="overline"
                  display="block"
                  sx={{
                    fontSize: "1.2rem",
                    color: "#666",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  Custom Recruiting
                </Typography>
                <Typography
                  variant="h1"
                  gutterBottom
                  sx={{
                    fontWeight: "700",
                    fontSize: "3rem",
                    lineHeight: "1.2",
                    color: "#000",
                  }}
                >
                  Recruiting Software for Faster Hires
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{ fontSize: "1rem", color: "#555", marginTop: "16px" }}
                >
                  Automatically screen candidates on technical and behavioral
                  skills tailored to their resume and the company job
                  description. We seamlessly integrate into existing ATS and
                  recruitment software to streamline hiring decisions.
                </Typography>
                <Box sx={{ marginTop: "30px" }}>
                  <a
                    href="https://calendly.com/contrarioai/contrario"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <Box
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        backgroundColor: "#000",
                        color: "#fff",
                        padding: "14px 28px",
                        borderRadius: "8px",
                        fontWeight: "600",
                        fontSize: "1rem",
                        fontFamily: "Inter, sans-serif",
                        transition: "background-color 0.3s",
                        "&:hover": { backgroundColor: "#333" },
                        marginBottom: { xs: 4, sm: 0 }, // Add this line
                      }}
                    >
                      Try Contrario Now{" "}
                      <span style={{ marginLeft: "8px", fontSize: "1rem" }}>
                        ↗
                      </span>
                    </Box>
                  </a>
                </Box>
              </Box>
            </Grid>

            {/* Right Side - Strategically Placed Larger Image on Mobile */}
            <Grid item xs={12} md={7}>
              <Box
                sx={{
                  position: "relative",
                  width: { xs: "100%", sm: "98%" }, // Full width on mobile, slight padding on larger screens
                  padding: { xs: "0", sm: "10px" }, // Remove padding on mobile to maximize image size
                  border: "1px solid #e0e0e0",
                  borderRadius: { xs: "0", sm: "16px" },
                  boxShadow: { sm: "0 4px 12px rgba(0, 0, 0, 0.1)" },
                  overflow: "hidden",
                  marginBottom: { xs: 3, sm: 4 },
                }}
              >
                <Image
                  src="/product.png"
                  alt="Contrario AI Product Interface"
                  layout="responsive"
                  width={1000}
                  height={600}
                  objectFit="cover"
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Section>
      {/* Second Info Section */}
      <Section
        bgColor="#000000" // Changed from "#ffffff" to "#000000"
        textColor="#ffffff" // Changed from "#000000" to "#ffffff"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Grid container spacing={6} alignItems="center">
            {/* Left Side - Image on Desktop */}
            <Grid item xs={12} md={7} order={{ xs: 2, md: 1 }}>
              {" "}
              <Box
                sx={{
                  position: "relative",
                  width: { xs: "100%", sm: "98%" },
                  padding: { xs: "0", sm: "10px" },
                  border: "1px solid #e0e0e0",
                  borderRadius: { xs: "6px", sm: "16px" },
                  boxShadow: { sm: "0 4px 12px rgba(0, 0, 0, 0.1)" },
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/codingwhite.png"
                  alt="Contrario AI Product Interface"
                  layout="responsive"
                  width={1000}
                  height={600}
                  objectFit="cover"
                />
              </Box>
            </Grid>

            {/* Right Side - Text Content on Desktop */}
            <Grid item xs={12} md={5} order={{ xs: 1, md: 2 }}>
              {" "}
              <Box sx={{ textAlign: "left", padding: "0 24px" }}>
                <Typography
                  variant="overline"
                  display="block"
                  sx={{
                    fontSize: "1.2rem",
                    color: "#ccc", // Changed from "#666" to "#ccc"
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  Skills Verification
                </Typography>
                <Typography
                  variant="h1"
                  gutterBottom
                  sx={{
                    fontWeight: "700",
                    fontSize: "3rem",
                    lineHeight: "1.2",
                    color: "#fff", // Changed from "#000" to "#fff"
                  }}
                >
                  Live AI Coding Feedback
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{ fontSize: "1rem", color: "#ddd", marginTop: "16px" }} // Changed color from "#555" to "#ddd"
                >
                  Contrario AI agents review code snippets periodically and
                  answer questions in real-time, simulating a conversation with
                  a live technical interviewer. Verify candidate skills across
                  coding languages, with additional technical verification
                  methods launching soon.
                </Typography>
                <Box sx={{ marginTop: "30px" }}>
                  <a
                    href="https://calendly.com/contrarioai/contrario"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <Box
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        backgroundColor: "#fff",
                        color: "#000",
                        padding: "14px 28px",
                        borderRadius: "8px",
                        fontWeight: "600",
                        fontSize: "1rem",
                        fontFamily: "Inter, sans-serif",
                        transition: "background-color 0.3s",
                        "&:hover": { backgroundColor: "#333" },
                      }}
                    >
                      Try Contrario Now{" "}
                      <span style={{ marginLeft: "8px", fontSize: "1rem" }}>
                        ↗
                      </span>
                    </Box>
                  </a>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Section>
      {/* Third Info Section */}
      <Section
        bgColor="#ffffff"
        textColor="#000000"
        style={{ fontFamily: "Inter, sans-serif", padding: 0, margin: 0 }}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Grid container spacing={6} alignItems="center">
            {/* Left Side - Text Content */}
            <Grid item xs={12} md={5}>
              <Box sx={{ textAlign: "left", padding: "0 24px" }}>
                <Typography
                  variant="overline"
                  display="block"
                  sx={{
                    fontSize: "1.2rem",
                    color: "#666",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  Evaluation Reports
                </Typography>
                <Typography
                  variant="h1"
                  gutterBottom
                  sx={{
                    fontWeight: "700",
                    fontSize: "3rem",
                    lineHeight: "1.2",
                    color: "#000",
                  }}
                >
                  Custom Candidate Scorecards
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{ fontSize: "1rem", color: "#555", marginTop: "16px" }}
                >
                  At the end of every job screening, we generate talent
                  assessment scorecards for each candidate in 2 seconds,
                  detailing candidate scores, target development areas, and
                  summarized interview transcripts that are instantly sent to
                  recruiting & talent acqusition teams.
                </Typography>
                <Box sx={{ marginTop: "30px" }}>
                  <a
                    href="https://calendly.com/contrarioai/contrario"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <Box
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        backgroundColor: "#000",
                        color: "#fff",
                        padding: "14px 28px",
                        borderRadius: "8px",
                        fontWeight: "600",
                        fontSize: "1rem",
                        fontFamily: "Inter, sans-serif",
                        transition: "background-color 0.3s",
                        "&:hover": { backgroundColor: "#333" },
                      }}
                    >
                      Try Contrario Now{" "}
                      <span style={{ marginLeft: "8px", fontSize: "1rem" }}>
                        ↗
                      </span>
                    </Box>
                  </a>
                </Box>
              </Box>
            </Grid>

            {/* Right Side - Strategically Placed Larger Image on Mobile */}
            <Grid item xs={12} md={7}>
              <Box
                sx={{
                  position: "relative",
                  width: { xs: "100%", sm: "98%" }, // Full width on mobile, slight padding on larger screens
                  padding: { xs: "0", sm: "10px" }, // Remove padding on mobile to maximize image size
                  border: "1px solid #e0e0e0",
                  borderRadius: { xs: "0", sm: "16px" },
                  boxShadow: { sm: "0 4px 12px rgba(0, 0, 0, 0.1)" },
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/evaluation.png"
                  alt="Contrario AI Product Interface"
                  layout="responsive"
                  width={1000}
                  height={600}
                  objectFit="cover"
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Section>

      {/* Footer */}
      <Footer />
    </>
  );
}
