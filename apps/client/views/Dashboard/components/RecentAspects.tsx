import { FC } from "react";
import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
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
  data: IRecentResponse[];
}

const TableRecentAspects: FC<ITableRecentResponseProps> = ({ data }) => {
  const router = useRouter();
  const handleOnClickAnalyze = () => {
    router.push("/dashboard/sentiment/analysis");
  };
  if (data.length === 0) {
    return (
      <Box sx={{ height: "100%", display: "flex", justifyContent: "center" }}>
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
        {data.length > 0 && (
          <TableCaption>
            Click here to view your sentiment analysis history
          </TableCaption>
        )}
        <Thead>
          <Tr>
            <Th>Platform</Th>
            <Th>Comment</Th>
            <Th isNumeric>Sentiment</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data?.length > 0 &&
            data?.map((response, index) => (
              <Tr key={index}>
                <Td>{response.platform}</Td>
                <Td>{response.comment}</Td>
                <Td>{response.sentiment}</Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TableRecentAspects;
