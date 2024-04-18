const fs = require("fs");
const http = require("http");

const { ENDPOINT } = require("./constants");

const getHTML = (title, body) => `<html>
<head>
  <title>${title ?? "Hello from Server"}</title>
</head>
  <body>${body ?? "<h1>Hello</h1>"}</body>
</html>`;

const server = http.createServer((req, res) => {
  const { url, method } = req;
  if (url === ENDPOINT.HOME) {
    res.write(
      getHTML(
        "Enter message",
        `<form action="${ENDPOINT.MESSAGE}" method="POST"><input type="text" name="message" /><button type="submit">Submit</button></form>`
      )
    );

    return res.end();
  }

  if (url === ENDPOINT.MESSAGE && method === "POST") {
    const body = [];
    req.on("data", (chunk) => body.push(chunk));
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("message.txt", message);
    });
    res.statusCode = 302;
    res.setHeader("Location", ENDPOINT.HOME);
    return res.end();
  }

  res.write(getHTML());
  res.end();
});

server.listen(3006);
