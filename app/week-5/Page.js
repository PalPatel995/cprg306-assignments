
import NewItem from "@/components/NewItem"; // Adjust this path if your component is stored elsewhere

const Week4Page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Test the NewItem Component</h1>
      <NewItem />
    </div>
  );
};

export default Week4Page;
