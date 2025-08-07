import { Button } from "@/components/ui/button";

export default function RewardsBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left content */}
          <div className="flex-1 mb-8 lg:mb-0">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-3xl font-bold">wayfair REWARDS</div>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight">
              earn rewards and enjoy exclusive perks, every time you shop
            </h2>
            <p className="text-lg mb-6">Unlock your next home gem</p>
            <Button className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-full">
              Join now for $29/year
            </Button>
          </div>

          {/* Right image area */}
          <div className="flex-1 max-w-md">
            <img
              src="https://assets.wfcdn.com/im/24098124/resize-h600-w1200%5Ecompr-r85/2410/241008152/default_name.jpg"
              alt="Rewards member enjoying shopping"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
