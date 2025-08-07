import { Link } from "react-router-dom";
import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Header() {
  return (
    <>
      {/* Top promotional banner */}
      <div className="bg-purple-600 text-white text-center py-2 px-4 text-sm">
        <span className="font-medium">EXTRA 10% OFF* | APP-EXCLUSIVE SALE ENDS AUGUST 9 →</span>
        <span className="ml-8 text-xs">Rewards | Financing | Professional | Free & Easy Delivery Over $35*</span>
      </div>
      
      {/* Main header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          {/* Logo and search section */}
          <div className="flex items-center py-4 gap-6">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img 
                src="https://cdn.builder.io/api/v1/image/assets%2Ff11e2abd32874d5a81c338dbec16dcea%2F242cb59819ef4bfabd39e6b437d85dcc" 
                alt="Wayfair" 
                className="h-8"
              />
            </Link>
            
            {/* Search bar */}
            <div className="flex-1 max-w-2xl relative">
              <Input 
                type="text" 
                placeholder="Find anything home..." 
                className="w-full pl-4 pr-12 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:ring-0"
              />
              <Button 
                size="sm" 
                className="absolute right-1 top-1 bottom-1 bg-purple-600 hover:bg-purple-700 text-white px-4 rounded-md"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
            
            {/* User actions */}
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="hidden md:flex items-center gap-2">
                <User className="h-4 w-4" />
                Sign In
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <ShoppingCart className="h-4 w-4" />
                Cart
              </Button>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Navigation menu */}
          <nav className="hidden md:flex border-t border-gray-200 py-3">
            <div className="flex items-center gap-8 text-sm font-medium">
              <Link to="/furniture" className="text-gray-700 hover:text-purple-600">Furniture</Link>
              <Link to="/outdoor" className="text-gray-700 hover:text-purple-600">Outdoor</Link>
              <Link to="/bedding-bath" className="text-gray-700 hover:text-purple-600">Bedding & Bath</Link>
              <Link to="/rugs" className="text-gray-700 hover:text-purple-600">Rugs</Link>
              <Link to="/decor-pillows" className="text-gray-700 hover:text-purple-600">Decor & Pillows</Link>
              <Link to="/lighting" className="text-gray-700 hover:text-purple-600">Lighting</Link>
              <Link to="/organization" className="text-gray-700 hover:text-purple-600">Organization</Link>
              <Link to="/kitchen" className="text-gray-700 hover:text-purple-600">Kitchen</Link>
              <Link to="/baby-kids" className="text-gray-700 hover:text-purple-600">Baby & Kids</Link>
              <Link to="/home-improvement" className="text-gray-700 hover:text-purple-600">Home Improvement</Link>
              <Link to="/appliances" className="text-gray-700 hover:text-purple-600">Appliances</Link>
              <Link to="/pet" className="text-gray-700 hover:text-purple-600">Pet</Link>
              <Link to="/holiday" className="text-gray-700 hover:text-purple-600">Holiday</Link>
              <Link to="/shop-by-room" className="text-gray-700 hover:text-purple-600">Shop by Room</Link>
              <span className="text-purple-600 font-semibold">✓ Verified</span>
              <Link to="/sale" className="text-red-600 font-semibold">Sale</Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
