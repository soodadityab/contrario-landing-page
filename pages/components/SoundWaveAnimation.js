import { useEffect, useState } from "react";
import { Box } from "@mui/material";

const SoundWaveAnimation = () => {
  const words = ["AI-Driven", "Practice", "Confidence", "Interview", "Prepare"];
  const [currentWord, setCurrentWord] = useState(words[0]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % words.length;
      setCurrentWord(words[index]);
    }, 4000); // Change word every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "400px",
        mt: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Multiple SVG Soundwaves */}
      <svg width="100%" height="100%" viewBox="0 0 800 400">
        {/* First Soundwave */}
        <path
          d="M0,200 Q100,100 200,200 T400,200 T600,200 T800,200"
          stroke="#00ffcc"
          strokeWidth="3"
          fill="none"
          className="soundwave"
        />
        {/* Second Soundwave */}
        <path
          d="M0,220 Q150,120 300,220 T600,220 T800,220"
          stroke="#00ffff"
          strokeWidth="2"
          fill="none"
          className="soundwave"
        />
        {/* Third Soundwave */}
        <path
          d="M0,180 Q200,80 400,180 T800,180"
          stroke="#00aaff"
          strokeWidth="1.5"
          fill="none"
          className="soundwave"
        />
      </svg>

      {/* Animated Word in the Center */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#ffffff",
          fontSize: "3em",
          textAlign: "center",
          opacity: 0,
          animation: "fadeIn 4s ease-in-out infinite",
        }}
      >
        {currentWord}
      </Box>

      <style jsx global>{`
        .soundwave {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: wave 6s ease-in-out infinite;
        }

        @keyframes wave {
          0% {
            stroke-dashoffset: 1000;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }

        @keyframes fadeIn {
          0%,
          100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </Box>
  );
};

export default SoundWaveAnimation;
