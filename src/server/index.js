import "dotenv/config";
import "isomorphic-fetch";
import express from "express";
import path from "path";
import compression from "compression";
import helmet from "helmet";
import { api } from "./routes";
// import enforce from "express-sslify";

// the reactified route-handler from the `app`
import reactHandler from "../app/_server.js";

// create express app...
export const app = express();

// middleware
// DISABLE THIS LINE TO RUN LOCALLY - TODO FIGURE OUT HOW TO AUTOMATE THIS
// app.use(enforce.HTTPS({ trustProtoHeader: true }));
app.use(compression());
app.use(helmet());
app.use("/static", express.static(path.join(__dirname, "static")));

app.use("/api", api);

// handle routes via react...
app.get("*", reactHandler);

// handle any errors
app.use((err, req, res, next) => {
  // eslint-disable-line
  res.status(err.status || 500).send("Application Error");
  console.error(err.status === 404 ? `404 ${req.url}` : err.stack); // eslint-disable-line
});

const { PORT } = process.env;

app.listen(PORT, () => console.log("Running on port " + PORT)); // eslint-disable-line
