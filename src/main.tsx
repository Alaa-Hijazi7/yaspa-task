import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";

import { routes } from "./routes";
import { PaymentProvider } from "./contexts/payment-context";

const router = createBrowserRouter(routes);
const root = document.getElementById("root")!;

createRoot(root).render(
  <PaymentProvider>
    <RouterProvider router={router} />
  </PaymentProvider>
);
