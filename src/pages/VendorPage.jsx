import { Link, useParams, useSearchParams } from "react-router";
import { useVendors } from "../hooks/useVendors.js";
import MenuList from "../components/MenuList.jsx";
import CategoryFilter from "../components/CategoryFilter.jsx";
import { Loading, ErrorMessage } from "../components/Status.jsx";

function VendorPage() {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const { vendors, loading, error, reload } = useVendors();

  // the category lives in the URL: /vendor/:id?cat=Rice
  const selectedCategory = searchParams.get("cat") ?? "All";

  function handleSelectCategory(category) {
    if (category === "All") {
      setSearchParams({});
    } else {
      setSearchParams({ cat: category });
    }
  }

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} onRetry={reload} />;

  const vendor = vendors.find((v) => v.id === id);

  if (!vendor) {
    return (
      <section>
        <h2 className="section-title">Vendor not found</h2>
        <p className="muted">
          There is no vendor called “{id}”. <Link to="/">Back to vendors</Link>
        </p>
      </section>
    );
  }

  const categories = [
    "All",
    ...new Set(vendor.menu.map((item) => item.category)),
  ];
  const visibleItems =
    selectedCategory === "All"
      ? vendor.menu
      : vendor.menu.filter((item) => item.category === selectedCategory);

  return (
    <section>
      <p>
        <Link to="/">← All vendors</Link>
      </p>
      <h2 className="section-title">{vendor.name}</h2>
      <p className="muted">
        {vendor.location} · {vendor.openHours}
      </p>
      <CategoryFilter
        categories={categories}
        active={selectedCategory}
        onSelect={handleSelectCategory}
      />
      <MenuList items={visibleItems} />
    </section>
  );
}
export default VendorPage;