import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

export default function PlaceholderPage({
  title,
  description,
}: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
          <p className="text-xl text-gray-600 mb-8">
            {description ||
              `This ${title.toLowerCase()} page is coming soon! We're working on bringing you the best selection and experience.`}
          </p>
          <div className="bg-gray-50 rounded-lg p-8 mb-8">
            <p className="text-gray-700 mb-4">
              Want to see this page filled with amazing content? Continue
              prompting to help us build out this section!
            </p>
            <Button className="bg-[#7b189f] hover:bg-[#6b157f] text-white">
              Continue Building
            </Button>
          </div>
          <p className="text-gray-500 text-sm">
            This is a placeholder page that maintains the site navigation and
            branding while we develop the content.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
