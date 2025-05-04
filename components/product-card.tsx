"use client";

import type { Product } from "@/services/fakestore";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Star, ShoppingCart } from "lucide-react";
import styles from "./product-card.module.css";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const imageAlt = `${product.title} - ${product.category}`;
  const imageSeoName = product.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  const handleAddToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    console.log(`Added ${product.title} to cart`);
  };

  return (
    <Card className={styles.productCard}>
      <Link
        href={`/product/${product.id}`}
        className={styles.productLink}
        passHref
      >
        <CardHeader className={styles.cardHeader}>
          <Image
            src={product.image}
            alt={imageAlt}
            width={300}
            height={300}
            className={styles.productImage}
            data-ai-hint={`${product.category} product`}
          />
        </CardHeader>
        <CardContent className={styles.cardContent}>
          <div>
            <CardTitle className={styles.cardTitle} title={product.title}>
              {product.title}
            </CardTitle>
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
                ({product.rating.count})
              </span>
            </div>
            <Badge variant="secondary" className={styles.categoryBadge}>
              {product.category}
            </Badge>
          </div>
          <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
        </CardContent>
      </Link>
      <Separator className={styles.cardSeparator} />
      <CardFooter className={styles.cardFooter}>
        <Button
          className={styles.addToCartButton}
          size="sm"
          onClick={handleAddToCart}
        >
          <ShoppingCart className={styles.cartIcon} /> Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
