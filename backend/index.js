const app = require("./server");

//listener for the app
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("Server started at: " + PORT);
  
});

app.on('SIGINT', () => {
  console.info("Interrupted");
  process.exit(0);
})