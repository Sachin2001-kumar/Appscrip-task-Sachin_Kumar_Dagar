import type { Metadata, ResolvingMetadata } from "next";
import { getProduct } from "@/services/fakestore";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./page.module.css";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = parseInt(params.id, 10);
  const product = await getProduct(id);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The product you are looking for does not exist.",
    };
  }

  const imageAlt = `${product.title} - ${product.category}`;

  return {
    title: product.title,
    description: product.description.substring(0, 160),
    openGraph: {
      title: product.title,
      description: product.description.substring(0, 160),
      images: [
        {
          url: product.image,
          width: 800,
          height: 800,
          alt: imageAlt,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const id = parseInt(params.id, 10);

  if (isNaN(id)) {
    notFound();
  }

  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  const imageAlt = `${product.title} - ${product.category}`;
  const imageSeoName = product.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    image: product.image,
    description: product.description,
    sku: product.id.toString(),
    mpn: product.id.toString(),
    brand: {
      "@type": "Brand",
      name: "eCommerce Showcase",
    },
    offers: {
      "@type": "Offer",
      url: `YOUR_WEBSITE_URL/product/${product.id}`,
      priceCurrency: "USD",
      price: product.price.toFixed(2),
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating.rate.toString(),
      reviewCount: product.rating.count.toString(),
    },
  };

  return (
    <div className={styles.container}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
        <Link href="/" className={styles.breadcrumbLink}>
          Home
        </Link>
        {" / "}
        <span className={styles.breadcrumbCategory}>{product.category}</span>
        {" / "}
        <span className={styles.breadcrumbTitle}>{product.title}</span>
      </nav>

      <div className={styles.grid}>
        <div className={styles.imageSection}>
          <Image
            src={product.image}
            alt={imageAlt}
            width={500}
            height={500}
            className={styles.productImage}
            priority
            data-ai-hint={`${product.category} product detail`}
          />
        </div>

        <div className={styles.detailsSection}>
          <Badge variant="secondary" className={styles.categoryBadge}>
            {product.category}
          </Badge>
          <h1 className={styles.productTitle}>{product.title}</h1>

          <div className={styles.ratingContainer}>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`${styles.starIcon} ${
                    i < Math.round(product.rating.rate)
                      ? styles.starFilled
                      : styles.starMuted
                  }`}
                />
              ))}
            </div>
            <span className={styles.ratingCount}>
              ({product.rating.count} reviews)
            </span>
          </div>

          <p className={styles.productPrice}>${product.price.toFixed(2)}</p>

          <Separator className={styles.detailsSeparator} />

          <h2 className={styles.descriptionHeading}>Description</h2>
          <p className={styles.productDescription}>{product.description}</p>

          <Button size="lg" className={styles.addToCartButton}>
            <ShoppingCart className={styles.cartIcon} /> Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
