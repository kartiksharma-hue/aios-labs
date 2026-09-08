import { NextRequest } from "next/server";

/**
 * Step 2 of the GitHub OAuth flow for the Decap CMS admin.
 * GitHub redirects here with a code; we exchange it for an access token and
 * hand it back to the Decap window via postMessage, in the exact format Decap
 * expects: "authorization:github:success:{...}".
 */
export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  const code = new URL(req.url).searchParams.get("code");
  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;
  const clientSecret = process.env.OAUTH_GITHUB_CLIENT_SECRET;

  let status: "success" | "error" = "error";
  let content: Record<string, unknown> = { message: "Missing configuration." };

  if (code && clientId && clientSecret) {
    try {
      const res = await fetch("https://github.com/login/oauth/access_token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          client_id: clientId,
          client_secret: clientSecret,
          code,
        }),
      });
      const data = (await res.json()) as { access_token?: string };
      if (data.access_token) {
        status = "success";
        content = { token: data.access_token, provider: "github" };
      } else {
        content = { message: "Token exchange failed." };
      }
    } catch {
      content = { message: "Network error during token exchange." };
    }
  }

  const payload = JSON.stringify(content);
  const html = `<!doctype html><html><body><script>
    (function () {
      function receiveMessage(e) {
        window.opener.postMessage(
          'authorization:github:${status}:${payload}',
          e.origin
        );
        window.removeEventListener('message', receiveMessage, false);
      }
      window.addEventListener('message', receiveMessage, false);
      window.opener.postMessage('authorizing:github', '*');
    })();
  </script></body></html>`;

  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
