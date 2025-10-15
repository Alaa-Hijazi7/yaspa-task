// src/routes/index.tsx
import type { RouteObject } from "react-router";
import BankSelector from "@/pages/BankSelector";
import PaymentPreview from "@/pages/PaymentPreview";
import PageWrapper from "@/components/layout/page-wrapper";

export const routes: RouteObject[] = [
  {
    element: <PageWrapper />,
    children: [
      { path: "/", element: <BankSelector /> },
      { path: "/preview", element: <PaymentPreview /> },
    ],
  },
];
