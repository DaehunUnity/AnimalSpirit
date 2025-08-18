import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Link, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/language-context";
import { useTranslation } from "@/lib/translations";
import type { Animal } from "@shared/schema";

interface ShareButtonsProps {
  animal: Animal;
}

export default function ShareButtons({ animal }: ShareButtonsProps) {
  const { toast } = useToast();
  const { language } = useLanguage();
  const t = useTranslation(language);
  
  // Get localized animal data
  const animalKey = animal.name.toLowerCase() as keyof typeof t.animals;
  const localizedAnimal = t.animals[animalKey];
  
  const shareText = language === 'ko' 
    ? `저는 ${localizedAnimal?.name || animal.name} - ${localizedAnimal?.subtitle || animal.subtitle}라는 결과가 나왔어요! 이 재미있는 동물 성격 테스트로 당신의 정신적 동물을 찾아보세요! 🐾`
    : `I just discovered I'm a ${localizedAnimal?.name || animal.name} - ${localizedAnimal?.subtitle || animal.subtitle}! Take this fun animal personality test to find your spirit animal! 🐾`;
  const currentUrl = window.location.href;

  const handleFacebookShare = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}&quote=${encodeURIComponent(shareText)}`;
    window.open(facebookUrl, '_blank', 'width=600,height=400');
  };

  const handleTwitterShare = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(currentUrl)}`;
    window.open(twitterUrl, '_blank', 'width=600,height=400');
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      toast({
        title: t.linkCopied,
        description: t.linkCopiedDesc,
      });
    } catch (error) {
      toast({
        title: t.failedToCopy,
        description: t.failedToCopyDesc,
        variant: "destructive",
      });
    }
  };

  const handleWhatsAppShare = () => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + currentUrl)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="flex justify-center space-x-4 mb-6">
      <Button
        onClick={handleFacebookShare}
        className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full"
      >
        <Facebook className="h-4 w-4" />
        <span>{t.facebook}</span>
      </Button>
      
      <Button
        onClick={handleTwitterShare}
        className="flex items-center space-x-2 bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-full"
      >
        <Twitter className="h-4 w-4" />
        <span>{t.twitter}</span>
      </Button>
      
      <Button
        onClick={handleWhatsAppShare}
        className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full"
      >
        <MessageCircle className="h-4 w-4" />
        <span>{t.whatsapp}</span>
      </Button>
      
      <Button
        onClick={handleCopyLink}
        variant="outline"
        className="flex items-center space-x-2 px-4 py-2 rounded-full"
      >
        <Link className="h-4 w-4" />
        <span>{t.copyLink}</span>
      </Button>
    </div>
  );
}
