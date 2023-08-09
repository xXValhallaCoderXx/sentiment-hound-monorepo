import { useState, FC } from "react";
import {
  TableContainer,
  Table,
  TableCaption,
  Tr,
  Th,
  Thead,
  Box,
  Tbody,
  Badge,
  Text,
  Td,
  Tfoot,
} from "@chakra-ui/react";
import Image from "next/image";
import {
  flexRender,
  useReactTable,
  getPaginationRowModel,
  getCoreRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import { TablePagination } from "@client/shared/components/molecules/TablePagination";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import YoutubeLogo from "@client/public/logos/youtube-logo.png";
import TwitterLogo from "@client/public/logos/twitter-logo.png";

interface ITableRow {
  status: string;
  platform: string;
}

const columnHelper = createColumnHelper<ITableRow>();

export const userColumnDefs: ColumnDef<ITableRow, any>[] = [
  columnHelper.accessor((row) => row.platform, {
    id: "platform",
    cell: (info) => (
      <Box display="flex" gap={2} alignItems="center">
        <Image
          alt="logo"
          src={info.getValue() === "youtube" ? YoutubeLogo : TwitterLogo}
          height={20}
          width={20}
        />{" "}
        <Text fontSize="xs">{info.getValue()}</Text>
      </Box>
    ),
    // header: () => <span>Last Name</span>,
  }),
  columnHelper.accessor((row) => row.status, {
    id: "status",
    cell: (info) => (
      <Badge
        sx={{ p: 1, px: 2 }}
        rounded={5}
        colorScheme={info.getValue() === "completed" ? "green" : ""}
      >
        {info.getValue()}
      </Badge>
    ),
    footer: (info) => info.column.id,
  }),
];

interface ITaskTableProps {
  data: any;
}

const TaskTable: FC<ITaskTableProps> = ({ data }) => {
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
    <Box
      sx={{
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
      }}
    >
      <TableContainer>
        <Table variant="simple">
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

export default TaskTable;
