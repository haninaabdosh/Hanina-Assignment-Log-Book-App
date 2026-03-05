export async function GET() {
  const html = `
<!DOCTYPE html>
<html><head>
  <title>Hanina API Docs</title>
  <link rel="stylesheet" href="https://unpkg.com/swagger-ui-dist@5/swagger-ui.css"/>
</head><body>
  <div id="swagger-ui"></div>
  <script src="https://unpkg.com/swagger-ui-dist@5/swagger-ui-bundle.js"></script>
  <script>
    window.onload = () => SwaggerUIBundle({
      url: window.location.origin + "/api/docs/openapi",
      dom_id: "#swagger-ui",
      presets: [SwaggerUIBundle.presets.apis, SwaggerUIBundle.SwaggerUIStandalonePreset],
      deepLinking: true,
    });
  </script>
</body></html>`;
  return new Response(html, { headers: { "Content-Type": "text/html" } });
}
