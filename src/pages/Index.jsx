import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dog } from "lucide-react";

const popularBreeds = [
  "Labrador Retriever",
  "German Shepherd",
  "Golden Retriever",
  "French Bulldog",
  "Bulldog",
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 flex items-center">
          <Dog className="mr-2 h-8 w-8" />
          All About Dogs
        </h1>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Man's Best Friend</CardTitle>
            <CardDescription>Learn about our loyal companions</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Dogs have been domesticated for thousands of years and are known for their loyalty,
              companionship, and diverse breeds. They come in various sizes, shapes, and
              temperaments, making them suitable for different lifestyles and purposes.
            </p>
            <img
              src="/placeholder.svg"
              alt="A cute dog"
              className="mx-auto object-cover w-full h-[300px] rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">Popular Dog Breeds</h2>
            <ul className="list-disc pl-6">
              {popularBreeds.map((breed) => (
                <li key={breed}>{breed}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
