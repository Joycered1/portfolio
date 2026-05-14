import Navbar from "@/shared/Navbar/Navbar";
import Footer from "@/shared/Footer/Footer";
import NewsGrid from "@/components/news/NewsGrid/NewsGrid";

export default function NewsView() {
  return (
    <>
      <Navbar />
      <main>
        <NewsGrid />
      </main>
      <Footer />
    </>
  );
}
