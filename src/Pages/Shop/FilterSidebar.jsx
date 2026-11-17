import styles from "./FilterSidebar.module.css";

function FilterSidebar() {
  return (
    <aside className={styles.sidebar}>
      <section className={styles.filterSection}>
        <h4>Popluar Shopping Ideas</h4>
        <ul>
          <li>Desktops</li>
          <li>Laptop computers</li>
          <li>Printers</li>
        </ul>
      </section>

      <section className={styles.filterSection}>
        <h4>Deals &amp; Discounts</h4>
        <ul>
          <li>All Discounts</li>
          <li>Buy More, Save More</li>
          <li>Coupons</li>
        </ul>
      </section>

      <section className={styles.filterSection}>
        <h4>Customer Review</h4>
        {[4].map((rating) => (
          <label key={rating}>
            <span>{"★".repeat(rating) + "☆".repeat(5 - rating)}</span> & Up
          </label>
        ))}
      </section>

      <section className={styles.filterSection}>
        <h4>Brands</h4>
        <ul>
          <li>Apple</li>
          <li>Samsung</li>
          <li>Rgx</li>
        </ul>
      </section>

      <section className={styles.filterSection}>
        <h4>From our Brands</h4>
        <label>
          <input type="checkbox" />
          Top Brands
        </label>
      </section>

      <section className={styles.filterSection}>
        <h4>Condition</h4>
        <ul>
          <li>
            <label>
              <input type="checkbox" />
              New
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              Renewed
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              Used
            </label>
          </li>
        </ul>
      </section>
    </aside>
  );
}
export default FilterSidebar;
