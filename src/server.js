require("dotenv").config()
const app = require("./app")
const connectDB = require("./config/db")

connectDB()

const PORT = process.env.PORT || 5050
// app.listen(PORT, ()=>{
//     console.log("App is running")
// })

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
