import { useState } from "react";
import { Text, Box, Heading, Flex } from "@chakra-ui/react";
import {
  CardSelectable,
  ImageSwitcher,
} from "@client/shared/components/molecules";
import { useSingleSelection } from "@client/shared/hooks";
import YoutubeIcon from "@client/public/logos/youtube-logo.png";

const cardOptions = [
  { id: 1, title: "Card 1", description: "This is the description of Card 1." },
  { id: 2, title: "Card 2", description: "This is the description of Card 2." },
  { id: 3, title: "Card 3", description: "This is the description of Card 3." },
];

const images = [YoutubeIcon, YoutubeIcon];

const SolutionsSection = () => {
  const [expanded, setExpanded] = useState<boolean | number>(0);
  const { selectedOption, handleSelect, isSelected } = useSingleSelection();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
    
      pb={8}
    >
      <Box mt={8} sx={{ width: 800 }}>
        <Heading color="black.500" textAlign="center">
          Explore the Solutions
        </Heading>
        <Text mt={2} align="center">
          Make data-driven choices with confidence and stay ahead of the curve.
          Experience the power of our sentiment analysis product today and
          revolutionize your decision-making process.
        </Text>

        <Heading color="black.500">Powerful Suite Of Tools</Heading>
        <Text>
          Cost-effective, reliable sentiment analysis. Unleash the potential of
          AI-driven data analysis and gain a deeper understanding of customers.
        </Text>
        <Box
          display="flex"
          flexDirection="row"
          backgroundColor="RED"
          height="500px"
        >
          <Box flexBasis="1/2">
            {cardOptions.map((card, index) => (
              <CardSelectable
                index={index}
                key={card.id}
                title={card.title}
                description={card.description}
                isSelected={isSelected(index)}
                onSelect={() => handleSelect(index)}
              />
            ))}
          </Box>
          <Box flexBasis="1/2">
            <ImageSwitcher images={images} currentIndex={selectedOption} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SolutionsSection;
