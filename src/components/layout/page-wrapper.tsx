import Navbar from "./navbar";
import { Outlet } from "react-router";

export default function PageWrapper() {
  return (
    <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col">
      <Navbar />
      <Outlet />
    </div>
  );
}
