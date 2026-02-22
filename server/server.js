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

app.listen(3000, () => {
  console.log("The server is running on http://localhost:3000/");
});