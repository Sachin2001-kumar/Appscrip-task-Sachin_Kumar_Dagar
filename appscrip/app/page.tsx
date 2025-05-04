"use client";

import { useState, useEffect, useMemo } from "react";
import { getProducts, getCategories, type Product } from "@/services/fakestore";
import { ProductCard } from "@/components/product-card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { CategoryFilters } from "@/components/category-filters";
import { Skeleton } from "@/components/ui/skeleton";
import styles from "./page.module.css";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "eCommerce Showcase",
  url: "YOUR_WEBSITE_URL",
  potentialAction: {
    "@type": "SearchAction",
    target: "YOUR_WEBSITE_URL/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [allCategories, setAllCategories] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFilterVisible, setIsFilterVisible] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const [fetchedProducts, fetchedCategories] = await Promise.all([
        getProducts(),
        getCategories(),
      ]);
      setProducts(fetchedProducts);
      setAllCategories(fetchedCategories);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  const handleCategoryChange = (category: string, isChecked: boolean) => {
    setSelectedCategories((prevSelected) =>
      isChecked
        ? [...prevSelected, category]
        : prevSelected.filter((c) => c !== category)
    );
  };

  const filteredProducts = useMemo(() => {
    if (selectedCategories.length === 0) {
      return products;
    }
    return products.filter((product) =>
      selectedCategories.some(
        (selectedCat) =>
          product.category.toLowerCase() === selectedCat.toLowerCase()
      )
    );
  }, [products, selectedCategories]);

  const totalItems = filteredProducts.length;

  const getProductGridClass = () => {
    return isFilterVisible
      ? `${styles.productGrid} ${styles.productGridFiltered}`
      : `${styles.productGrid} ${styles.productGridFull}`;
  };

  const getSkeletonGridClass = () => {
    return isFilterVisible
      ? `${styles.skeletonGrid} ${styles.skeletonGridFiltered}`
      : `${styles.skeletonGrid} ${styles.skeletonGridFull}`;
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <p className="disc">Discover our Products</p>
      <p className="disc-sub">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo quos
        rerum soluta minus. Laboriosam quaerat praesentium rerum, consequatur
        reprehenderit rem a consequuntur iure, aperiam consectetur architecto.
        Corrupti delectus non accusamus?
      </p>

      <Separator className={styles.separator} />

      <div className={styles.filterBar}>
        <div className={styles.filterBarLeft}>
          {isLoading ? (
            <Skeleton className={styles.itemCountSkeleton} />
          ) : (
            <span className={styles.itemCount}>{totalItems} ITEMS</span>
          )}
          <Button
            className={styles.filterToggle}
            onClick={() => setIsFilterVisible(!isFilterVisible)}
          >
            {isFilterVisible ? "HIDE FILTER" : "SHOW FILTER"}
          </Button>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className={styles.recommendButton}>
              RECOMMENDED <ChevronDown className={styles.chevronDown} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end"></DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Separator className={styles.separatorBottom} />

      <div className={styles.contentLayout}>
        {isFilterVisible && (
          <aside className={styles.filterAside}>
            {isLoading ? (
              <div className={styles.filterSkeletonContainer}>
                <Skeleton className={styles.filterHeadingSkeleton} />
                {[...Array(3)].map((_, i) => (
                  <div key={i} className={styles.filterItemSkeleton}>
                    <Skeleton className={styles.filterTriggerSkeleton} />
                    <Skeleton className={styles.filterContentSkeleton} />
                  </div>
                ))}
              </div>
            ) : (
              <CategoryFilters
                categories={allCategories}
                selectedCategories={selectedCategories}
                onCategoryChange={handleCategoryChange}
              />
            )}
          </aside>
        )}

        <div
          className={`${styles.productGridContainer} ${
            isFilterVisible
              ? styles.productGridContainerFiltered
              : styles.productGridContainerFull
          }`}
        >
          {isLoading ? (
            <div className={getSkeletonGridClass()}>
              {[...Array(8)].map((_, i) => (
                <div key={i} className={styles.productSkeleton}>
                  <Skeleton className={styles.productImageSkeleton} />
                  <div className={styles.productInfoSkeleton}>
                    <Skeleton className={styles.productTitleSkeleton} />
                    <Skeleton className={styles.productPriceSkeleton} />
                    <Skeleton className={styles.productCategorySkeleton} />
                    <Skeleton className={styles.addToCartButtonSkeleton} />
                  </div>
                </div>
              ))}
            </div>
          ) : filteredProducts.length === 0 ? (
            <p className={styles.noProductsMessage}>
              No products found matching your filters. Please try adjusting your
              selection.
            </p>
          ) : (
            <div className={getProductGridClass()}>
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
