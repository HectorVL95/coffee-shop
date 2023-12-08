import Header from "@/app/client/Header";
import Footer from "@/app/client/Footer";
import Menu from "@/app/client/Menu";
import Link from "next/link";

const menu = () => {
  return (
    <main>
      <Header/>
      <Menu/>
      <Link href="/menu"/>
      <Footer/>
    </main>
  );
}

export default menu;