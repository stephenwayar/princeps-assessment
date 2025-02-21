"use client"
import React from "react";
import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient()

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </MantineProvider>
  )
}