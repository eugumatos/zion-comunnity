"use client"

import { ClerkProvider } from '@clerk/nextjs';
import { Toaster } from 'react-hot-toast';

import { DisclosureProvider } from "@/contexts/disclosure-context";
import { DecorativeElipses } from "../_components/DecorativeElipses";

import '@/styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider>
          <DisclosureProvider>
            <main className="relative overflow-hidden">
              <DecorativeElipses />
              {children}
            </main>
            <Toaster />
          </DisclosureProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
