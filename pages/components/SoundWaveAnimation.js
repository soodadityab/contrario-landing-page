import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useRouter } from "next/router";

const SoundWaveAnimation = () => {
  const words = [
    "Accuracy",
    "Efficiency",
    "Right Fit",
    "Talent",
    "Precision",
    "Insights",
    "Alignment",
  ];
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isFading, setIsFading] = useState(true);
  const router = useRouter();
  const isUniversitiesRoute = router.pathname === "/universities";
  const centerTextColor = isUniversitiesRoute ? "#000000" : "#ffffff";
  const spiralStrokeColor = isUniversitiesRoute
    ? "hsl(200, 100%, 40%)"
    : "hsl(200, 100%, 70%)";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setIsFading(false);
      setTimeout(() => {
        index = (index + 1) % words.length;
        setCurrentWord(words[index]);
        setIsFading(true);
      }, 500); // Delay to sync with fade-out animation
    }, 7000); // Word change interval matches with animation loop

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "800px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: "transparent",
        mt: -15,
      }}
    >
      {/* SVG creating a centered spiral pattern */}
      <svg width="100%" height="100%" viewBox="0 0 1200 1200">
        {[...Array(50)].map((_, i) => {
          const radius = 300 + i * 6; // Moderate spiral for better spacing
          return (
            <circle
              key={i}
              cx="600"
              cy="600"
              r={radius}
              stroke={
                isUniversitiesRoute
                  ? `hsl(${200 + i * 5}, 100%, 50%)`
                  : `hsl(${200 + i * 5}, 100%, 70%)`
              }
              strokeWidth="1.2"
              fill="none"
              className="soundwave"
            />
          );
        })}
      </svg>

      {/* Animated Word in the Center */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: centerTextColor,
          fontSize: "2.3em", // Slightly reduced size for better proportional balance
          fontWeight: "bold",
          textAlign: "center",
          opacity: isFading ? 1 : 0,
          transition: "opacity 0.5s ease-in-out", // Faster fade-in/out transition
          zIndex: 1,
        }}
      >
        {currentWord}
      </Box>

      {/* CSS for the animations */}
      <style jsx global>{`
        .soundwave {
          stroke-dasharray: 3600;
          stroke-dashoffset: 3600;
          animation: wave 7s linear infinite; // Faster continuous animation with no abrupt restart
        }

        @keyframes wave {
          0% {
            stroke-dashoffset: 3600;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </Box>
  );
};

export default SoundWaveAnimation;
