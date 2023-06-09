import { Inter } from "next/font/google";
import { Navigation } from "./navigation";
import { clsx } from "clsx";
import "app/globals.css";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center bg-slate-300 min-h-screen">
      <div className={clsx(inter.className, "md:p-10 p-5 container")}>
        <Navigation />
        <div className="bg-white p-10 rounded-md">{children}</div>
      </div>
    </div>
  );
};

export { RootLayout };
