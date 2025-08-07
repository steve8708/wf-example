import { Link } from "react-router-dom";
import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Header() {
  return (
    <>
      {/* Top promotional banner */}
      <div className="bg-[#7B189F] text-white text-center py-2 px-4 text-sm">
        <span className="font-medium">EXTRA 10% OFF** | APP-EXCLUSIVE SALE ENDS AUGUST 8</span>
      </div>
      
      {/* Main header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          {/* Desktop header */}
          <div className="hidden md:flex items-center py-4 gap-6">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex-shrink-0">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Ff11e2abd32874d5a81c338dbec16dcea%2F242cb59819ef4bfabd39e6b437d85dcc"
                  alt="Wayfair"
                  className="h-8"
                />
              </Link>
            </div>

            {/* Search bar - centered */}
            <div className="flex-1 flex justify-center px-6">
              <div className="w-full max-w-[800px] relative">
                <Input
                  type="text"
                  placeholder="Find anything home..."
                  className="w-full pl-4 pr-12 py-3 border-2 border-gray-300 rounded-lg focus:border-[#7B189F] focus:ring-0"
                />
                <Button
                  size="sm"
                  className="absolute right-0.5 top-0.5 bottom-0.5 bg-[#7B189F] hover:bg-[#6b157f] text-white px-4 rounded-r-lg rounded-l-none"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* User actions */}
            <div className="flex items-center gap-4 flex-shrink-0">
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Sign In
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <ShoppingCart className="h-4 w-4" />
                Cart
              </Button>
            </div>
          </div>

          {/* Mobile header */}
          <div className="md:hidden flex items-center justify-between py-4">
            {/* Hamburger menu */}
            <Button variant="ghost" size="sm">
              <Menu className="h-4 w-4" />
            </Button>
            
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img 
                src="https://cdn.builder.io/api/v1/image/assets%2Ff11e2abd32874d5a81c338dbec16dcea%2F242cb59819ef4bfabd39e6b437d85dcc" 
                alt="Wayfair" 
                className="h-8"
              />
            </Link>
            
            {/* User actions */}
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span className="text-sm">Sign In</span>
              </Button>
              <Button variant="ghost" size="sm">
                <ShoppingCart className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Mobile search bar */}
          <div className="md:hidden pb-4">
            <div className="relative">
              <Input 
                type="text" 
                placeholder="Find anything home..." 
                className="w-full pl-4 pr-12 py-3 border-2 border-gray-300 rounded-lg focus:border-[#7B189F] focus:ring-0"
              />
              <Button 
                size="sm" 
                className="absolute right-0.5 top-0.5 bottom-0.5 bg-[#7B189F] hover:bg-[#6b157f] text-white px-4 rounded-r-lg rounded-l-none"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Navigation menu */}
          <nav className="hidden md:flex border-t border-gray-200 py-3 overflow-x-auto">
            <div className="flex items-center gap-6 text-sm font-medium whitespace-nowrap min-w-max">
              <Link to="/furniture" className="text-gray-700 hover:text-[#7B189F]">Furniture</Link>
              <Link to="/outdoor" className="text-gray-700 hover:text-[#7B189F]">Outdoor</Link>
              <Link to="/bedding-bath" className="text-gray-700 hover:text-[#7B189F]">Bedding & Bath</Link>
              <Link to="/rugs" className="text-gray-700 hover:text-[#7B189F]">Rugs</Link>
              <Link to="/decor-pillows" className="text-gray-700 hover:text-[#7B189F]">Decor & Pillows</Link>
              <Link to="/lighting" className="text-gray-700 hover:text-[#7B189F]">Lighting</Link>
              <Link to="/organization" className="text-gray-700 hover:text-[#7B189F]">Organization</Link>
              <Link to="/kitchen" className="text-gray-700 hover:text-[#7B189F]">Kitchen</Link>
              <Link to="/baby-kids" className="text-gray-700 hover:text-[#7B189F]">Baby & Kids</Link>
              <Link to="/home-improvement" className="text-gray-700 hover:text-[#7B189F]">Home Improvement</Link>
              <Link to="/appliances" className="text-gray-700 hover:text-[#7B189F]">Appliances</Link>
              <Link to="/pet" className="text-gray-700 hover:text-[#7B189F]">Pet</Link>
              <Link to="/holiday" className="text-gray-700 hover:text-[#7B189F]">Holiday</Link>
              <Link to="/shop-by-room" className="text-gray-700 hover:text-[#7B189F]">Shop by Room</Link>
              <span className="text-[#7B189F] font-semibold">✓ Verified</span>
              <Link to="/sale" className="text-red-600 font-semibold">Sale</Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
