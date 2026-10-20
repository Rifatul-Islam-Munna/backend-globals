const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("OK");
    return;
  }
  res.writeHead(405, { "Content-Type": "text/plain", Allow: "GET" });
  res.end("Method Not Allowed");
});

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

// Shut down cleanly when Docker stops the container
process.on("SIGTERM", () => server.close(() => process.exit(0)));
