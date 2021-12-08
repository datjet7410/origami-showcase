const createClient = require("@supabase/supabase-js").createClient;
const Busboy = require("busboy");

function parseMultipartForm(event) {
  return new Promise((resolve) => {
    const fields = {};

    const busboy = new Busboy({
      headers: event.headers,
    });

    busboy.on(
      "file",
      (fieldname, filestream, filename, transferEncoding, mimeType) => {
        filestream.on("data", (data) => {
          fields[fieldname] = {
            filename,
            type: mimeType,
            content: data,
          };
        });
      }
    );

    busboy.on("field", (fieldName, value) => {
      fields[fieldName] = value;
    });

    busboy.on("finish", () => {
      resolve(fields);
    });

    busboy.write(event.body);
  });
}

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

exports.handler = async function (event, context) {
  switch (event.httpMethod) {
    case "POST": {
      const { image, ...fields } = await parseMultipartForm(event);
      const redirectUrl = "/thanks";

      await supabase
        .from("origami-register")
        .insert([fields])
        .catch((err) => {
          redirectUrl = "/error";
        });
      await supabase.storage
        .from("origami-register")
        .upload(image.filename, image.content)
        .catch((err) => {
          redirectUrl = "/error";
        });

      return {
        statusCode: 302,
        headers: {
          Location: redirectUrl,
          "Cache-Control": "no-cache",
        },
      };
    }
    default:
      return {
        statusCode: 500,
        body: "unrecognized HTTP Method, must be POST",
      };
  }
};
