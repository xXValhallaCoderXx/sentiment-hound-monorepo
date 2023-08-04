import { Text, Box } from "@chakra-ui/react";
const HeroSection = () => {
  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      //   justifyContent="center"
      justifyItems="center"
      bgColor="whatsapp.600"
    >
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
    </Box>
  );
};

export default HeroSection;
