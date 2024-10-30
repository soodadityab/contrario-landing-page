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
          px: 2,
          fontFamily: "Inter, sans-serif",
        }}
      >
        {/* Logo Image with Link to Homepage */}
        <Box
          component="a"
          href="/"
          sx={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            marginTop: "12px",
            marginLeft: "4px",
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

        {isMobile ? (
          <>
            {/* Mobile Menu Icon */}
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleMenuOpen}
              sx={{
                marginRight: "4px",
                fontSize: "2rem",
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
                  backgroundColor: "black",
                  color: "#ffffff",
                  width: "100%",
                  top: "110px",
                  left: 0,
                  backgroundColor: "black",
                  color: "#ffffff",
                  width: "100%",
                  top: "110px",
                  left: 0,
                  marginTop: "20px",
                },
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              {/* Waitlist Menu Item */}
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
              {/* Get Started Menu Item */}
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
