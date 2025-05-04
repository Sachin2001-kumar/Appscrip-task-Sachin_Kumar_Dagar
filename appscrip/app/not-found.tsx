import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <AlertTriangle className={styles.icon} />
      <h1 className={styles.heading}>404 - Page Not Found</h1>
      <p className={styles.message}>
        Oops! The page you are looking for does not exist or may have been
        moved.
      </p>
      <Button asChild>
        <Link href="/">Go Back Home</Link>
      </Button>
    </div>
  );
}
