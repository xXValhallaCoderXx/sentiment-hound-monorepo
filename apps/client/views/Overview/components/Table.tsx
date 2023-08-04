import { useState } from "react";
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
import {
  flexRender,
  useReactTable,
  getPaginationRowModel,
  getCoreRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import { TablePagination } from "@client/shared/components/molecules/TablePagination";
import data from "./fake-data.json";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";

interface ITableRow {
  first_name: string;
  last_name: string;
}

const columnHelper = createColumnHelper<ITableRow>();

export const userColumnDefs: ColumnDef<ITableRow, any>[] = [
  columnHelper.accessor((row) => row.first_name, {
    id: "first_name",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.last_name, {
    id: "last_name",
    cell: (info) => <span>{info.getValue()}</span>,
    header: () => <span>Last Name</span>,
  }),
];

const TableOverview = () => {
  const [sorting, setSorting] = useState<any>([]);
  const table = useReactTable({
    columns: userColumnDefs,
    data,
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

  const headers = table.getFlatHeaders();
  const rows = table.getRowModel().rows;

  return (
    <Box>
      <Card mt={4} p={4}>
        <TableContainer>
          <Table variant="simple">
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
              <Tr>
                {headers.map((header) => {
                  const direction = header.column.getIsSorted();
                  const arrow: any = {
                    asc: "🔼",
                    desc: "🔽",
                  };
                  const sort_indicator = direction && arrow[direction];
                  return (
                    <Th key={header.id}>
                      {header.isPlaceholder ? null : (
                        <div
                          onClick={header.column.getToggleSortingHandler()}
                          className="cursor-pointer flex gap-4"
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {direction && <span>{sort_indicator}</span>}
                        </div>
                      )}
                    </Th>
                  );
                })}
              </Tr>
            </Thead>
            <Tbody>
              {rows.map((row) => (
                <Tr key={row.id}>
                  {row.getVisibleCells().map((cell, index) => {
                    return index === 0 ? (
                      <Th key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </Th>
                    ) : (
                      <Td key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </Td>
                    );
                  })}
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Card>
      <Box mt={4}>
        <TablePagination
          pageSize={10}
          pageOptions={[5, 10, 15, 20]}
          pageIndex={0}
          pageCount={table.getPageCount()}
          nextPage={table.nextPage}
          previousPage={table.previousPage}
          gotoPage={table.setPageIndex}
          canNextPage={table.getCanNextPage()}
          canPreviousPage={table.getCanPreviousPage()}
          setPageSize={() => console.log("Set")}
        />
      </Box>
    </Box>
  );
};

export default TableOverview;
