import { Percent, Truck, Star, Gift, Headphones, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BenefitsSection() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Header banner */}
        <div className="bg-gradient-to-r from-purple-100 to-purple-50 rounded-lg p-6 mb-12">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="flex items-center gap-4 mb-4 lg:mb-0">
              <span className="bg-red-600 text-white px-3 py-1 rounded text-sm font-bold">
                wayfair REWARDS | MEMBERS ONLY
              </span>
              <h3 className="text-2xl lg:text-3xl font-bold text-purple-800">
                unbeatable savings on kitchen staples
              </h3>
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold">
              Join today to access
            </Button>
          </div>
        </div>

        {/* Benefits grid */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-12">
            join for these benefits & more
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* 5% back in rewards */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Percent className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-4xl font-bold text-purple-600 mb-2">5%</h3>
              <h4 className="text-xl font-bold mb-4">back in rewards*</h4>
              <p className="text-gray-600">
                on every item every day. (bonus: they never expire)
              </p>
            </div>

            {/* Free shipping */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">free shipping</h3>
              <h4 className="text-xl font-bold mb-4">on every order*</h4>
              <p className="text-gray-600">From plates to sofas, it's on us</p>
            </div>

            {/* Members-only sales */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">members-only sales</h3>
              <h4 className="text-xl font-bold mb-4">& early access</h4>
              <p className="text-gray-600">
                Steals that'll get the neighbors buzzing
              </p>
            </div>
          </div>

          {/* Additional benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Special offers & perks */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Gift className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-lg font-bold">special offers & perks</h4>
            </div>

            {/* Member support line */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Headphones className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-lg font-bold">member support line</h4>
            </div>

            {/* Save across family of brands */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-lg font-bold">
                save across our family of brands
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
