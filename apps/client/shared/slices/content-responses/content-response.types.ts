import { ISentiment } from "@client/shared/types";

export interface IContentResponse {
  author: string;
  content: string;
  contentPostId: string;
  id: string;
  likes: number;
  parentId: string | null;
  platform: string;
  publishedAt: string;
  remoteId: string;
  sentiment: ISentiment;
  updatedAt: string | null;
}
