"use client"

import { ClerkProvider } from '@clerk/nextjs';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Toaster } from 'react-hot-toast';

import { DisclosureProvider } from "@/contexts/disclosure-context";
import { DecorativeEllipses } from "@/ui/DecorativeEllipses";

import '@/styles/globals.css';

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider>
          <QueryClientProvider client={queryClient}>
            <DisclosureProvider>
              <main className="relative overflow-x-hidden">
                <DecorativeEllipses />
                {children}
              </main>
              <Toaster />
            </DisclosureProvider>
          </QueryClientProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}