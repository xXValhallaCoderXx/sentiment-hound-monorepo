import { useGetContentDetailQuery } from "@client/shared/slices/content/content.api";
import { useRouter } from "next/router";
import Image from "next/image";
import ContentDetailTable from "./components/ContentDetailTable";
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
    <Box
      display="flex"
      flexDirection="column"
      overflowX="scroll"
      gap={6}
      style={{ height: "100%" }}
    >
      <Box maxHeight={200} flexBasis="20%">
        <Card height="100%">hshs</Card>
      </Box>
      <Box sx={{ overflowX: "scroll" }} flexBasis="80%">
        <Card sx={{ overflowX: "scroll" }} height="100%">
          <Box style={{ height: 200 }}>
            <div>asda</div>
            <div style={{ height: 100 }}>asda</div>
            <div>asda</div>
          </Box>
          <Box sx={{ height: 200 }}>
            <div>asda</div>
            <div>asda</div>
            <div>asda</div>
          </Box>
          <Box sx={{ height: 200 }}>
            <div>asda</div>
            <div>asda</div>
            <div>asda</div>
          </Box>
          <Box sx={{ height: 200 }}>
            <div>asda</div>
            <div>asda</div>
            <div>asda</div>
          </Box>
          <Box sx={{ height: 200 }}>
            <div>asda</div>
            <div>asda</div>
            <div>asda</div>
          </Box>
          <Box sx={{ height: 200 }}>
            <div>asda</div>
            <div>asda</div>
            <div>asda</div>
          </Box>
          <Box sx={{ height: 200 }}>
            <div>asda</div>
            <div>asda</div>
            <div>asda</div>
          </Box>
          <Box sx={{ height: 200 }}>
            <div>asda</div>
            <div>asda</div>
            <div>asda</div>
          </Box>
          <Box sx={{ height: 200 }}>
            <div>asda</div>
            <div>asda</div>
            <div>asda</div>
          </Box>
        </Card>
      </Box>

      {/* <Card p={4}>
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
              <Text fontSize="sm">{data?.sentimentCounts.positive}</Text>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Text fontSize="sm">Negative: </Text>
              <Text fontSize="sm">{data?.sentimentCounts.negative}</Text>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Text fontSize="sm">Neutral: </Text>
              <Text fontSize="sm">{data?.sentimentCounts.neutral}</Text>
            </Box>
          </Box>
        </Box>
      </Card>
      <Box display="flex" flex={1} style={{ backgroundColor: "red" }}>
        <Card mt={6}>
          <ContentDetailTable data={data?.responses} />
        </Card>
      </Box> */}
    </Box>
  );
};

export default ContentDetailView;

{
  /* <Card p={4}> */
}
{
  /* <Box display="flex" justifyContent="space-between">
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
              <Text fontSize="sm">{data?.sentimentCounts.positive}</Text>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Text fontSize="sm">Negative: </Text>
              <Text fontSize="sm">{data?.sentimentCounts.negative}</Text>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Text fontSize="sm">Neutral: </Text>
              <Text fontSize="sm">{data?.sentimentCounts.neutral}</Text>
            </Box>
          </Box>
        </Box>
      </Card>
      <Box>
       
      </Box> */
}