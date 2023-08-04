import { Box } from "@chakra-ui/react";
import HeroSection from "./components/HeroSection";
import SolutionsSection from "./components/SolutionsSection";

const LandingPageView = () => {
  return (
    <Box overflowX="hidden">
      <HeroSection />
      <SolutionsSection />
    </Box>
  );
};

export default LandingPageView;
