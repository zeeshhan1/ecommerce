import { useParams } from "react-router-dom";
import styles from "./Shop.module.css";
import FilterSidebar from "./FilterSidebar.jsx";
import ShopToolBar from "./ShopToolBar.jsx";
import ProductListing from "./ProductListing.jsx";
import sidebarData from "../../data/sidebar.js";

function Shop() {
  const { categorySlug } = useParams();

  const data = sidebarData[categorySlug];

  return (
    <>
      <ShopToolBar />
      <div className={styles.shopContent}>
        <FilterSidebar data={data} />
        <ProductListing />
      </div>
    </>
  );
}

export default Shop;
