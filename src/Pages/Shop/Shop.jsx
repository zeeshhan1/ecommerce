import styles from "./Shop.module.css";
import FilterSidebar from "./FilterSidebar.jsx";
import ShopToolBar from "./ShopToolBar.jsx";
import ProductListing from "./ProductListing.jsx";

function Shop() {
  return (
    <>
      <ShopToolBar />
      <div className={styles.shopContent}>
        <FilterSidebar />
        <ProductListing />
      </div>
    </>
  );
}
export default Shop;
