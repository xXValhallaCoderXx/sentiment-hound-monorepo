import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Tfoot,
} from "@chakra-ui/react";

const TableRecentSentiment = () => {
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>
          Click here to view your sentiment analysis history
        </TableCaption>
        <Thead>
          <Tr>
            <Th>Platform</Th>
            <Th>Comment</Th>
            <Th isNumeric>Sentiment</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Youtube</Td>
            <Td>I Think You Are From Philippines Becuse I See Banana Trees?</Td>
            <Td isNumeric>Neutral</Td>
          </Tr>
          <Tr>
            <Td>Youtube</Td>
            <Td>I Think You Are From Philippines Becuse I See Banana Trees?</Td>
            <Td isNumeric>Neutral</Td>
          </Tr>
          <Tr>
            <Td>Youtube</Td>
            <Td>I Think You Are From Philippines Becuse I See Banana Trees?</Td>
            <Td isNumeric>Neutral</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TableRecentSentiment;
