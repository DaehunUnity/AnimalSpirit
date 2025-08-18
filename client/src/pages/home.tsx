import { Button } from "@/components/ui/button";
import { Play, Clock, Users, Share, Heart } from "lucide-react";
import { useLocation } from "wouter";

export default function Home() {
  const [, setLocation] = useLocation();

  const handleStartQuiz = () => {
    setLocation("/quiz");
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <section className="text-center mb-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
          <img 
            src="https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
            alt="Various animals together in harmony" 
            className="rounded-xl w-full h-64 object-cover mb-8"
          />
          
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-dark-blue mb-4">
            What animal are you <span className="text-coral">most like?</span>
          </h2>
          <p className="text-lg text-gray-text mb-8 max-w-2xl mx-auto">
            Discover your spirit animal with 10 simple questions. Get accurate, fun results 
            that reveal your personality traits and share them with friends!
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-coral to-pink rounded-full flex items-center justify-center mx-auto mb-2">
                <Clock className="text-white text-2xl" />
              </div>
              <p className="text-sm font-medium text-dark-blue">3 minutes</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-teal to-sky rounded-full flex items-center justify-center mx-auto mb-2">
                <Users className="text-white text-2xl" />
              </div>
              <p className="text-sm font-medium text-dark-blue">142k+ taken</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-mint to-golden rounded-full flex items-center justify-center mx-auto mb-2">
                <Share className="text-white text-2xl" />
              </div>
              <p className="text-sm font-medium text-dark-blue">Easy sharing</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-golden to-coral rounded-full flex items-center justify-center mx-auto mb-2">
                <Heart className="text-white text-2xl" />
              </div>
              <p className="text-sm font-medium text-dark-blue">Free test</p>
            </div>
          </div>

          <Button 
            onClick={handleStartQuiz}
            className="bg-gradient-to-r from-coral to-teal text-white font-poppins font-semibold text-lg px-8 py-4 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <Play className="mr-2 h-5 w-5" />
            Start Test
          </Button>
        </div>

        {/* Ad Space */}
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-6 mb-8">
          <p className="text-gray-500 text-center">
            <span className="text-xs">Advertisement Space (728x90)</span>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-blue text-white py-12 mt-16 rounded-2xl">
        <div className="max-w-4xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-coral to-teal rounded-lg flex items-center justify-center">
                  <Heart className="text-white h-4 w-4" />
                </div>
                <span className="font-poppins font-bold text-lg">Animal Personality Test</span>
              </div>
              <p className="text-gray-300 text-sm">
                Discover your spirit animal with our fun and accurate personality test. 
                Share your results and connect with friends through animal personalities.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Popular Tests</h5>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-coral transition-colors">Animal Personality Test</a></li>
                <li><a href="#" className="hover:text-coral transition-colors">Color Psychology Test</a></li>
                <li><a href="#" className="hover:text-coral transition-colors">Career Aptitude Test</a></li>
                <li><a href="#" className="hover:text-coral transition-colors">Love Language Test</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Contact Us</h5>
              <div className="space-y-2 text-sm text-gray-300">
                <p>📧 contact@animaltest.com</p>
                <p>📞 (555) 123-4567</p>
                <div className="flex space-x-4 mt-4">
                  <a href="#" className="text-gray-300 hover:text-coral transition-colors">📘</a>
                  <a href="#" className="text-gray-300 hover:text-coral transition-colors">📷</a>
                  <a href="#" className="text-gray-300 hover:text-coral transition-colors">📺</a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-600 pt-8 mt-8 text-center text-sm text-gray-300">
            <p>&copy; 2024 Animal Personality Test. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
