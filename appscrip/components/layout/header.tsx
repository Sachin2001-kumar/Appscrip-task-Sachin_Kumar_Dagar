"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import {
  Search,
  Heart,
  ShoppingBag,
  User,
  ChevronDown,
  Menu,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import styles from "./header.module.css";

const Logo = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={styles.logoSvg}
  >
    <path
      d="M24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4Z"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24 14V34"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 24H34"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 18L30 30"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 30L30 18"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24 4C29.5228 4 34 8.47715 34 14C34 19.5228 29.5228 24 24 24"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24 44C18.4772 44 14 39.5228 14 34C14 28.4772 18.4772 24 24 24"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 24C4 18.4772 8.47715 14 14 14C19.5228 14 24 18.4772 24 24"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M44 24C44 29.5228 39.5228 34 34 34C28.4772 34 24 29.5228 24 24"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function Header() {
  const navItems = [
    { name: "SHOP", href: "/" },
    { name: "SKILLS", href: "/skills" },
    { name: "STORIES", href: "/stories" },
    { name: "ABOUT", href: "/about" },
    { name: "CONTACT US", href: "/contact" },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.topBar}>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={styles.mobileMenuButton}
              >
                <Menu />
                <span className={styles.srOnly}>Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent className={styles.sheetContent}>
              <nav className={styles.mobileNav}>
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={styles.mobileNavLink}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              <Separator className={styles.mobileNavSeparator} />
              <div className={styles.mobileActions}>
                <Button variant="ghost" className={styles.mobileActionButton}>
                  <Search className={styles.icon} /> Search
                </Button>
                <Button variant="ghost" className={styles.mobileActionButton}>
                  <Heart className={styles.icon} /> Wishlist
                </Button>
                <Button variant="ghost" className={styles.mobileActionButton}>
                  <ShoppingBag className={styles.icon} /> Cart
                </Button>
                <Button variant="ghost" className={styles.mobileActionButton}>
                  <User className={styles.icon} /> Account
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className={styles.mobileActionButton}
                    >
                      ENG <ChevronDown className={styles.iconSmall} />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    <DropdownMenuItem>ENG</DropdownMenuItem>
                    <DropdownMenuItem>FRA</DropdownMenuItem>
                    <DropdownMenuItem>ESP</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </SheetContent>
          </Sheet>

          <div className={styles.logoContainer}>
            <Link href="/" className={styles.logoLink}>
              <Logo />
              <span className={styles.logoText}>LOGO</span>
            </Link>
          </div>

          <div className={styles.mobileLogoContainer}>
            <Link href="/" className={styles.logoLink}>
              <span className={styles.mobileLogoText}>LOGO</span>
            </Link>
          </div>
          <div className={styles.desktopSpacer}></div>

          <div className={styles.desktopActions}>
            <Button variant="ghost" size="icon">
              <Search />
              <span className={styles.srOnly}>Search</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Heart />
              <span className={styles.srOnly}>Wishlist</span>
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingBag />
              <span className={styles.srOnly}>Cart</span>
            </Button>
            <Button variant="ghost" size="icon">
              <User />
              <span className={styles.srOnly}>Account</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className={styles.languageButton}
                >
                  ENG
                  <ChevronDown className={styles.iconSmall} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>ENG</DropdownMenuItem>
                <DropdownMenuItem>FRA</DropdownMenuItem>
                <DropdownMenuItem>ESP</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className={styles.mobileIconsPlaceholder}></div>
        </div>

        <Separator className={styles.desktopNavSeparator} />
        <nav className={styles.desktopNav}>
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={styles.desktopNavLink}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
      <Separator className={styles.mobileHeaderSeparator} />
    </header>
  );
}
