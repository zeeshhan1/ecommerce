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

  // pagination logic
  const productsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(productData.length / productsPerPage);

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  const currentProducts = productData.slice(startIndex, endIndex);

  return (
    <>
      <ShopToolBar />
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
