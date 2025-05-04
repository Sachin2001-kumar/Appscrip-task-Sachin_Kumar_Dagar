import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin } from "lucide-react";
import styles from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faApplePay,
  faCcAmex,
  faCcMastercard,
  faCcPaypal,
  faGooglePay,
} from "@fortawesome/free-brands-svg-icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.newsletterColumn}>
            <h3 className={styles.footerHeading}>Be the first to know</h3>
            <p className={styles.footerTextMuted}>
              Sign up for updates from mettā muse.
            </p>
            <div className={styles.subscribeInputGroup}>
              <Input
                type="email"
                placeholder="Enter your e-mail..."
                className={styles.subscribeInput}
                aria-label="Email for newsletter"
              />
              <Button variant="outline" className={styles.subscribeButton}>
                Subscribe
              </Button>
            </div>
          </div>
          <div className={styles.spacerColumn}></div>
          <div className={styles.contactCurrencyColumn}>
            <div className={styles.contactCurrencyContent}>
              <h3 className={styles.footerHeading}>Contact Us</h3>
              <p className={styles.footerTextMutedSmall}>+44 221 133 5360</p>
              <p className={styles.footerTextMuted}>
                customercare@mettamuse.com
              </p>

              <h3
                className={`${styles.footerHeading} ${styles.currencyHeading}`}
              >
                Currency
              </h3>
              <div className={styles.currencyDisplay}>
                <span role="img" aria-label="US Flag">
                  🇺🇸
                </span>
                <span className={styles.currencyText}>+ USD</span>
              </div>
              <p className={styles.transactionNote}>
                Transactions will be completed in Euros and a currency reference
                is available on hover.
              </p>
            </div>
          </div>
        </div>

        <Separator className={styles.footerSeparator} />
        <div className={styles.bottomSection}>
          <div>
            <h3 className={styles.footerHeading}>mettā muse</h3>
            <ul className={styles.linkList}>
              <li>
                <Link href="/about" className={styles.footerLink}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/stories" className={styles.footerLink}>
                  Stories
                </Link>
              </li>
              <li>
                <Link href="/artisans" className={styles.footerLink}>
                  Artisans
                </Link>
              </li>
              <li>
                <Link href="/boutiques" className={styles.footerLink}>
                  Boutiques
                </Link>
              </li>
              <li>
                <Link href="/contact" className={styles.footerLink}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/eu-compliance" className={styles.footerLink}>
                  EU Compliances Docs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className={styles.footerHeading}>Quick Links</h3>
            <ul className={styles.linkList}>
              <li>
                <Link href="/orders-shipping" className={styles.footerLink}>
                  Orders & Shipping
                </Link>
              </li>
              <li>
                <Link href="/join-seller" className={styles.footerLink}>
                  Join/Login as a Seller
                </Link>
              </li>
              <li>
                <Link href="/payment-pricing" className={styles.footerLink}>
                  Payment & Pricing
                </Link>
              </li>
              <li>
                <Link href="/returns-refunds" className={styles.footerLink}>
                  Return & Refunds
                </Link>
              </li>
              <li>
                <Link href="/faqs" className={styles.footerLink}>
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/privacy" className={styles.footerLink}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className={styles.footerLink}>
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.followAcceptsColumn}>
            <div className={styles.followUsSection}>
              <h3 className={styles.footerHeading}>Follow Us</h3>
              <div className={styles.socialIcons}>
                <Link
                  href="#"
                  aria-label="Instagram"
                  className={styles.socialIconLink}
                >
                  <Instagram className={styles.socialIcon} />
                </Link>
                <Link
                  href="#"
                  aria-label="LinkedIn"
                  className={styles.socialIconLink}
                >
                  <Linkedin className={styles.socialIcon} />
                </Link>
              </div>
            </div>
            <div className={styles.acceptsSection}>
              <h3 className={styles.footerHeading}>mettā muse Accepts</h3>
              <div className={styles.paymentIcons}>
                <FontAwesomeIcon
                  icon={faGooglePay}
                  size="2x"
                  className={styles.paymentIcon}
                />
                <FontAwesomeIcon
                  icon={faCcMastercard}
                  size="2x"
                  className={styles.paymentIcon}
                />
                <FontAwesomeIcon
                  icon={faCcPaypal}
                  size="2x"
                  className={styles.paymentIcon}
                />
                <FontAwesomeIcon
                  icon={faCcAmex}
                  size="2x"
                  className={styles.paymentIcon}
                />
                <FontAwesomeIcon
                  icon={faApplePay}
                  size="2x"
                  className={styles.paymentIcon}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          Copyright © {currentYear} metta muse. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
