const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="tr">
    <head>
      <meta charset="UTF-8">
      <title>Basit Web Sitesi</title>
    </head>
    <body>
      <h1>Node.js ile Basit Web Sitesi</h1>
      <p>Bu, Node.js kullanarak oluşturulmuş basit bir web sitesidir.</p>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Sunucu ${port} numaralı bağlantı noktasında çalışıyor.`);
});
