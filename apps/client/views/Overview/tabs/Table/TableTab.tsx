import { FC, useState } from "react";
import Image from "next/image";
import { SENTIMENT_COLOR_MAP } from "@client/shared/constants";
import {
  TableContainer,
  Table,
  Input,
  Tr,
  Th,
  Thead,
  Box,
  Tbody,
  Badge,
  Text,
  Td,
} from "@chakra-ui/react";
import YoutubeLogo from "@client/public/logos/youtube-logo.png";
import TwitterLogo from "@client/public/logos/twitter-logo.png";

import TableSentiment from "./Table";
import { IPaginationData } from "@client/shared/types";
import {
  ColumnDef,
  createColumnHelper,
  flexRender,
  useReactTable,
  getPaginationRowModel,
  getCoreRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";

import { TablePagination } from "@client/shared/components/molecules/TablePagination";

interface ITableRow {
  sentiment: string;
  content: string;
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
  columnHelper.accessor((row) => row.sentiment, {
    id: "sentiment",
    cell: (info) => (
      <Badge
        sx={{ p: 1, px: 2 }}
        rounded={5}
        // @ts-ignore
        colorScheme={SENTIMENT_COLOR_MAP[info.getValue() ?? "neutral"]}
      >
        {info.getValue()}
      </Badge>
    ),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.content, {
    id: "content",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
];

interface ITableTabProps {
  data: any;
  paginationData: IPaginationData;
}

const TableTab: FC<ITableTabProps> = ({ data = [], paginationData }) => {
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
    <Box style={{ height: "100%" }}>
      <Box
        sx={{
          display: "flex",
          overflow: "hidden",
          overflowY: "auto",
          height: "100%",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <Box>
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
        </Box>
        <Box mt={4}>
          <TablePagination
            pageSize={paginationData.perPage}
            pageOptions={[5, 10, 15, 20]}
            pageIndex={paginationData.currentPage}
            pageCount={paginationData.lastPage}
            nextPage={table.nextPage}
            previousPage={table.previousPage}
            gotoPage={table.setPageIndex}
            canNextPage={paginationData?.next}
            canPreviousPage={paginationData?.prev}
            setPageSize={() => console.log("Set")}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default TableTab;
