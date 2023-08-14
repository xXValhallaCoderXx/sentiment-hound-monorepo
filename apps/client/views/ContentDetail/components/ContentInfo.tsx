import { FC } from "react";
import Image from "next/image";
import { Card, Box, Text } from "@chakra-ui/react";

interface IContentInfoProps {
  title: string;
  image?: string;
  publishedAt: string;
  sentiment: {
    positive: number;
    negative: number;
    neutral: number;
  };
}

const ContentInfo: FC<IContentInfoProps> = ({
  title,
  image,
  publishedAt,
  sentiment,
}) => {
  return (
    <Card
      p={4}
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      height="100%"
    >
      <Box>
        <Text fontSize="2xl" fontWeight={500}>
          {title}
        </Text>
        {image && (
          <Image src={image} alt="post-image" width={200} height={150} />
        )}
        <Text>Published: {publishedAt}</Text>
      </Box>
      <Box>
        <Text mb={2}>Sentiment Overview</Text>
        <Box display="flex" justifyContent="space-between">
          <Text fontSize="sm">Positive: </Text>
          <Text fontSize="sm">{sentiment.positive}</Text>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Text fontSize="sm">Negative: </Text>
          <Text fontSize="sm">{sentiment.negative}</Text>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Text fontSize="sm">Neutral: </Text>
          <Text fontSize="sm">{sentiment.neutral}</Text>
        </Box>
      </Box>
    </Card>
  );
};

export default ContentInfo;
