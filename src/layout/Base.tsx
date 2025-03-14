import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function BaseLayout() {

  return (
    <>
      <Header />
      <main className="min-h-svh pt-18"> 
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </> 
  );
}