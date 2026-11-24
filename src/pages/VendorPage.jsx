import { Link, useParams, useSearchParams } from "react-router";
import { useVendors } from "../hooks/useVendors.js";
import { useAuth } from "../hooks/useAuth.js";
import { useLocalStorage } from "../hooks/useLocalStorage.js";
import MenuList from "../components/MenuList.jsx";
import CategoryFilter from "../components/CategoryFilter.jsx";
import { Loading, ErrorMessage } from "../components/Status.jsx";

// The menu and the category filter. It is its own component so VendorPage can
// remount it (key=...) when the user changes. That makes useLocalStorage read
// the new user's saved category instead of keeping the old one.
function VendorMenu({ vendor }) {
  const { user } = useAuth();
  const [searchParams, setSearchParams] = useSearchParams();
  const [savedCategory, setSavedCategory] = useLocalStorage(
    "ce-category-" + (user ? user.uid : "guest"),
    "All",
  );

  const categories = [
    "All",
    ...new Set(vendor.menu.map((item) => item.category)),
  ];

  // The URL wins (a shared link), then the user's saved choice, then All.
  let selectedCategory = searchParams.get("cat") ?? savedCategory;
  if (!categories.includes(selectedCategory)) selectedCategory = "All";

  function handleSelectCategory(category) {
    if (user) setSavedCategory(category); // guests: nothing is saved
    if (category === "All") {
      setSearchParams({});
    } else {
      setSearchParams({ cat: category });
    }
  }

  const visibleItems =
    selectedCategory === "All"
      ? vendor.menu
      : vendor.menu.filter((item) => item.category === selectedCategory);

  return (
    <>
      <CategoryFilter
        categories={categories}
        active={selectedCategory}
        onSelect={handleSelectCategory}
      />
      <MenuList items={visibleItems} />
    </>
  );
}

function VendorPage() {
  const { id } = useParams();
  const { vendors, loading, error, reload } = useVendors();
  const { user, loading: authLoading } = useAuth();

  // Wait for Firebase too, or we could read the guest's value by mistake.
  if (loading || authLoading) return <Loading />;
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

  return (
    <section>
      <p>
        <Link to="/">← All vendors</Link>
      </p>
      <h2 className="section-title">{vendor.name}</h2>
      <p className="muted">
        {vendor.location} · {vendor.openHours}
      </p>
      <VendorMenu key={user ? user.uid : "guest"} vendor={vendor} />
    </section>
  );
}
export default VendorPage;
