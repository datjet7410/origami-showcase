const { SUPABASE_URL, SUPABASE_KEY } = process.env;

const { createClient } = require("@supabase/supabase-js");
const Busboy = require("busboy");

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

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

exports.handler = async function (event, context) {
  switch (event.httpMethod) {
    case "POST": {
      const { image, ...fields } = await parseMultipartForm(event);
      const redirectUrl = "/thanks";
      
      const { data: fieldsData, fieldsError } = await supabase
        .from("origami-register")
        .insert([fields]);
      console.log(fieldsData, fieldsError);

      const { data: imageData, error: imageError } = await supabase.storage
        .from("origami-register")
        .upload(image.filename, image.content);
      console.log(imageData, imageError);

      return {
        statusCode: 200,
        headers: {
          "Content-Type": "text/html; charset=utf-8",
        },
        body: `
          <!DOCTYPE html>
          <html>
              <head>
              <meta http-equiv="Refresh" content="0; url='${redirectUrl}'" />
              </head>
              <body></body>
          </html>
          `,
      };
    }
    default:
      return {
        statusCode: 500,
        body: "unrecognized HTTP Method, must be POST",
      };
  }
};
