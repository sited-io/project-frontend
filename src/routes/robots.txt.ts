import type { APIEvent } from "@solidjs/start/server";

export async function GET(event: APIEvent) {
  const domain = new URL(event.request.url).host.toString();
  const lines = [
    "User-agent: *",
    "Allow: /",
    `Sitemap: https://${domain}/sitemap.txt`,
  ];

  return new Response(lines.join("\n"), {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
