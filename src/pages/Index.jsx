import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Yo wazzup</h1>
      <p className="text-xl mb-6">
        This is a simple, bare-bones application that you can modify and build upon.
      </p>
      <Button asChild className="bg-red-500 hover:bg-red-600">
        <Link to="/about">Learn More</Link>
      </Button>
    </div>
  );
};

export default Index;