import { Box } from "@chakra-ui/react";

import {
  FooterSection,
  FeatureSection,
  SolutionSection,
  HeroSection,
  TryProductSection,
} from "./components";

const LandingPageView = () => {
  return (
    <Box>
      <HeroSection />
      <SolutionSection />
      <FeatureSection />
      <TryProductSection />
      <FooterSection />
    </Box>
  );
};

export default LandingPageView;
