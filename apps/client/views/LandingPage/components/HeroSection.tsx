import { Text, Box, Button, Flex, Heading } from "@chakra-ui/react";
import Image from "next/image";
import HeroImage from "@client/public/images/hero-image.png";
import { TextGradient, CircleGradient } from "@client/shared/components/atoms";
import SquishyButton from "@client/shared/components/molecules/SquishButton/SquishButton";

const HeroSection = () => {
  return (
    <Flex
      justifyContent="center"
      height="calc(100vh - 60px)"
      position="relative"
    >
      <Box
        position="absolute"
        top="75%"
        left="15%"
        transform="translate(-50%, -50%)"
      >
        <CircleGradient />
      </Box>
      <Box
        position="absolute"
        top="55%"
        right="5%"
        transform="translate(-10%, -50%)"
      >
        <CircleGradient size={300} />
      </Box>

      {/* Content */}
      <Box textAlign="center">
        <Text
          fontSize="6xl"
          textAlign="center"
          fontWeight={600}
          sx={{ mt: 20 }}
          color="black"
        >
          Sentiment Analysis <br /> Made{" "}
          <TextGradient size="2xl" color="primary">
            Easy
          </TextGradient>
        </Text>
        <Text fontSize="xl" textAlign="center" mt={5}>
          Sentiment Hound delivers cost-effective sentiment analysis at your
          fingertips,
          <br /> ensuring that no one is left behind in the quest for
          data-driven success
        </Text>
        <Box display="flex" mt={5} justifyContent="center">
          <SquishyButton colorScheme="red">
            Get early acceess, and let Gooby loose!
          </SquishyButton>
        </Box>
        <Box display="flex" justifyContent="center" mt={10}>
          <Image alt="hero-image" height={350} src={HeroImage} />
        </Box>
      </Box>
    </Flex>
  );
};

export default HeroSection;

{
  /* <Box
// height="calc(100vh - 60px)"
display="flex"
flexDirection="column"
position="relative"
//   justifyContent="center"
justifyItems="center"
// bgColor="whatsapp.600"
>
{/* <div style={{ position: "absolute", top: "50%" }} aria-hidden="true">
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
        <stop stopColor="#e33737" offset="67.402%" />
        <stop stopColor="#DFDFDF" offset="100%" />
      </linearGradient>
    </defs>
    <g fill="url(#illustration-01)" fillRule="evenodd">
      <circle cx="1232" cy="128" r="128" />
      <circle cx="155" cy="443" r="64" />
    </g>
  </svg>
</div> */
}
{
  /* 

<CircleGradient />
 */
}
{
  /*  */
}
// </Box> */}
