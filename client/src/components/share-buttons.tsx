import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Link, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import type { Animal } from "@shared/schema";

interface ShareButtonsProps {
  animal: Animal;
}

export default function ShareButtons({ animal }: ShareButtonsProps) {
  const { toast } = useToast();

  const shareText = `I just discovered I'm a ${animal.name} - ${animal.subtitle}! Take this fun animal personality test to find your spirit animal! 🐾`;
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
        title: "Link copied!",
        description: "The link has been copied to your clipboard.",
      });
    } catch (error) {
      toast({
        title: "Failed to copy",
        description: "Unable to copy link to clipboard.",
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
        <span>Facebook</span>
      </Button>
      
      <Button
        onClick={handleTwitterShare}
        className="flex items-center space-x-2 bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-full"
      >
        <Twitter className="h-4 w-4" />
        <span>Twitter</span>
      </Button>
      
      <Button
        onClick={handleWhatsAppShare}
        className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full"
      >
        <MessageCircle className="h-4 w-4" />
        <span>WhatsApp</span>
      </Button>
      
      <Button
        onClick={handleCopyLink}
        variant="outline"
        className="flex items-center space-x-2 px-4 py-2 rounded-full"
      >
        <Link className="h-4 w-4" />
        <span>Copy Link</span>
      </Button>
    </div>
  );
}
