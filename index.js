import express from "express";
import renderPage from "./server/render-page.js";
import bodyParser from "body-parser";

const app = express();
const jsonParser = bodyParser.json();

app.get("/", (req, res) => {
  res.header("Content-Type", "text/html");
  res.end(`
    <div id="app">${renderPage()}</div>
    <script src="/bundle.js" async></script>
  `);
});

app.use(express.static("public"));

app.listen(3000);
