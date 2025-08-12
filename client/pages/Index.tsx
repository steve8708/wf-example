import HeaderExperience from "../components/HeaderExperience";
import ProductDetailPage from "../components/ProductDetailPage";

export default function Index() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-start items-center" style={{ fontFamily: "'Sofia Pro', -apple-system, Roboto, Helvetica, sans-serif" }}>
      <HeaderExperience />
      <ProductDetailPage />
    </div>
  );
}
