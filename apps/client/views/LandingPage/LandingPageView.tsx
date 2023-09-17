import { Box } from "@chakra-ui/react";

import {
  FooterSection,
  FeatureSection,
  SolutionSectionNew,
  HeroSection,
  TryProductSection,
} from "./components";

const LandingPageView = () => {
  return (
    <Box>
      <HeroSection />
      <SolutionSectionNew />
      <FeatureSection />
      <TryProductSection />
      <FooterSection />
    </Box>
  );
};

export default LandingPageView;
