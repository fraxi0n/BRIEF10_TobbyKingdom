import Express from "express";
import router from "./routes";
import { fileURLToPath } from "node:url";
import path from "node:path";
import dotenv from "dotenv";
dotenv.config()

const cors = require('cors');

const app = Express();
app.use(Express.json());
const PORT = 3010;

// @ts-ignore
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(cors({
  origin: process.env.CLIENT_URL, // autorise uniquement ton front mis dans le fichier .env
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: false, // si tu utilises des cookies
}));


app.use(Express.static(path.join(__dirname, "public")));

app.use(Express.urlencoded({ extended: true }));

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Ctrl + clic =>  http://localhost:${PORT}`);
});


