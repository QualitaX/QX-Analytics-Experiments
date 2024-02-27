import { MainNav } from "@/app/erc3643/components/main-nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "ERC-3643",
    template: "QX Analytics | ERC-3643 | %s",
  },
  description:
    "A dashboard tracking the adoption of ERC-4337 standard - Permissioned Tokens.",
  keywords: [
    "ERC3643",
    "ERC-3643",
    "ERC 3643",
    "permissioned tokens",
    "tokenization",
    "real-world assets",
    "rwa",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col">
      <MainNav />
      <div className="flex-1 space-y-4 p-8 pt-6">{children}</div>
    </div>
  );
}
