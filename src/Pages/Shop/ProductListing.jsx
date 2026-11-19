import styles from "./ProductListing.module.css";
import ProductCard from "./ProductCard";

function ProductListing({ currentProducts }) {
  return (
    <div className={styles.ProductListing}>
      <div className={styles.mainHeader}>
        <h3>Results</h3>
        <p>
          Check each product page for other buying options. Price and other
          details may vary based on product size and color.
        </p>
      </div>
      <div className={styles.ProductListingMain}>
        <div className={styles.productGrid}>
          {currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default ProductListing;
