"use client";

export default function ApiDocsPage() {
  return (
    <iframe
      src="/docs/swagger-ui"
      title="API Documentation"
      style={{ width: "100%", height: "100vh", border: "none" }}
    />
  );
}
