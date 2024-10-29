import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useMediaQuery } from "@mui/material";

export default function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMobile = useMediaQuery("(max-width:800px)");

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "transparent",
        boxShadow: "none",
      }}
      elevation={0}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          px: 2, // Slightly closer to edges
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
              marginLeft: "4px", // Align closer to the left edge
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

        {isMobile ? (
          <>
            {/* Larger Menu Icon for Mobile */}
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleMenuOpen}
              sx={{
                marginRight: "4px", // Align closer to the right edge
                fontSize: "2rem", // Increase size of the icon
              }}
            >
              <MenuIcon fontSize="inherit" />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              PaperProps={{
                style: {
                  backgroundColor: "black", // Black background
                  color: "#ffffff", // White text
                  width: "100%", // Full width dropdown
                  top: "110px", // Drop down below the header
                  left: 0, // Align to the very left
                  marginTop: "20px",
                },
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <MenuItem onClick={handleMenuClose}>
                <Link href="/waitlist" passHref>
                  <Button
                    sx={{
                      color: "#ffffff",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "1.5rem", // Larger text
                      textTransform: "none",
                    }}
                  >
                    Join Waitlist
                  </Button>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Button
                  variant="outlined"
                  sx={{
                    color: "#ffffff",
                    backgroundColor: "#000000",
                    borderColor: "#ffffff",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "1.5rem", // Larger text
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#ffffff",
                      color: "#000000",
                    },
                  }}
                  href="https://calendly.com/contrarioai/contrario"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Started
                </Button>
              </MenuItem>
            </Menu>
          </>
        ) : (
          <Box display="flex" alignItems="center" sx={{ gap: 4, mr: 2 }}>
            {/* Waitlist Button */}
            <Link href="/waitlist" passHref>
              <Button
                sx={{
                  color: "#ffffff",
                  fontSize: "1.1rem",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "bold",
                  backgroundColor: "transparent",
                  "&:hover": {
                    color: "#888888",
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
              }}
              href="https://calendly.com/contrarioai/contrario"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started{" "}
              <span style={{ marginLeft: "8px", fontSize: "1rem" }}>↗</span>
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
