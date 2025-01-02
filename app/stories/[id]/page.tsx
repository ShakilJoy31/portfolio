import PortfolioSingleComponent from "@/components/Theme1/PortfolioSingleComponent";

const StoryDetail = () => {
  return (
    <PortfolioSingleComponent></PortfolioSingleComponent>
  );
};

export async function generateStaticParams() {
  // Example: Define the dynamic parameters (id) to pre-render
  // Replace this with real data fetching (e.g., fetching story IDs from an API)
  const stories = [
    { id: '1' },
    { id: '2' },
    { id: '3' }
  ];

  // Generate static params (a list of `id` values) for each dynamic page
  return stories.map((story) => ({
    id: story.id,
  }));
}

export default StoryDetail;
