import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Switch,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import NextLink from "next/link";
import Link from "next/link";
import { useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);
  const [isRecruitingMode, setIsRecruitingMode] = useState(false);
  const isMobile = useMediaQuery("(max-width:800px)");

  // Initialize isRecruitingMode from localStorage or router.pathname
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("isRecruitingMode");
      if (savedMode !== null) {
        setIsRecruitingMode(JSON.parse(savedMode));
      } else {
        setIsRecruitingMode(router.pathname === "/universities");
      }
    }
  }, [router.pathname]);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSwitchToggle = () => {
    const newMode = !isRecruitingMode;
    setIsRecruitingMode(newMode);
    if (typeof window !== "undefined") {
      localStorage.setItem("isRecruitingMode", JSON.stringify(newMode));
    }
    router.push(newMode ? "/universities" : "/");
  };

  // Hide toggle on the waitlist page
  const showToggle = router.pathname !== "/waitlist";

  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "transparent",
        boxShadow: "none",
        zIndex: 1000,
      }}
      elevation={0}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          px: 2,
          fontFamily: "Inter, sans-serif",
          zIndex: 1000,
        }}
      >
        {/* Logo Image with Link to Homepage */}
        <Link href={isRecruitingMode ? "/universities" : "/"} passHref>
          <Box
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
        </Link>

        {/* Toggle Switch in the Top Middle (Only on Desktop) */}
        {!isMobile && showToggle && (
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              {isRecruitingMode ? "Universities/Colleges" : "Recruiting Teams"}
            </Typography>
            <Switch
              checked={isRecruitingMode}
              onChange={handleSwitchToggle}
              color="default"
            />
          </Box>
        )}

        {isMobile ? (
          <>
            {/* Menu Icon for Mobile */}
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
                  marginTop: "20px",
                },
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <MenuItem onClick={handleMenuClose}>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  sx={{ width: "100%" }}
                >
                  {/* Join Waitlist Button */}
                  <Link component={NextLink} href="/waitlist" passHref>
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
                        width: "100%",
                      }}
                    >
                      Join Waitlist
                    </Button>
                  </Link>

                  {/* Get Started Button */}
                  <Button
                    href="https://calendly.com/contrarioai/contrario"
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
                      width: "100%",
                    }}
                  >
                    Get Started{" "}
                    <span style={{ marginLeft: "8px", fontSize: "1rem" }}>
                      ↗
                    </span>
                  </Button>

                  {/* Toggle Switch Below the "Get Started" Button */}
                  {showToggle && (
                    <Box
                      display="flex"
                      flexDirection="row"
                      alignItems="center"
                      sx={{ mt: 2 }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: "bold",
                          color: "#ffffff",
                          mr: 1,
                        }}
                      >
                        Universities:
                      </Typography>
                      <Switch
                        checked={isRecruitingMode}
                        onChange={handleSwitchToggle}
                        color="default"
                      />
                    </Box>
                  )}
                </Box>
              </MenuItem>
            </Menu>
          </>
        ) : (
          <Box display="flex" alignItems="center" sx={{ gap: 4, mr: 2 }}>
            {/* Join Waitlist Button */}
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
              component="a"
              href="https://calendly.com/contrarioai/contrario"
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
              }}
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
