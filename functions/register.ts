import { serve } from "https://deno.land/std@0.114.0/http/server.ts";
import { multiParser } from "https://deno.land/x/multiparser@0.114.0/mod.ts";
import { createClient } from "https://deno.land/x/supabase@1.1.0/mod.ts";

const SUPABASE_URL = "https://jlusiyzsrvnjsqqfaxyt.supabase.co"; //Deno.env.get("SUPABASE_URL");
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjk2Mjc2NywiZXhwIjoxOTUyNTM4NzY3fQ.oNbi1t8oY_BwyFJVyDk2eCvyM6a-E-6mhuyeBU8Ingk"; //Deno.env.get("SUPABASE_KEY");

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const html = `
<!DOCTYPE html>
<html>
    <head>
    <meta http-equiv="Refresh" content="0; url='/thanks'" />
    </head>
    <body></body>
</html>
`;

async function handler(req: Request): Promise<Response> {
  switch (req.method) {
    case "POST": {
      const { fields, files } = await multiParser(req);

      const { data, error } = await supabase
        .from("origami-register")
        .insert([fields]);

      for (const file in files) {
        const { filename, content } = files[file];
        const { data, error } = await supabase.storage
          .from("origami-register")
          .upload(filename, content);
      }

      return new Response(html, {
        headers: {
          "Content-Type": "text/html; charset=utf-8",
        },
      });
    }

    default:
      return new Response("Invalid method", { status: 405 });
  }
}

serve(handler);
