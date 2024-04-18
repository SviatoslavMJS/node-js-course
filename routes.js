const fs = require("fs");

const { getHTMLText } = require("./helpers");
const { ENDPOINT } = require("./constants");

const requestHandler = (req, res) => {
  const { url, method } = req;
  if (url === ENDPOINT.HOME) {
    res.write(
      getHTMLText(
        "Enter message",
        `<form action="${ENDPOINT.MESSAGE}" method="POST"><input type="text" name="message" /><button type="submit">Submit</button></form>`
      )
    );

    return res.end();
  }

  if (url === ENDPOINT.MESSAGE && method === "POST") {
    const body = [];
    req.on("data", (chunk) => body.push(chunk));
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", ENDPOINT.HOME);
        return res.end();
      });
    });
  }

  res.write(getHTMLText());
  res.end();
};

module.exports = { requestHandler };
