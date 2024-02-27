"use client";

import Link from "next/link";

import { Logo } from "@/app/erc3643/components/logo";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const segments = pathname.split("/")[2];

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <nav
          className={cn("flex items-center space-x-4 lg:space-x-6", className)}
          {...props}
        >
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>
          <Link
            href="/erc3643/overview"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              segments === "overview" ? "text-foreground" : "text-foreground/60"
            )}
          >
            Overview
          </Link>
          {/* <Link
            href="/erc3643/overview"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              segments === "avalanche"
                ? "text-foreground"
                : "text-foreground/60"
            )}
          >
            Avalanche
          </Link>
          <Link
            href="/erc3643/overview"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              segments === "ethereum" ? "text-foreground" : "text-foreground/60"
            )}
          >
            Ethereum
          </Link>
          <Link
            href="/erc3643/overview"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              segments === "polygon" ? "text-foreground" : "text-foreground/60"
            )}
          >
            Polygon
          </Link> */}
        </nav>
      </div>
    </div>
  );
}
