import { useState, FC } from "react";
import { useRouter } from "next/router";
import {
  Card,
  Box,
  Input,
  Badge,
  Text,
  TableContainer,
  Table,
  Th,
  Td,
  Thead,
  Tr,
  Tbody,
} from "@chakra-ui/react";
import {
  flexRender,
  useReactTable,
  getPaginationRowModel,
  getCoreRowModel,
  getSortedRowModel,
  ColumnDef,
  createColumnHelper,
} from "@tanstack/react-table";
import { TablePagination } from "@client/shared/components/molecules/TablePagination";
import { SENTIMENT_COLOR_MAP } from "@client/shared/constants";

interface IContentTableProps {
  data: any;
}

interface ITableRow {
  author: string;
  content: string;
  likes: string;
  sentiment: string;
}

const columnHelper = createColumnHelper<ITableRow>();

export const userColumnDefs: ColumnDef<ITableRow, any>[] = [
  columnHelper.accessor((row) => row.author, {
    id: "author",
    cell: (info) => (
      <Box display="flex" gap={2} alignItems="center">
        <Text fontSize="xs">{info.getValue()}</Text>
      </Box>
    ),
    // header: () => <span>Last Name</span>,
  }),
  columnHelper.accessor((row) => row.content, {
    id: "content",
    cell: (info) => (
      <Box sx={{ maxWidth: 500, overflow: "hidden" }}>{info.getValue()}</Box>
    ),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.likes, {
    id: "likes",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.sentiment, {
    id: "sentiment",
    cell: (info) => (
      // @ts-ignore
      <Badge colorScheme={SENTIMENT_COLOR_MAP[info.getValue() ?? "neutral"]}>
        {info.getValue()}
      </Badge>
    ),
    footer: (info) => info.column.id,
  }),
];

const ContentTable: FC<IContentTableProps> = ({ data = [] }) => {
  const [sorting, setSorting] = useState<any>([]);
  console.log("DATA: ", data);
  const router = useRouter();
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

  const handleOnClickRow = (_row: any) => () => {
    // router.push(`/dashboard/sentiment/content/${_row.id}`);
  };

  const headers = table.getFlatHeaders();
  const rows = table.getRowModel().rows;

  return (
    <Card
      sx={{
        overflowX: "scroll",
        display: "flex",
        justifyContent: "space-between",
        position: "relative",
      }}
      height="100%"
    >
      <Box sx={{ position: "absolute" }}>
        <Input placeholder="Search" />
      </Box>
      <Box sx={{ overflowX: "scroll", mt: 20 }}>
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
                <Tr key={row.id} onClick={handleOnClickRow(row?.original)}>
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
      </Box>
      <Box>
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
    </Card>
  );
};

export default ContentTable;
