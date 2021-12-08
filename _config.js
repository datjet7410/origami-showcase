import lume from "https:/deno.land/x/lume/mod.ts";
import slugify_urls from "https:/deno.land/x/lume/plugins/slugify_urls.ts";
import jsx from "https:/deno.land/x/lume/plugins/jsx.ts";
import svgo from "https:/deno.land/x/lume/plugins/svgo.ts";
import postcss from "https:/deno.land/x/lume/plugins/postcss.ts";
import terser from "https:/deno.land/x/lume/plugins/terser.ts";

const site = lume({
  src: "src",
  location: new URL("https://1911019.netlify.app"),
});

site.use(jsx());
site.use(slugify_urls());
site.use(svgo());
site.use(postcss());
site.use(terser());
site.copy("images");

export default site;
