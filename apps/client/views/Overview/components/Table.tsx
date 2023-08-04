import {
  TableContainer,
  Table,
  TableCaption,
  Tr,
  Th,
  Thead,
  Box,
  Tbody,
  Card,
  Td,
  Tfoot,
} from "@chakra-ui/react";
import { useReactTable, getPaginationRowModel,  getCoreRowModel,
  getSortedRowModel, } from "@tanstack/react-table";
import { TablePagination } from "@client/shared/components/molecules/TablePagination";

const TableOverview = () => {
  const table = useReactTable({
    columns: userColumnDefs,
    data: []
    getCoreRowModel: getCoreRowModel(),
    //2. add getSortedRowModel into the pipeline. this will calculate the sorted rows when the sort state changes
    getSortedRowModel: getSortedRowModel(),
    //3. add state to our table we use the  sorting state from step 1
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      sorting,
    },
    //4. add a handler for onSortingChange using the setSorting from step 1
    onSortingChange: setSorting,
  });
  return (
    <Box>
      <Card mt={4} p={4}>
        <TableContainer>
          <Table variant="simple">
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td isNumeric>25.4</Td>
              </Tr>
              <Tr>
                <Td>feet</Td>
                <Td>centimetres (cm)</Td>
                <Td isNumeric>30.48</Td>
              </Tr>
              <Tr>
                <Td>yards</Td>
                <Td>metres (m)</Td>
                <Td isNumeric>0.91444</Td>
              </Tr>
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </Card>
      <Box mt={4} >
        <TablePagination  pageSize={10} pageOptions={[5,10,15,20]} pageIndex={0} pageCount={table.getPageCount()} nextPage={table.nextPage} previousPage={table.previousPage} gotoPage={table.setPageIndex} canNextPage={table.getCanNextPage()} canPreviousPage={table.getCanPreviousPage()} setPageSize={() => console.log("Set")} />
      </Box>
    </Box>
  );
};

export default TableOverview;
