import { lazy, Suspense } from "react";
import type { RouteObject } from "react-router";
import PageWrapper from "@/components/layout/page-wrapper";

const BankSelector = lazy(() => import("@/pages/BankSelector"));
const PaymentPreview = lazy(() => import("@/pages/PaymentPreview"));

export const routes: RouteObject[] = [
  {
    element: <PageWrapper />,
    children: [
      {
        path: "/",
        element: (
          <Suspense
            fallback={
              <div className="flex items-center justify-center min-h-screen">
                Loading...
              </div>
            }
          >
            <BankSelector />
          </Suspense>
        ),
      },
      {
        path: "/preview",
        element: (
          <Suspense
            fallback={
              <div className="flex items-center justify-center min-h-screen">
                Loading...
              </div>
            }
          >
            <PaymentPreview />
          </Suspense>
        ),
      },
    ],
  },
];
