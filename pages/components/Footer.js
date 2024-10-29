import React from "react";
import { Box, Typography, Container, Grid, Button } from "@mui/material";
import { styled, keyframes } from "@mui/system";
import Image from "next/image";

// Keyframes for scrolling animation
const scrollAnimation = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); } // only scrolls half the distance to loop seamlessly
`;

// Styled Footer Section
const FooterSection = styled(Box)(({ theme }) => ({
  backgroundColor: "#000000", // Black background
  color: "#ffffff", // White text
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
  textAlign: "center",
}));

// Scrolling Container for Logos
const ScrollingContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  overflow: "hidden",
  width: "100%", // Full width of footer
  marginTop: theme.spacing(4), // Space above the scrolling row
  padding: theme.spacing(2, 0), // Vertical padding
}));

// Inner Scrolling Content
const ScrollingContent = styled(Box)({
  display: "flex",
  alignItems: "center",
  animation: `${scrollAnimation} 30s linear infinite`, // Adjusted speed for a smooth scroll
  whiteSpace: "nowrap",
  willChange: "transform",
});

// Logo Container Box for setting consistent height
const LogoBox = styled(Box)({
  flex: "0 0 auto", // Prevents logos from shrinking
  height: "80px", // Consistent logo height
  margin: "0 48px", // Increased space between logos
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const logos = [
  {
    src: "/past-logos/bcg-logo-black.png",
    alt: "BCG",
    width: 100,
    height: 100,
  },
  { src: "/past-logos/DoD-logo.png", alt: "DoD", width: 100, height: 100 },
  {
    src: "/past-logos/Juniper-logo.webp",
    alt: "Juniper",
    width: 200,
    height: 50,
  },
  {
    src: "/past-logos/stanfordlogo.png",
    alt: "Stanford",
    width: 100,
    height: 100,
  },
  { src: "/past-logos/nasa.png", alt: "NASA", width: 100, height: 100 },
  {
    src: "/past-logos/microsoft-logo.png",
    alt: "Microsoft",
    width: 200,
    height: 70,
  },
];

export default function Footer() {
  return (
    <FooterSection>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Left side: Title */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
              Built by the Best Engineers From:
            </Typography>
          </Grid>

          {/* Right side: Description */}
          <Grid item xs={12} md={6}>
            <Typography variant="body1" paragraph>
              Our team brings firsthand experience from Juniper Networks, NASA,
              and BCG, inspiring us to build Contrario AI to streamline hiring
              through automation.
            </Typography>
          </Grid>
        </Grid>

        {/* Scrolling Logo Row */}
        <ScrollingContainer>
          <ScrollingContent>
            {/* Display logos twice for seamless infinite scroll */}
            {logos.map((logo, index) => (
              <LogoBox key={index}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  style={{ objectFit: "contain", maxHeight: "100%" }}
                />
              </LogoBox>
            ))}
            {logos.map((logo, index) => (
              <LogoBox key={`dup-${index}`}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  style={{ objectFit: "contain", maxHeight: "100%" }}
                />
              </LogoBox>
            ))}
          </ScrollingContent>
        </ScrollingContainer>

        {/* Footer Bottom Row */}
        <Box mt={4} display="flex" justifyContent="space-between">
          {/* Left: Copyright */}
          <Typography variant="body2">
            © 2024 Contrario. All rights reserved.
          </Typography>

          {/* Right: Contact and CTA */}
          <Box>
            <Button variant="outlined" color="secondary" sx={{ mr: 2 }}>
              Contact Us
            </Button>
            <Button variant="contained" color="primary">
              Try Contrario Now
            </Button>
          </Box>
        </Box>
      </Container>
    </FooterSection>
  );
}
