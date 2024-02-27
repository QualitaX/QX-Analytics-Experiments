"use client";

import Image from "next/image";

export function Logo() {
  return (
    <Image
      src="/erc3643/logo.png"
      alt="ERC-3643"
      width={150}
      height={47}
      className="relative"
    />
  );
}
