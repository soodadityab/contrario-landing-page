import { Box, Typography, Button, Container, Grid } from "@mui/material";
import { styled } from "@mui/system";
import Image from "next/image";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SoundWaveAnimation from "./components/SoundWaveAnimation";

// Styled component for the hero section
const Section = styled(Box)(({ theme, bgColor, textColor }) => ({
  backgroundColor: bgColor,
  color: textColor,
  display: "flex",
  alignItems: "center",
  minHeight: "100vh",
  padding: theme.spacing(10),
}));

export default function Home() {
  return (
    <>
      {/* Navbar at the top */}
      <NavBar />

      {/* Hero Section with Split Layout */}
      <Section bgColor="#000000" textColor="#ffffff">
        <Container maxWidth="xl">
          <Grid container alignItems="center" spacing={4}>
            {/* Left Side - Text Content */}
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: "left", mt: -10 }}>
                {" "}
                {/* Move text content higher */}
                <Typography
                  variant="h1"
                  gutterBottom
                  sx={{
                    fontSize: "4rem",
                    fontWeight: "bold",
                    lineHeight: "1.2",
                    marginBottom: "40px", // Reduced bottom margin
                    maxWidth: "95%",
                  }}
                >
                  AI-Powered Talent Screening
                </Typography>
                <Typography
                  variant="h5"
                  paragraph
                  sx={{
                    fontSize: "1.4rem",
                    lineHeight: "1.5",
                    marginBottom: "30px", // Reduced bottom margin
                    maxWidth: "95%",
                  }}
                >
                  Recruitment agencies, Series C+ companies, & talent
                  acquisition teams leverage Contrario to compress time-to-hire,
                  vet qualified candidates, and automate their hiring processes.
                </Typography>
                <Box sx={{ mt: 6 }}>
                  <Button
                    variant="outlined"
                    sx={{
                      color: "#000000",
                      backgroundColor: "#ffffff",
                      borderColor: "#ffffff",
                      fontSize: "1.2rem",
                      padding: "10px 20px",
                      fontFamily: "Inter, sans-serif",
                      fontWeight: "bold",
                      "&:hover": {
                        backgroundColor: "#000000",
                        color: "#ffffff",
                      },
                    }}
                    href="https://calendly.com/contrarioai/contrario"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Try Contrario Now{" "}
                    <span style={{ marginLeft: "8px", fontSize: "1.25rem" }}>
                      ↗
                    </span>
                  </Button>
                </Box>
              </Box>
            </Grid>

            {/* Right Side - Soundwave Animation */}
            <Grid item xs={12} md={6} display="flex" justifyContent="center">
              <SoundWaveAnimation />
            </Grid>
          </Grid>
        </Container>
      </Section>

      {/* Info Section 1 */}
      <Section
        bgColor="#ffffff"
        textColor="#000000"
        style={{ height: "100vh", fontFamily: "Inter, sans-serif" }}
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
                  Our Platform
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
                  Recruitment software for faster hires
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{ fontSize: "1.25rem", color: "#555", marginTop: "16px" }}
                >
                  Automatically screen candidates on technical and behavioral
                  skills tailored to their resume and job description, with
                  seamless integration into existing ATS and recruitment
                  software for streamlined hiring decisions.
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
                      <span style={{ marginLeft: "8px", fontSize: "1.25rem" }}>
                        ↗
                      </span>
                    </Box>
                  </a>
                </Box>
              </Box>
            </Grid>

            {/* Right Side - Image */}
            <Grid item xs={12} md={7}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  padding: "20px",
                  border: "1px solid #e0e0e0",
                  borderRadius: "16px",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/product.png" // Ensure the image is named product.png in the public folder
                  alt="Contrario AI Product Interface"
                  layout="responsive"
                  width={1000} // Adjust width for responsiveness
                  height={600} // Adjust height to match aspect ratio
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
