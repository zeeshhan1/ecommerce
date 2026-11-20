import styles from "./ShopToolBar.module.css";
import { useParams } from "react-router-dom";
function ShopToolBar({ sortBy, setSortBy }) {
  const { slug } = useParams();
  return (
    <div className={styles.toolBar}>
      <p className={styles.ResultsToolBar}>
        1-16 of over 100,000 results for{" "}
        <span className={styles.ToolBarCat}>
          {slug ? `"${slug}"` : "All Categories"}
        </span>
      </p>

      <div className={styles.sortByCat}>
        Sort by :
        <select
          className={styles.dropdown}
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="featured">Featured</option>
          <option value="low-high">Price: Low to High</option>
          <option value="high-low">Price: High to Low</option>
          <option value="avg">Avg. Customer Review</option>
          <option value="newestArrival">Newest Arrivals</option>
          <option value="bestSellers">Best Sellers</option>
        </select>
      </div>
    </div>
  );
}
export default ShopToolBar;
