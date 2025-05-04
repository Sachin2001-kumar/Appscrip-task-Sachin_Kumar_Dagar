"use client";

import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import styles from "./category-filters.module.css";

interface CategoryFiltersProps {
  categories: string[];
  selectedCategories: string[];
  onCategoryChange: (category: string, isChecked: boolean) => void;
}

const subCategories: { [key: string]: string[] } = {
  "Men's Clothing": ["All", "Shirts", "Pants", "Jackets"],
  "Women's Clothing": ["All", "Dresses", "Tops", "Skirts", "Outerwear"],
  Jewelery: ["All", "Rings", "Necklaces", "Bracelets", "Earrings"],
  Electronics: ["All", "Computers", "Audio", "Gadgets", "Accessories"],
};

export function CategoryFilters({
  categories,
  selectedCategories,
  onCategoryChange,
}: CategoryFiltersProps) {
  const [selectedSubCategories, setSelectedSubCategories] = React.useState<{
    [key: string]: string[];
  }>({});

  const handleSubCategoryChange = (
    category: string,
    subCategory: string,
    isChecked: boolean | "indeterminate"
  ) => {
    const currentSubs = selectedSubCategories[category] || [];
    let newSubs: string[] = [];
    const allSubOptions = (subCategories[category] || []).filter(
      (sub) => sub !== "All"
    );

    if (isChecked === true) {
      if (subCategory === "All") {
        newSubs = ["All", ...allSubOptions];
      } else {
        newSubs = [...currentSubs.filter((sub) => sub !== "All"), subCategory];
        if (newSubs.length === allSubOptions.length) {
          newSubs = ["All", ...newSubs];
        }
      }
    } else {
      if (subCategory === "All") {
        newSubs = [];
      } else {
        newSubs = currentSubs.filter(
          (sub) => sub !== subCategory && sub !== "All"
        );
      }
    }

    setSelectedSubCategories((prev) => ({ ...prev, [category]: newSubs }));
    onCategoryChange(category, newSubs.length > 0);
  };

  const getCheckedState = (
    category: string,
    subCategory: string
  ): boolean | "indeterminate" => {
    const selectedSubs = selectedSubCategories[category] || [];
    const allSubOptions = (subCategories[category] || []).filter(
      (sub) => sub !== "All"
    );

    if (subCategory === "All") {
      if (selectedSubs.length === 0) return false;
      if (
        selectedSubs.includes("All") ||
        (allSubOptions.length > 0 &&
          selectedSubs.filter((s) => s !== "All").length ===
            allSubOptions.length)
      )
        return true;
      return "indeterminate";
    }
    return selectedSubs.includes(subCategory);
  };

  return (
    <div className={styles.filterContainer}>
      <h3 className={styles.filterHeading}>Categories</h3>
      <Accordion
        type="multiple"
        className={styles.accordion}
        defaultValue={categories}
      >
        {categories.map((category) => {
          const subOptions = subCategories[category] || ["All"];
          return (
            <AccordionItem value={category} key={category}>
              <AccordionTrigger className={styles.accordionTrigger}>
                {category}
              </AccordionTrigger>
              <AccordionContent className={styles.accordionContent}>
                {subOptions.map((sub) => (
                  <div key={sub} className={styles.checkboxItem}>
                    <Checkbox
                      id={`${category}-${sub}`}
                      checked={getCheckedState(category, sub)}
                      onCheckedChange={(checked) =>
                        handleSubCategoryChange(category, sub, checked)
                      }
                      aria-labelledby={`label-${category}-${sub}`}
                    />
                    <Label
                      htmlFor={`${category}-${sub}`}
                      id={`label-${category}-${sub}`}
                      className={styles.checkboxLabel}
                    >
                      {sub}
                    </Label>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
