import Nav from "../components/nav.jsx";
import Footer from "../components/footer.jsx";

export default ({ title, children }) => (
  <>
    <html lang="vi-vn">
      <head>
        <meta charset="UTF-8" />
        <title>Triễn lãm origami - {title}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/styles.css" />
        <link
          rel="shortcut icon"
          href="/images/favicon.svg"
          type="image/svg+xml"
        />
      </head>
      <body>
        <Nav />
        <main>
          <h1>{title}</h1>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  </>
);
