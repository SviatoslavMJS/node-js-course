const getHTMLText = (title, body) => `<html>
<head>
  <title>${title ?? "Hello from Server"}</title>
</head>
  <body>${body ?? "<h1>Hello</h1>"}</body>
</html>`;

module.exports = { getHTMLText };
