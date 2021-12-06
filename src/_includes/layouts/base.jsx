import Nav from "../components/nav.jsx";
import Footer from "../components/footer.jsx";
import ToTop from "../components/totop.jsx";

export const layout = "layouts/base.njk";

export default ({ title, children }) => (
  <>
    <Nav />
    <main>
      <h1>{title}</h1>
      {children}
    </main>
    <ToTop />
    <Footer />
  </>
);
