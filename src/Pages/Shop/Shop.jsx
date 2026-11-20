import { useParams } from "react-router-dom";
import styles from "./Shop.module.css";
import FilterSidebar from "./FilterSidebar.jsx";
import ShopToolBar from "./ShopToolBar.jsx";
import ProductListing from "./ProductListing.jsx";
import sidebarData from "../../data/sidebar.js";
import products from "../../data/products.js";
import { useState } from "react";
import Pagination from "../../Components/UI/Pagination.jsx";

function ShopRoute() {
  const { categorySlug } = useParams();

  return <Shop key={categorySlug} />;
}

function Shop() {
  const { categorySlug } = useParams();

  const data = sidebarData[categorySlug];
  const productData = products.filter(
    (product) => product.category.toLowerCase() === categorySlug,
  );

  // sorting logic
  const [sortBy, setSortBy] = useState("featured");
  const sortProducts = (products, sortBy) => {
    switch (sortBy) {
      case "featured":
        return [...products].sort(
          (a, b) => Number(b.featured) - Number(a.featured),
        );
      case "low-high":
        return [...products].sort((a, b) => a.price - b.price);
      case "high-low":
        return [...products].sort((a, b) => b.price - a.price);
      case "avg":
        return [...products].sort((a, b) => b.rating - a.rating);
      default:
        return products;
    }
  };
  const handleSortChange = (value) => {
    setSortBy(value);
    setCurrentPage(1);
  };
  const sortedProducts = sortProducts(productData, sortBy);

  // pagination logic
  const productsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  const currentProducts = sortedProducts.slice(startIndex, endIndex);
  return (
    <>
      <ShopToolBar sortBy={sortBy} setSortBy={handleSortChange} />
      <div className={styles.shopContent}>
        <FilterSidebar data={data} />
        <ProductListing currentProducts={currentProducts} />
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
}

export default ShopRoute;
