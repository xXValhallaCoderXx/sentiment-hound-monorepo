import { useGetContentDetailQuery } from "@client/shared/slices/content/content.api";
import { useRouter } from "next/router";
import Image from "next/image";
import { Card, Text, Box, Spinner, Fade } from "@chakra-ui/react";

const ContentDetailView = () => {
  const router = useRouter();
  const id = router.query.id;
  const { data, isLoading } = useGetContentDetailQuery(
    { id: String(id) },
    { skip: !id }
  );

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        height="80vh"
      >
        <Text fontSize="3xl" fontWeight={500} mb={2}>
          Feeding Gooby Treats...
        </Text>
        <Spinner />
      </Box>
    );
  }

  return (
    <Fade in>
      <Card p={4}>
        <Box display="flex" justifyContent="space-between">
          <Box>
            <Text fontSize="2xl" fontWeight={500}>
              {data?.title}
            </Text>
            {data?.image && (
              <Image
                src={data?.image}
                alt="post-image"
                width={200}
                height={150}
              />
            )}
            <Text>Published: {data?.publishedAt}</Text>
          </Box>
          <Box>
            <Text mb={2}>Sentiment Overview</Text>
            <Box display="flex" justifyContent="space-between">
              <Text fontSize="sm">Positive: </Text>
              <Text fontSize="sm">0</Text>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Text fontSize="sm">Positive: </Text>
              <Text fontSize="sm">0</Text>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Text fontSize="sm">Positive: </Text>
              <Text fontSize="sm">0</Text>
            </Box>
          </Box>
        </Box>
      </Card>
    </Fade>
  );
};

export default ContentDetailView;
