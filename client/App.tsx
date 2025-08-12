import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PlaceholderPage from "./pages/PlaceholderPage";
import ProductDetailPage from "./components/ProductDetailPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route
            path="/furniture"
            element={<PlaceholderPage title="Furniture" />}
          />
          <Route
            path="/outdoor"
            element={<PlaceholderPage title="Outdoor" />}
          />
          <Route
            path="/bedding-bath"
            element={<PlaceholderPage title="Bedding & Bath" />}
          />
          <Route path="/rugs" element={<PlaceholderPage title="Rugs" />} />
          <Route
            path="/decor-pillows"
            element={<PlaceholderPage title="Decor & Pillows" />}
          />
          <Route
            path="/lighting"
            element={<PlaceholderPage title="Lighting" />}
          />
          <Route
            path="/organization"
            element={<PlaceholderPage title="Organization" />}
          />
          <Route
            path="/kitchen"
            element={<PlaceholderPage title="Kitchen" />}
          />
          <Route
            path="/baby-kids"
            element={<PlaceholderPage title="Baby & Kids" />}
          />
          <Route
            path="/home-improvement"
            element={<PlaceholderPage title="Home Improvement" />}
          />
          <Route
            path="/appliances"
            element={<PlaceholderPage title="Appliances" />}
          />
          <Route path="/pet" element={<PlaceholderPage title="Pet" />} />
          <Route
            path="/holiday"
            element={<PlaceholderPage title="Holiday" />}
          />
          <Route
            path="/shop-by-room"
            element={<PlaceholderPage title="Shop by Room" />}
          />
          <Route
            path="/sale"
            element={
              <PlaceholderPage
                title="Sale"
                description="Check out our amazing deals and discounts!"
              />
            }
          />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
