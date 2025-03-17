import express from "express";
const app = express();
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/user", (req,res) => {
  const body = req.body;
  res.json({msg: "aba jaba", result: body}).status(203)
});

app.get("/user", (req,res) => {
  res.json({msg: "aba jaba"}).status(200)
});


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});



export default app;