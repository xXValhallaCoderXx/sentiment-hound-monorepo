export interface IPagination {
  currentPage: number;
  lastPage: number;
  perPage: number;
  total: number;
  next: number | null;
  prev: number | null;
}
