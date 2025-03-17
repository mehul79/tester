import express from "express";
const app = express();
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/user", (req,res) => {
  const body = req.body;
  res.json({msg: "User created", body});
});


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});



export default app;