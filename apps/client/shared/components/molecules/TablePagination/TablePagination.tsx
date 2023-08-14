import { FC } from "react";
import {
  Flex,
  Tooltip,
  IconButton,
  Text,
  NumberInputField,
  NumberInputStepper,
  NumberInput,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Select,
} from "@chakra-ui/react";
import {
  FaArrowLeft,
  FaChevronLeft,
  FaChevronRight,
  FaArrowRight,
} from "react-icons/fa";

interface ITablePaginationProps {
  gotoPage: (updater: number | ((pageIndex: number) => number)) => void;
  canPreviousPage: boolean;
  previousPage: () => void;
  pageIndex: number;
  pageOptions: number[];
  pageCount: number;
  canNextPage: boolean;
  nextPage: () => void;
  pageSize: number;
  setPageSize: (pageSize: number) => void;
}

const TablePagination: FC<ITablePaginationProps> = ({
  gotoPage,
  canNextPage,
  canPreviousPage,
  previousPage,
  pageCount,
  pageIndex,
  pageOptions,
  pageSize,
  setPageSize,
  nextPage,
}) => {
  return (
    <Flex justifyContent="space-between" m={4} alignItems="center">
      <Flex>
        <Tooltip label="First Page">
          <IconButton
            aria-label="first-button"
            onClick={() => gotoPage(0)}
            isDisabled={!canPreviousPage}
            icon={<FaArrowLeft h={3} w={3} />}
            mr={4}
          />
        </Tooltip>
        <Tooltip label="Previous Page">
          <IconButton
            aria-label="previous-button"
            onClick={previousPage}
            isDisabled={!canPreviousPage}
            icon={<FaChevronLeft h={6} w={6} />}
          />
        </Tooltip>
      </Flex>

      <Flex alignItems="center">
        <Text flexShrink="0" mr={8}>
          Page{" "}
          <Text fontWeight="bold" as="span">
            {pageIndex}
          </Text>{" "}
          of{" "}
          <Text fontWeight="bold" as="span">
            {pageCount}
          </Text>
        </Text>
        <Text flexShrink="0">Go to page:</Text>{" "}
        <NumberInput
          ml={2}
          mr={8}
          w={28}
          min={1}
          max={pageOptions.length}
          onChange={(value: any) => {
            const page = value ? value - 1 : 0;
            gotoPage(page);
          }}
          defaultValue={pageIndex + 1}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Select
          w={32}
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </Select>
      </Flex>

      <Flex>
        <Tooltip label="Next Page">
          <IconButton
            aria-label="next-button"
            onClick={nextPage}
            isDisabled={!canNextPage}
            icon={<FaChevronRight h={6} w={6} />}
          />
        </Tooltip>
        <Tooltip label="Last Page">
          <IconButton
            aria-label="last-button"
            onClick={() => gotoPage(pageCount - 1)}
            isDisabled={!canNextPage}
            icon={<FaArrowRight h={3} w={3} />}
            ml={4}
          />
        </Tooltip>
      </Flex>
    </Flex>
  );
};

export default TablePagination;
