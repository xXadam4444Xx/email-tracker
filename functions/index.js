export async function onRequest(context) {
    const { request } = context;
    const url = new URL(request.url);
    const id = url.searchParams.get("id") || "unknown";
  
    // Send log to your Apps Script webhook
    const logUrl = "https://script.google.com/macros/s/AKfycbxynag-DhqvrnZ0n61NPCL2nzyMqVMIH7tZ6jyLC9Nt3P2JlY1nmh_zAwNBqks1OiaB/exec";
    await fetch(`${logUrl}?id=${encodeURIComponent(id)}&t=${Date.now()}`);
  
    // 1x1 transparent gif base64
    const gif = Uint8Array.from(
      atob("R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="),
      c => c.charCodeAt(0)
    );
  
    return new Response(gif, {
      headers: {
        "Content-Type": "image/gif",
        "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
      }
    });
  }