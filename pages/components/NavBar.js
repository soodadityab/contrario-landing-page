import { AppBar, Toolbar, Button, Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <AppBar
      position="static" // Static position so it stays at the top of each page but doesn’t scroll with the user
      style={{
        backgroundColor: "transparent",
        boxShadow: "none",
      }}
      elevation={0}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          px: 4,
          fontFamily: "Inter, sans-serif",
        }}
      >
        {/* Logo Image with Link to Homepage */}
        <Link href="/" passHref>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              marginTop: "12px",
            }}
          >
            <Image
              src="/logo.png"
              alt="Contrario AI Logo"
              width={200}
              height={80}
              layout="intrinsic"
              priority
            />
          </Box>
        </Link>

        {/* Navigation Links */}
        <Box display="flex" alignItems="center" sx={{ gap: 4, mr: 8 }}>
          {/* Waitlist Button */}
          <Link href="/waitlist" passHref>
            <Button
              sx={{
                color: "#ffffff",
                fontSize: "1.1rem",
                fontFamily: "Inter, sans-serif",
                fontWeight: "bold",
                fontSize: "18px",
                backgroundColor: "transparent",
                "&:hover": {
                  color: "#888888", // Dim the text color on hover
                  backgroundColor: "transparent",
                },
              }}
            >
              Join Waitlist
            </Button>
          </Link>

          {/* Get Started Button */}
          <Button
            variant="outlined"
            sx={{
              color: "#000000", // Black text
              backgroundColor: "#ffffff", // White background
              borderColor: "#ffffff",
              fontSize: "1.1rem",
              padding: "8px 16px",
              fontFamily: "Inter, sans-serif",
              "&:hover": {
                backgroundColor: "#000000", // Black background on hover
                color: "#ffffff", // White text on hover
              },
            }}
            href="https://calendly.com/contrarioai/contrario"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Started{" "}
            <span style={{ marginLeft: "8px", fontSize: "1rem" }}>↗</span>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
