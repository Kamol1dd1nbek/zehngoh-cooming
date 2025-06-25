const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Static fayllarni public papkadan xizmat qilish
app.use(express.static(path.join(__dirname, "public")));

// Serverni ishga tushirish
app.listen(PORT, () => {
  console.log(`✅ Zehngoh ishga tushdi: http://localhost:${PORT}`);
});
