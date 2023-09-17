import { Text, Flex, Heading, Stack, Container } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import HeroImage from "@client/public/images/hero-image.png";
import { TextGradient } from "@client/shared/components/atoms";
import SquishyButton from "@client/shared/components/molecules/SquishButton/SquishButton";

const HeroSection = () => {
  const router = useRouter();
  const handleOnClickHero = () => {
    router.push("/auth/sign-in");
  };
  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Sentiment Analysis <TextGradient as={"span"}>made easy</TextGradient>
        </Heading>
        <Text fontSize={{ sm: "md", md: "xl" }} color={"gray.500"} maxW={"3xl"}>
          Sentiment Hound delivers cost-effective sentiment analysis at your
          fingertips, ensuring that no one is left behind in the quest for
          data-driven success
        </Text>
        <Stack spacing={6} direction={"row"}>
          <SquishyButton
            onClick={handleOnClickHero}
            colorScheme="primary"
            size="lg"
          >
            Get early acceess, and let Gooby loose!
          </SquishyButton>
        </Stack>
        <Flex w={"full"}>
          <Image alt="hero-image" src={HeroImage} />
        </Flex>
      </Stack>
    </Container>
  );
};

export default HeroSection;
