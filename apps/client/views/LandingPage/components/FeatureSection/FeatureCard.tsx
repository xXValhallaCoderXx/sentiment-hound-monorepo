import { FC } from "react";
import { Card, Heading, Text } from "@chakra-ui/react";

interface IFeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: FC<IFeatureCardProps> = ({ title, description }) => {
  return (
    <Card p={4} maxWidth={300}>
      <Heading size="md" textAlign="center">
        {title}
      </Heading>
      <Text size="sm" mt={2} textAlign="center">
        {description}
      </Text>
    </Card>
  );
};

export default FeatureCard;
