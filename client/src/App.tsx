import QuizHeader from "@/components/quiz-header";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/language-context";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import Result from "@/pages/result";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import PrivacyPolicy from "@/pages/privacy-policy";
import TermsOfService from "@/pages/terms-of-service";
import FAQ from "@/pages/faq";
import Science from "@/pages/science";
import Careers from "@/pages/careers";
import LionGuide from "@/pages/animals/lion";
import DolphinGuide from "@/pages/animals/dolphin";
import OwlGuide from "@/pages/animals/owl";
import FoxGuide from "@/pages/animals/fox";
import EagleGuide from "@/pages/animals/eagle";
import PandaGuide from "@/pages/animals/panda";
import CatGuide from "@/pages/animals/cat";
import WolfGuide from "@/pages/animals/wolf";
import { QueryClientProvider } from "@tanstack/react-query";
import { Route, Switch } from "wouter";
import { queryClient } from "./lib/queryClient";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/result/:animalId" component={Result} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route path="/faq" component={FAQ} />
      <Route path="/science" component={Science} />
      <Route path="/careers" component={Careers} />
      <Route path="/animals/lion" component={LionGuide} />
      <Route path="/animals/dolphin" component={DolphinGuide} />
      <Route path="/animals/owl" component={OwlGuide} />
      <Route path="/animals/fox" component={FoxGuide} />
      <Route path="/animals/eagle" component={EagleGuide} />
      <Route path="/animals/panda" component={PandaGuide} />
      <Route path="/animals/cat" component={CatGuide} />
      <Route path="/animals/wolf" component={WolfGuide} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <div className="min-h-screen bg-gray-50">
            <QuizHeader />
            <Toaster />
            <Router />
          </div>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
