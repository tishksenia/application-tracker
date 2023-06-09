import { Inter } from "next/font/google";
import { Navigation } from "./navigation";
import { clsx } from "clsx";
import "app/globals.css";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={clsx(inter.className, "md:p-10 p-5")}>
      <Navigation />
      {children}
    </div>
  );
};

export { RootLayout };
