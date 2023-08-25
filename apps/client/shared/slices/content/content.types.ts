export interface IContentPost {
  author: string;
  contentId: string;
  description: string;
  id: string;
  image?: string;
  platform: string;
  publishedAt: string;
  title: string;
  responses: any;
  sentimentCounts: {
    positive: number;
    negative: number;
    neutral: number;
  };
}
