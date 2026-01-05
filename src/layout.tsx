import { Outlet, useLocation } from "react-router";
import NavigationBar from "@/components/NavigationBar";
import { motion } from "framer-motion";

export default function Layout() {
  const location = useLocation();
  const hideNav =
    location.pathname === "/sign-in" ||
    location.pathname === "/sign-up" ||
    location.pathname === "/search" ||
    location.pathname === "/card-detail";

  return (
    <>
      {!hideNav && <NavigationBar />}

      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.3, ease: [0, 0, 0.58, 1] }
        }}
        exit={{
          opacity: 0,
          y: -10,
          transition: { duration: 0.2, ease: [0.42, 0, 1, 1] }
        }}
        // transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <Outlet />
      </motion.div>
    </>
  );
}
