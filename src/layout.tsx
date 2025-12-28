import { Outlet, useLocation } from "react-router";
import NavigationBar from "@/components/NavigationBar";

export default function Layout() {
  const location = useLocation();
  const hideNav = location.pathname === "/sign-in" || location.pathname === "/sign-up";

  return (
    <>
      {!hideNav && <NavigationBar />}
      <Outlet />
    </>
  );
}
