Deno.serve(async (req) => {
  const file = await Deno.readFile("./public/index.html");
  let contentType;

  if (req.url.endsWith(".html")) contentType = "text/html";
  if (req.url.endsWith(".css")) contentType = "text/css";
  if (req.url.endsWith(".js")) contentType = "application/javascript";

  return new Response(file, { headers: { "content-type": contentType } });
});
