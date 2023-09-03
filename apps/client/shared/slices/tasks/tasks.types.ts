export interface ITask {
  status: string;
  id: string;
  contentPostId: string;
  conentPost: {
    author: string;
    contentId: string;
    description: string;
    id: string;
    image: string;
    title: string;
    platform: string;
    publishedAt: string;
    responses: any;
  };
}
