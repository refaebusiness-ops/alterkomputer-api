import express from "express";
import cors from "cors";
import { pool } from "./db.js";

const app = express();
app.use(cors());
app.use(express.json());

// Tes koneksi ke database
app.get("/testdb", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ success: true, time: result.rows[0].now });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Database error" });
  }
});

// Tes server
app.get("/", (req, res) => {
  res.send("Alterkomputer API aktif 🔥");
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server jalan di port ${process.env.PORT || 3000}`);
});
