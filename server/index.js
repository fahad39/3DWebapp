import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import dalleRouters from "./routes/dalle.routes.js";
import stripeRouters from "./routes/stripe.routes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/dalle", dalleRouters);
app.use("/api/v1/stripe", stripeRouters);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from 3D Tee Crafter" });
});

app.listen(8080, () => console.log("server has started on port 8080"));
