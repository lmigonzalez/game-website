import { FC, ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

type LayoutProps = {
  children: ReactNode;
  navBarBehavior: number;
};

const Layout = ({ children, navBarBehavior }: LayoutProps) => {
  return (
    <div className="flex flex-col pt-36">
      <Navbar behavior={navBarBehavior} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
