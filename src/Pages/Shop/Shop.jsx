import { useParams } from "react-router-dom";
import styles from "./Shop.module.css";
import FilterSidebar from "./FilterSidebar.jsx";
import ShopToolBar from "./ShopToolBar.jsx";
import ProductListing from "./ProductListing.jsx";
import sidebarData from "../../data/sidebar.js";
import products from "../../data/products.js";

function Shop() {
  const { categorySlug } = useParams();

  const data = sidebarData[categorySlug];
  const productData = products.filter(
    (product) => product.category.toLowerCase() === categorySlug,
  );
  return (
    <>
      <ShopToolBar />
      <div className={styles.shopContent}>
        <FilterSidebar data={data} />
        <ProductListing productData={productData} />
      </div>
    </>
  );
}

export default Shop;
