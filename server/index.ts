import Express from "express";
import router from "./routes";
import { fileURLToPath } from "node:url";
import path from "node:path";

const cors = require('cors');

const app = Express();
app.use(Express.json());
const PORT = 3010;

// @ts-ignore
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(cors({
  origin: 'http://localhost:5173', // autorise uniquement ton front local
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: false, // si tu utilises des cookies
}));


app.use(Express.static(path.join(__dirname, "public")));

app.use(Express.urlencoded({ extended: true }));

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Ctrl + clic =>  http://localhost:${PORT}`);
});


