import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type Product = {
  name: string;
  blurb: string;
  tagline: string;
  status: "live" | "soon";
  to?: string;
};

// One source of truth for the product list. Each live product has its own
// docs space at /{name}; add a new entry here when its docs ship.
const PRODUCTS: Product[] = [
  {
    name: "CutWire Prism",
    tagline: "Trigger. Mix. Create. Live.",
    blurb:
      "A live media console for triggering clips, mixing sources, and running shows.",
    status: "live",
    to: "/prism",
  },
];

function ProductCard({ name, blurb, tagline, status, to }: Product) {
  const body = (
    <div className={clsx(styles.card, status === "soon" && styles.cardSoon)}>
      <div className={styles.cardHead}>
        <span className={styles.tagline}>{tagline}</span>
      </div>
      <Heading as="h3" className={styles.cardName}>
        {name}
      </Heading>
      <p className={styles.cardBlurb}>{blurb}</p>
      {status === "live" ? (
        <span className={styles.explore}>Read the docs →</span>
      ) : (
        <span className={styles.openBay}>DOCS COMING SOON</span>
      )}
    </div>
  );

  return (
    <div className="col col--4">
      {to ? (
        <Link to={to} className={styles.cardLink}>
          {body}
        </Link>
      ) : (
        body
      )}
    </div>
  );
}

export default function ProductList(): ReactNode {
  return (
    <section className={styles.products}>
      <div className={styles.sectionEyebrow}>PRODUCTS</div>
      <div className="row">
        {PRODUCTS.map((item) => (
          <ProductCard key={item.name} {...item} />
        ))}
      </div>
    </section>
  );
}
