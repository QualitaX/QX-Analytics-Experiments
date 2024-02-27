import { ThemeProvider } from "@/components/theme-provider";
import { Toaster as Sonner } from "@/components/widgets/sonner";
import { Toaster } from "@/components/widgets/toaster";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "QX Analytics | %s",
    default: "QX Analytics",
  },
  description: "QualitaX blockchain analytics research",
  authors: {
    name: "QualitaX",
    url: "https://www.qualitax.io",
  },
  creator: "QualitaX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {/* 
              TODO: Create site header at root conponents for root index page
              <SiteHeader /> 
              */}
          <main>{children}</main>
          {/* 
              TODO: Create site footer at root conponents for root index page
              <SiteFooter /> 
              */}

          <Toaster />
          <Sonner />
        </ThemeProvider>
      </body>
    </html>
  );
}
