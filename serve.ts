Deno.serve(async (req) => {
  const url = new URL(req.url);
  let path = `./public${url.pathname}`;

  // Default to serving index.html if root is accessed
  if (url.pathname === "/") {
    path = "./public/index.html";
  }

  try {
    const file = await Deno.readFile(path);
    const ext = path.split(".").pop();

    const contentTypes: Record<string, string> = {
      html: "text/html",
      css: "text/css",
      js: "application/javascript",
      png: "image/png",
      jpg: "image/jpeg",
      jpeg: "image/jpeg",
      svg: "image/svg+xml",
    };

    const contentType = contentTypes[ext!] || "application/octet-stream";

    return new Response(file, { headers: { "content-type": contentType } });
  } catch {
    return new Response("404 Not Found", { status: 404 });
  }
});
