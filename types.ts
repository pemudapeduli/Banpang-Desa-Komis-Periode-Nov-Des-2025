export interface Recipient {
  id: number;
  name: string;
  pbp: string;
}

export interface PaginationMeta {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
}