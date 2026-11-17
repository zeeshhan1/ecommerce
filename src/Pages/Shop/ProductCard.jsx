import styles from "./ProductCard.module.css";

function ProductCard({ product }) {
  return (
    <article className={styles.productCard}>
      <div className={styles.productImageContainer}>
        <img
          src={product.image}
          alt={product.name}
          className={styles.productImage}
          loading="lazy"
        />
      </div>

      <div className={styles.productDetails}>
        {/* {product.brand && (
          <p className={styles.productBrand}>{product.brand}</p>
        )} */}
        <h3 className={styles.productName}>{product.name}</h3>
        {product.rating && (
          <p className={styles.productRating}>
            {"★".repeat(Math.round(product.rating))} (
            {product.reviewsCount || 0})
          </p>
        )}
        <div className={styles.priceContainer}>
          <span className={styles.currentPrice}>₹{product.price}</span>
          {product.originalPrice && (
            <span className={styles.originalPrice}>
              ₹{product.originalPrice}
            </span>
          )}
          {product.discount && (
            <span className={styles.discount}>{product.discount}% off</span>
          )}
        </div>
        <button className={styles.addToCartButton}>Add to Cart</button>
      </div>
    </article>
  );
}

export default ProductCard;
