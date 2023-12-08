import Header from "@/app/client/Header";
import Main from "@/app/client/Main";
import Footer from "@/app/client/Footer";
import Link from "next/link";

const index = () => {
  return (
    <main>
      <Header/>
      <Main/>
      <Link href="/"/>
      <Footer/>
    </main>
  );
}

export default index;