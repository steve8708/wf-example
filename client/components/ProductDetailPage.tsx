import { Heart, ChevronRight, ChevronDown, Minus, Plus, Info } from "lucide-react";
import { useState } from "react";
import HeaderExperience from "./HeaderExperience";
import Footer from "./Footer";

export default function ProductDetailPage() {
  const [quantity, setQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState(0);

  const productImages = Array(9).fill("https://api.builder.io/api/v1/image/assets/TEMP/0f71d7f21003029504c21f34c9225ad2de0f4956?width=112");
  const mainImage = "https://api.builder.io/api/v1/image/assets/TEMP/ef82f4555179c9a7d6efb0956f19d021eff1d5cc?width=1136";

  return (
    <div className="min-h-screen bg-white">
      <HeaderExperience />
      <div className="flex max-w-[1600px] lg:max-w-[959px] xl:max-w-[1600px] flex-col items-start pt-3 bg-white mx-auto">
      {/* Breadcrumbs */}
      <div className="flex items-baseline gap-4 w-full px-4 lg:px-10">
        <div className="flex items-center gap-1">
          <span className="text-gray-600 text-base">Furniture</span>
          <span className="text-gray-600 text-sm">/</span>
          <span className="text-gray-600 text-base">Living Room Furniture</span>
          <span className="text-gray-600 text-sm">/</span>
          <span className="text-gray-900 text-base font-medium">SKU: W002845288</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-start gap-8 w-full px-4 lg:px-10 mt-4 justify-center max-w-[959px] lg:max-w-[1600px]">
        {/* Media Tray */}
        <div className="flex flex-col lg:flex-row items-start gap-6 w-full lg:flex-1 lg:pl-4">
          {/* Primary Image - Mobile First */}
          <div className="w-full lg:flex-1 relative order-1 lg:order-2">
            <button className="absolute top-2 right-2 w-12 h-12 bg-white border border-wayfair-primary rounded-full flex items-center justify-center hover:bg-gray-50 z-10">
              <Heart className="w-6 h-6 text-wayfair-primary" />
            </button>
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F14858d46f57a444ab2469d2c42a7ca0d%2F7a751648185f4813a11d28a0c17c1d0c?format=webp"
              alt="Product"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          {/* Thumbnail Tray - Hidden on mobile, visible on desktop */}
          <div className="hidden lg:flex flex-col gap-2 order-2 lg:order-1">
            {productImages.map((img, index) => (
              <div key={index} className="relative">
                <img
                  src={index === 0 ? "https://cdn.builder.io/api/v1/image/assets%2F14858d46f57a444ab2469d2c42a7ca0d%2F96170b60967740f9ac79239c6a06deee" : img}
                  alt=""
                  className={`w-14 h-14 object-cover rounded-lg cursor-pointer ${
                    index === 0 ? 'border-2 border-wayfair-primary' : 'border border-gray-300'
                  }`}
                />
                {index === productImages.length - 1 && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs text-center leading-tight">+[#]<br/>More</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-6 w-full lg:flex-1">
          {/* Product Name, Brand, Reviews */}
          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-bold text-gray-900 leading-tight">
              Amari 63" Rolled Arm Slipcovered Loveseat
            </h1>
            <div className="flex items-center gap-1 text-base">
              <span className="text-gray-900">By</span>
              <a href="#" className="text-wayfair-primary underline hover:text-wayfair-primary/80">Wayfair Custom Upholstery</a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-base font-medium">5.0</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-gray-900 star-shape"></div>
                ))}
              </div>
              <a href="#" className="text-wayfair-primary underline text-base hover:text-wayfair-primary/80">763 Reviews</a>
            </div>
          </div>

          {/* Pricing */}
          <div className="flex justify-start gap-2 flex-row items-center">
            <div className="flex flex-col">
              <span className="text-3xl font-normal text-gray-900">$799.99</span>
              <span className="text-base text-red-600">20% Off</span>
            </div>
            <span className="text-base text-gray-500 line-through pb-[22px]">$999.99</span>
            
            {/* Or Payment Option - Hidden on mobile */}
            <div className="hidden lg:flex items-center gap-2 ml-[15px]">
              <div className="w-px h-16 bg-gray-300"></div>
              <div className="text-center text-sm text-gray-600">or</div>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-bold text-gray-900">$10/mo.</span>
                  <span className="text-xl font-bold text-gray-900">for 48 mos.</span>
                </div>
                <div className="text-base text-gray-900 gap-1">
                  suggested payments with the Wayfair Credit Card
                </div>
                <div className="text-wayfair-primary underline gap-2 mt-1">
                  Apply now
                </div>
              </div>
            </div>
          </div>

          {/* Payment Option Mobile */}
          <div className="flex lg:hidden flex-col gap-2 text-center">
            <div className="text-sm text-gray-600">or</div>
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-lg font-bold text-gray-900">$10/mo.</span>
              <span className="text-lg font-bold text-gray-900">for 48 mos.</span>
            </div>
            <div className="text-sm text-gray-900">
              suggested payments with the Wayfair Credit Card
            </div>
            <div className="text-wayfair-primary underline text-sm">
              Apply now
            </div>
          </div>

          {/* Product Options */}
          <div className="flex flex-col gap-6">
            {/* Visual Options */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1">
                <span className="text-base text-gray-900">Fabric:</span>
                <span className="text-base font-bold text-gray-900">Bayou White</span>
              </div>
              <div className="flex flex-wrap gap-2 lg:gap-2">
                {Array(30).fill(0).map((_, index) => (
                  <div
                    key={index}
                    className={`w-14 h-14 p-1 rounded-lg cursor-pointer ${
                      selectedOption === index
                        ? 'border-3 border-wayfair-primary'
                        : 'border border-gray-400'
                    }`}
                    onClick={() => setSelectedOption(index)}
                  >
                    <img 
                      src="https://api.builder.io/api/v1/image/assets/TEMP/3b32029634d601c058d940e41aecb87ed86552ad?width=98" 
                      alt="" 
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                ))}
                <div className="w-14 h-14 border border-wayfair-primary rounded-lg flex items-center justify-center">
                  <a href="#" className="text-wayfair-primary underline text-sm text-center leading-tight">See All<br/>30</a>
                </div>
              </div>
            </div>
          </div>

          {/* Shipping Info */}
          <div className="flex flex-col gap-4 p-4 border border-gray-300 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <div className="flex flex-wrap gap-2">
                  <span className="px-1 bg-wayfair-primary/10 text-wayfair-primary text-sm font-bold">FREE Full Service Delivery</span>
                  <span className="px-1 bg-green-50 text-green-600 text-sm font-bold">FREE Fast Delivery</span>
                </div>
                <div className="flex items-center gap-1 text-base flex-wrap">
                  <span className="text-gray-900">Get it by Mar 12</span>
                  <span className="text-gray-900">to</span>
                  <a href="#" className="text-wayfair-primary underline">City -</a>
                  <a href="#" className="text-wayfair-primary underline">01234</a>
                  <ChevronDown className="w-6 h-6 text-wayfair-primary" />
                </div>
              </div>
              <ChevronRight className="w-6 h-6 text-gray-900" />
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-end gap-4 lg:gap-6">
            <div className="flex flex-col gap-1 h-auto self-stretch my-auto">
              <div className="flex items-center justify-center lg:justify-start rounded-full border border-gray-400">
                <button 
                  className="w-11 h-12 flex items-center justify-center rounded-l-full hover:bg-gray-50 self-stretch"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="w-6 h-6" />
                </button>
                <div className="w-11 h-12 flex items-center justify-center border-l border-r border-gray-400 self-stretch text-gray-900">
                  {quantity}
                </div>
                <button 
                  className="w-11 h-12 flex items-center justify-center rounded-r-full hover:bg-gray-50 self-stretch"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="w-6 h-6" />
                </button>
              </div>
            </div>
            <button className="flex-1 h-12 bg-wayfair-primary text-white text-base font-medium rounded-full hover:bg-wayfair-primary/90 transition-colors">
              Add to Cart
            </button>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-bold text-gray-900">Services</h3>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg">
                <input type="checkbox" className="w-6 h-6 border-2 border-gray-400 rounded" />
                <div className="flex items-center gap-2 flex-1">
                  <div className="w-6 h-6 text-gray-900">🔧</div>
                  <span className="text-sm text-gray-900">Professional Assembly - $95.99</span>
                </div>
                <a href="#" className="text-wayfair-primary underline text-sm hover:text-wayfair-primary/80">Details</a>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg">
                <input type="checkbox" className="w-6 h-6 border-2 border-gray-400 rounded" />
                <div className="flex items-center gap-2 flex-1">
                  <div className="w-6 h-6 text-gray-900">🛡️</div>
                  <span className="text-sm text-gray-900">5 Year Protection Plan - $56.99</span>
                </div>
                <a href="#" className="text-wayfair-primary underline text-sm hover:text-wayfair-primary/80">Details</a>
              </div>
            </div>
          </div>

          {/* Get Everything You Need */}
          <div className="flex flex-col gap-3 pb-px">
            <h3 className="text-xl font-bold text-gray-900">Get Everything You Need</h3>
            <div className="flex flex-col lg:flex-row items-center justify-start gap-4 -mb-0.5">
              <div className="flex flex-col items-center gap-2 w-auto flex-grow-0 h-auto self-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F14858d46f57a444ab2469d2c42a7ca0d%2F96170b60967740f9ac79239c6a06deee?format=webp"
                  alt=""
                  className="w-36 h-auto object-cover rounded-lg flex-grow"
                />
                <span className="text-base text-gray-900 text-center">Product Name That Wraps</span>
              </div>
              <Plus className="w-6 h-6 text-gray-900 hidden lg:block" />
              <div className="flex flex-col lg:flex-row items-center gap-4">
                <div className="grid grid-cols-2 gap-2 lg:flex lg:flex-col lg:gap-2">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F14858d46f57a444ab2469d2c42a7ca0d%2F440674e934f84fd9ac124fb554754f15?format=webp"
                    alt=""
                    className="w-16 h-16 lg:w-36 lg:h-36 object-cover rounded-lg"
                  />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F14858d46f57a444ab2469d2c42a7ca0d%2F440674e934f84fd9ac124fb554754f15?format=webp"
                    alt=""
                    className="w-16 h-16 lg:w-36 lg:h-36 object-cover rounded-lg"
                  />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F14858d46f57a444ab2469d2c42a7ca0d%2F440674e934f84fd9ac124fb554754f15?format=webp"
                    alt=""
                    className="w-16 h-16 lg:w-36 lg:h-36 object-cover rounded-lg"
                  />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F14858d46f57a444ab2469d2c42a7ca0d%2F440674e934f84fd9ac124fb554754f15?format=webp"
                    alt=""
                    className="w-16 h-16 lg:w-36 lg:h-36 object-cover rounded-lg"
                  />
                </div>
                <span className="text-base text-gray-900 text-center lg:hidden">Product Name That Wraps</span>
              </div>
              <div className="flex flex-col items-center gap-2 w-full lg:w-auto lg:ml-4 p-4 border border-gray-300 rounded-lg">
                <div className="flex items-center gap-1">
                  <span className="text-base text-gray-900">Buy Both: $999.99</span>
                  <ChevronRight className="w-6 h-6 text-gray-900" />
                </div>
              </div>
            </div>
          </div>

          {/* At a Glance */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-bold text-gray-900">At a Glance</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="flex items-center gap-4">
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/dc23846eac4f8782f13f8a4902b5adbe8445e54a?width=64" alt="" className="w-8 h-8" />
                <span className="text-base text-gray-900">Lorem ipsum dolor sit amet</span>
              </div>
              <div className="flex items-center gap-4">
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/91d2bb9f5daf3447f28769ac0af0c65a159d06c3?width=64" alt="" className="w-8 h-8" />
                <span className="text-base text-gray-900">Lorem ipsum dolor sit amet</span>
              </div>
            </div>
            <a href="#" className="text-wayfair-primary underline text-base hover:text-wayfair-primary/80">See More</a>
          </div>

          {/* Description, Specs, Return Policy, Reviews */}
          <div className="flex flex-col border-t border-gray-300">
            {['Description', 'Specifications', 'Return Policy', 'Reviews'].map((section) => (
              <div key={section} className="flex items-center justify-between p-4 border-b border-gray-300 cursor-pointer hover:bg-gray-50">
                <h3 className="text-xl font-bold text-gray-900">{section}</h3>
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}
