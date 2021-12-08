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

function uploadDataToSupabase(formFields) {
  let { image, ...fields } = formFields;
  const { data, error } = await supabase
    .from("origami-register")
    .insert([fields]);
  console.log(data, error);

  const { data, error } = await supabase.storage
    .from("origami-register")
    .upload(image.filename, image.content);
  console.log(data, error);
}

exports.handler = async function (event, context) {
  switch (event.httpMethod) {
    case "POST": {
      const formFields = await parseMultipartForm(event);
      const redirectUrl = "/thanks";

      await uploadDataToSupabase(formFields);

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
