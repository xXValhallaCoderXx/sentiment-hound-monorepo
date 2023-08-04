import { Text, Box, Button } from "@chakra-ui/react";
import Image from "next/image";
import HeroImage from "@client/public/images/hero-image.png";

const HeroSection = () => {
  return (
    <Box
      height="calc(100vh - 60px)"
      display="flex"
      flexDirection="column"
      position="relative"
      //   justifyContent="center"
      justifyItems="center"
      bgColor="whatsapp.600"
    >
      <div style={{ position: "absolute", top: "50%" }} aria-hidden="true">
        <svg
          width="100vw"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#e33737" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>
      <Text
        fontSize="6xl"
        textAlign="center"
        fontWeight={600}
        sx={{ mt: 20 }}
        color="white"
      >
        Sentiment Analysis <br /> Made Easy
      </Text>
      <Text fontSize="xl" textAlign="center" mt={5}>
        Sentiment Hound delivers cost-effective sentiment analysis at your
        fingertips,
        <br /> ensuring that no one is left behind in the quest for data-driven
        success
      </Text>
      <Box display="flex" mt={5} justifyContent="center">
        <Button>Get early acceess, and let Gooby loose!</Button>
      </Box>
      <Box display="flex" justifyContent="center" mt={20}>
        <Image alt="hero-image" height={500} src={HeroImage} />
      </Box>
    </Box>
  );
};

export default HeroSection;
