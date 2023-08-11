import { useGetContentQuery } from "@client/shared/slices/content/content";

const ContentPageView = () => {
  const { data: content, isLoading } = useGetContentQuery({});
  return <div>ContentPageView</div>;
};

export default ContentPageView;
