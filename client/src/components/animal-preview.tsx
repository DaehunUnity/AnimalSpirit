import type { Animal } from "@shared/schema";

interface AnimalPreviewProps {
  animals: Animal[];
}

export default function AnimalPreview({ animals }: AnimalPreviewProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h4 className="text-2xl font-poppins font-bold text-dark-blue mb-6 text-center">
        Curious about other animal personalities?
      </h4>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {animals.slice(0, 8).map((animal) => (
          <div 
            key={animal.id}
            className="text-center p-4 border border-gray-200 rounded-xl hover:border-coral hover:shadow-md transition-all duration-300 cursor-pointer"
          >
            <img 
              src={animal.imageUrl} 
              alt={animal.name}
              className="w-16 h-16 rounded-full mx-auto mb-3 object-cover"
            />
            <h5 className="font-semibold text-dark-blue mb-1">{animal.name}</h5>
            <p className="text-xs text-gray-text">{animal.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
