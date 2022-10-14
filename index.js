const PORT = 8000;
const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");
const app = express();

const url = "https://www.dexerto.com/";

axios(url)
  .then((response) => {
    const html = response.data;
    const $ = cheerio.load(html);
    const emails = [];
    $("h3", html).each(function () {
      const span = $(this).text();
      emails.push({
        span,
      });
    });
    console.log(emails);
  })
  .catch((err) => console.log(err));

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));
