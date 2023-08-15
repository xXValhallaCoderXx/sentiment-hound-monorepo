export interface IPaginationData {
  currentPage: number;
  lastPage: number;
  next: any;
  perPage: number;
  prev: any;
  total: number;
}

export interface ISentimentType {
  positive: string;
  negative: string;
  neutral: string;
}

export type ISentiment = "neutral" | "positive" | "negative";