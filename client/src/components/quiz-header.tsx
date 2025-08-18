import { Heart } from "lucide-react";

export default function QuizHeader() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-coral to-teal rounded-lg flex items-center justify-center">
              <Heart className="text-white text-xl" />
            </div>
            <h1 className="text-xl font-poppins font-bold text-dark-blue">Animal Personality Test</h1>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <span className="text-sm text-gray-text">Over <span className="font-semibold text-coral">142,543</span> people have taken this test!</span>
          </div>
        </div>
      </div>
    </header>
  );
}
