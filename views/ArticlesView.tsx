import Navbar from "@/shared/Navbar/Navbar";
import Footer from "@/shared/Footer/Footer";
import ArticleGrid from "@/components/articles/ArticleGrid/ArticleGrid";

export default function ArticlesView() {
  return (
    <>
      <Navbar />
      <main>
        <ArticleGrid />
      </main>
      <Footer />
    </>
  );
}
