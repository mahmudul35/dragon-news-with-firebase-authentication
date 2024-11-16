import FindUs from "../components/FindUs";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/LayoutComponent/LeftNavbar";
import RightNavbar from "../components/LayoutComponent/RightNavbar";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header />
        <section className="w-11/12 mx-auto">
          <LatestNews />
        </section>
      </header>
      <nav className="w-11/12 mx-auto py-4">
        <Navbar />
      </nav>
      <main className="w-11/12 mx-auto grid grid-cols-12 pt-5">
        <aside className="left col-span-3">
          <LeftNavbar />
        </aside>
        <section className="col-span-6">main content</section>
        <aside className="col-span-3">
          <RightNavbar />
          <FindUs />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
