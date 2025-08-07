import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="max-w-[1600px] mx-auto relative">
      {/* Desktop layout */}
      <div className="hidden md:block">
        <div className="bg-[#f8f3fa] rounded-b-3xl overflow-hidden h-[390px] flex">
          {/* Left side - Text content */}
          <div className="flex-1 flex items-center px-10 py-8">
            <div className="max-w-lg">
              <h1 className="text-4xl lg:text-5xl font-semibold text-[#7b189f] leading-tight mb-4">
                Get that tomorrow sofa today!
              </h1>
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                With one of our diverse pay over time options available for most
                customers
              </h2>
              <h3 className="text-base font-semibold text-[#7b189f]">
                Explore all available options to easily find one that's just
                right for you!
              </h3>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="flex-1 relative">
            <img
              src="https://assets.wfcdn.com/im/26316045/resize-h1200-w3000%5Ecompr-r85/3060/306009260/fl_loyalty_banner_large.jpg"
              alt="Sofa"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden">
        <div className="bg-[#f8f3fa] rounded-b-3xl overflow-hidden">
          {/* Image on top */}
          <div className="h-64 relative">
            <img
              src="https://assets.wfcdn.com/im/26316045/resize-h1200-w3000%5Ecompr-r85/3060/306009260/fl_loyalty_banner_large.jpg"
              alt="Sofa"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text content below */}
          <div className="px-6 py-8">
            <h1 className="text-3xl font-semibold text-[#7b189f] leading-tight mb-4">
              Get that tomorrow sofa today!
            </h1>
            <h2 className="text-lg font-semibold mb-4 text-gray-800">
              With one of our diverse pay over time options available for most
              customers
            </h2>
            <h3 className="text-base font-semibold text-[#7b189f]">
              Explore all available options to easily find one that's just right
              for you!
            </h3>
          </div>
        </div>
      </div>

      {/* Financing card overlay */}
      <div className="absolute right-8 top-8 w-[430px] hidden lg:block">
        <div className="bg-white rounded-lg shadow-xl p-6">
          {/* Financing text */}
          <div className="mb-2">
            <span className="text-2xl font-bold leading-tight block">
              <span className="sr-only">
                $21 per month suggested payments on a $500 order with 24 month
                financing
              </span>
              <span aria-hidden="true">
                $21/mo suggested payments on a $500 order w/24 mo financing
              </span>
            </span>
          </div>

          <div className="mb-8">
            <span className="text-xl font-bold text-[#7B189F]">
              with Wayfair Financing
            </span>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col gap-2">
            <Button
              className="bg-[#7B189F] hover:bg-[#6b157f] text-white h-12 rounded-full font-medium"
              asChild
            >
              <a
                href="https://www.wayfair.com/wayfairfinancing?APPLICATION=open"
                target="_blank"
                rel="noopener noreferrer"
              >
                Check your Eligibility
              </a>
            </Button>

            <Button
              variant="link"
              className="text-[#7B189F] underline p-0 h-auto justify-start"
              asChild
            >
              <a
                href="https://www.wayfair.com/wayfin"
                target="_blank"
                rel="noopener noreferrer"
              >
                See Financing Details
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
