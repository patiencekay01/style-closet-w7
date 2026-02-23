import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";

const app = express();

dotenv.config();

app.use(express.json());

app.use(cors());

const db = new pg.Pool({
  connectionString: process.env.DB_CONN,
});

app.get("/", (req, res) => {
res.status(200).json({message: "Server connected"});
});

app.get("/feed", async (req, res) => {
  try {
    const feed = (await db.query("SELECT * FROM style_posts")).rows;
    res.json(feed);
  } catch (error) {
    console.error(error);
    res.send("Something went wrong");
  }
}); 

app.post("/posts", async (req, res) => {
  try {
    const { username, image_url, caption } = req.body

    const result = await db.query(
      "INSERT INTO style_posts (username, image_url, caption) VALUES ($1, $2, $3) RETURNING *",
      [username, image_url, caption]
    )

    res.status(201).json(result.rows[0])
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Something went wrong" })
  }
})

app.listen(3000, () => {
  console.log("The server is running on http://localhost:3000/");
});