import { Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 max-w-6xl">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
          {/* About Us */}
          <section className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold">About Us</h2>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="https://www.aboutwayfair.com/"
                  className="text-gray-700 hover:text-[#7B189F]"
                >
                  About Wayfair
                </a>
              </li>
              <li>
                <a
                  href="https://www.wayfair.com/wayfair-rewards"
                  className="text-gray-700 hover:text-[#7B189F]"
                >
                  Wayfair Rewards
                </a>
              </li>
              <li>
                <a
                  href="https://www.wayfair.com/v/business_account/application/pico?account_method=55"
                  className="text-gray-700 hover:text-[#7B189F]"
                >
                  Wayfair Professional
                </a>
              </li>
              <li>
                <a
                  href="https://www.wayfair.com/design-services/?src=footer_nav"
                  className="text-gray-700 hover:text-[#7B189F]"
                >
                  Design Services
                </a>
              </li>
              <li>
                <a
                  href="https://www.wayfair.com/giftcards"
                  className="text-gray-700 hover:text-[#7B189F]"
                >
                  Gift Cards
                </a>
              </li>
              <li>
                <a
                  href="https://www.wayfair.com/wayfaircard"
                  className="text-gray-700 hover:text-[#7B189F]"
                >
                  Wayfair Credit Card
                </a>
              </li>
              <li>
                <a
                  href="https://www.wayfair.com/pay-over-time"
                  className="text-gray-700 hover:text-[#7B189F]"
                >
                  Wayfair Financing
                </a>
              </li>
              <li>
                <a
                  href="https://www.wayfair.com/shop/o/pt/index"
                  className="text-gray-700 hover:text-[#7B189F]"
                >
                  Product Collections
                </a>
              </li>
              <li>
                <a
                  href="https://www.aboutwayfair.com/careers"
                  className="text-gray-700 hover:text-[#7B189F]"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="https://sell.wayfair.com/"
                  className="text-gray-700 hover:text-[#7B189F]"
                >
                  Sell on Wayfair
                </a>
              </li>
              <li>
                <a
                  href="https://www.wayfair.com/m/creators"
                  className="text-gray-700 hover:text-[#7B189F]"
                >
                  Creators
                </a>
              </li>
              <li>
                <a
                  href="https://investor.wayfair.com/"
                  className="text-gray-700 hover:text-[#7B189F]"
                >
                  Investor Relations
                </a>
              </li>
              <li>
                <a
                  href="https://www.wayfair.com/advertising"
                  className="text-gray-700 hover:text-[#7B189F]"
                >
                  Advertise With Us
                </a>
              </li>
              <li>
                <a
                  href="https://www.wayfair.com/m/wilmette"
                  className="text-gray-700 hover:text-[#7B189F]"
                >
                  Locations
                </a>
              </li>
            </ul>
          </section>

          {/* Customer Service */}
          <section className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold">Customer Service</h2>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="https://www.wayfair.com/session/secure/account/order_search.php"
                  className="text-gray-700 hover:text-[#7B189F]"
                >
                  My Orders
                </a>
              </li>
              <li>
                <a
                  href="https://www.wayfair.com/v/account/welcome/show"
                  className="text-gray-700 hover:text-[#7B189F]"
                >
                  My Account
                </a>
              </li>
              <li>
                <a
                  href="https://www.wayfair.com/session/secure/account/order_search.php"
                  className="text-gray-700 hover:text-[#7B189F]"
                >
                  Track My Order
                </a>
              </li>
              <li>
                <a
                  href="https://www.wayfair.com/help/article/wayfair_accessibility_statement/1E6F064C-1B7D-4058-A4D6-067D9D8FC621"
                  className="text-gray-700 hover:text-[#7B189F]"
                >
                  Wayfair Accessibility Statement
                </a>
              </li>
              <li>
                <a
                  href="https://www.wayfair.com/help/article/returns/"
                  className="text-gray-700 hover:text-[#7B189F]"
                >
                  Return Policy
                </a>
              </li>
              <li>
                <a
                  href="https://www.wayfair.com/help/index"
                  className="text-gray-700 hover:text-[#7B189F]"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="https://www.wayfair.com/ideas-and-advice"
                  className="text-gray-700 hover:text-[#7B189F]"
                >
                  Ideas & Advice
                </a>
              </li>
              <li>
                <a
                  href="https://www.wayfair.com/product_recall"
                  className="text-gray-700 hover:text-[#7B189F]"
                >
                  Product Recalls
                </a>
              </li>
            </ul>
          </section>

          {/* Contact Us */}
          <section className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold">Contact Us</h2>

            <div className="flex flex-col gap-2">
              <Button className="w-fit bg-[#7B189F] hover:bg-[#6b157f] text-white rounded-full px-4 py-3 h-12 flex items-center gap-2">
                <Clock className="h-6 w-6" />
                Quick Help
              </Button>

              <Button
                variant="outline"
                className="w-fit border-[#7B189F] text-[#7B189F] hover:bg-[#7B189F] hover:text-white rounded-full px-4 py-3 h-12 flex items-center gap-2"
              >
                <Phone className="h-6 w-6" />
                Call Us
              </Button>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold">Customer Service</h3>
              <p className="text-gray-700">Open. Closes at 11:59 PM ET.</p>
              <Button
                variant="link"
                className="w-fit p-0 text-[#7B189F] underline"
              >
                Weekly Hours
              </Button>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold">Shopping Assistance</h3>
              <p className="text-gray-700">Open. Closes at 11:59 PM ET.</p>
              <Button
                variant="link"
                className="w-fit p-0 text-[#7B189F] underline"
              >
                Weekly Hours
              </Button>
            </div>
          </section>
        </section>
      </div>
    </footer>
  );
}
