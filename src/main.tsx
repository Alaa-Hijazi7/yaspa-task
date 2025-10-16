import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/error-fallback";

import "./index.css";

import { routes } from "./routes";
import { PaymentProvider } from "./contexts/payment-context";

const router = createBrowserRouter(routes);
const root = document.getElementById("root")!;

createRoot(root).render(
  <ErrorBoundary
    FallbackComponent={ErrorFallback}
    onReset={() => {
      window.location.reload();
    }}
  >
    <PaymentProvider>
      <RouterProvider router={router} />
    </PaymentProvider>
  </ErrorBoundary>
);
