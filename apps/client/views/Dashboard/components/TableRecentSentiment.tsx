import { FC } from "react";
import { SENTIMENT_COLOR_MAP } from "@client/shared/constants";
import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Badge,
  Box,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { EmptyData } from "@client/shared/components/molecules/EmptyData";

interface IRecentResponse {
  platform: string;
  comment: string;
  sentiment: string;
}

interface ITableRecentResponseProps {
  data: IRecentResponse[] | [];
}

const TableRecentSentiment: FC<ITableRecentResponseProps> = ({ data }) => {
  const router = useRouter();
  const handleOnClickAnalyze = () => {
    router.push("/dashboard/sentiment/analysis");
  };
  if (data.length === 0) {
    return (
      <Box sx={{ height: 200, display: "flex", justifyContent: "center" }}>
        <EmptyData
          title="No Processed Tasks"
          subtitle="Analyze some content, to start a task"
          cta={{
            label: "Analyze Content",
            onClick: handleOnClickAnalyze,
          }}
        />
      </Box>
    );
  }
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Platform</Th>
            <Th isNumeric>Sentiment</Th>
            <Th>Comment</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data?.length > 0 &&
            data?.map((response, index) => (
              <Tr key={index}>
                <Td>{response.platform}</Td>
                <Td>
                  {/* @ts-ignore */}
                  <Badge colorScheme={SENTIMENT_COLOR_MAP[response.sentiment]}>
                    {response.sentiment}
                  </Badge>
                </Td>
                <Td>{response.comment}</Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TableRecentSentiment;
