import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js

export default function NavBar() {
  const [navbarBackground, setNavbarBackground] = useState("transparent");
  const [textColor, setTextColor] = useState("#ffffff"); // Start with white text

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setNavbarBackground("#ffffff"); // Change to white background
        setTextColor("#000000"); // Change text to black
      } else {
        setNavbarBackground("transparent"); // Transparent background at top
        setTextColor("#ffffff"); // White text for dark background
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar
      position="fixed"
      style={{
        backgroundColor: navbarBackground,
        boxShadow: "none", // Remove the white bar/shadow
        transition: "background-color 0.3s ease", // Smooth transition for bg color
      }}
      elevation={0}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo Image on the Left with Auto Height and Pointer on Hover */}
        <Box sx={{ cursor: "pointer", display: "flex", alignItems: "center" }}>
          <Image
            src="/logo.png" // Path to your logo
            alt="Contrario AI Logo"
            width={160} // Adjust the width
            height={40} // This will maintain aspect ratio with auto height
            layout="intrinsic" // Intrinsic layout maintains the aspect ratio
            priority // Ensures the logo loads early
          />
        </Box>

        {/* Navigation Links */}
        <Box>
          {/* Link the Contact Us button to the contact page */}
          <Link href="/contact" passHref>
            <Button sx={{ mx: 2 }} style={{ color: textColor }}>
              Contact Us
            </Button>
          </Link>

          {/* Open Calendly in a new tab */}
          <Button
            variant="outlined"
            style={{ color: textColor, borderColor: textColor }}
            href="https://calendly.com/contrarioai/contrario"
            target="_blank" // Open in new tab
            rel="noopener noreferrer" // Security best practice for external links
          >
            Get Started
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
