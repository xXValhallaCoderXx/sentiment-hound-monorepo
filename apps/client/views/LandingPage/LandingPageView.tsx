import { Box } from "@chakra-ui/react";
import HeroSection from "./components/HeroSection";
import SolutionsSection from "./components/SolutionsSection";
import FeaturesSection from "./components/FeatureSection/FeaturesSection";
import TryProductSection from "./components/TryProductSection";

const LandingPageView = () => {
  return (
    <Box>
      <HeroSection />
      <SolutionsSection />
      <FeaturesSection />
      <TryProductSection />
    </Box>
  );
};

export default LandingPageView;
