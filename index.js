import express from "express";
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/user", (req,res) => {
  const body = req.body;
  res.status(203).json({msg: "aba jaba", result: body})
});

app.get("/user", (req,res) => {
  res.status(200).json({msg: "dfsfdsfsd"})
});



app.listen(3000, () => {
  console.log("Server is running on port 3000");
});



export default app;