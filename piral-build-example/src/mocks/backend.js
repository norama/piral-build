const https = require("https");

const mock = true;
const headers = {
  "content-type": "application/json",
};

const PILETS = [
  {
    name: "pilet-build-example",
    version: "1.0.0",
    description: "",
    author: {
      name: "",
      email: "",
    },
    dependencies: {},
    requireRef: "rolluppr_pilet-build-example",
    spec: "v2",
    link: "http://localhost:5001/$pilet-api/0/index.js",
  },
  {
    name: "pilet-build-sample",
    version: "1.0.0",
    description: "",
    author: {
      name: "",
      email: "",
    },
    dependencies: {},
    requireRef: "rolluppr_pilet-build-sample",
    spec: "v2",
    link: "http://localhost:5002/$pilet-api/0/index.js",
  },
];

module.exports = function (_, req, res) {
  if (req.url === "/api/posts" && req.method === "GET") {
    if (mock) {
      return res({
        headers,
        content: JSON.stringify([
          {
            userId: 1,
            id: 1,
            title: "First title",
            body: "First body",
          },
        ]),
      });
    } else {
      return new Promise((resolve, reject) => {
        const fetch = https.get(
          "https://jsonplaceholder.typicode.com/posts",
          (response) => {
            const parts = [];

            response.on("data", (chunk) => parts.push(chunk));

            response.on("end", () =>
              resolve(res({ headers, content: Buffer.concat(parts) }))
            );
          }
        );

        fetch.on("error", (err) => reject(err));
      });
    }
  }

  if (req.url === "/api/pilets" && req.method === "GET") {
    if (mock) {
      return res({
        headers,
        content: JSON.stringify(PILETS),
      });
    }
  }
};
