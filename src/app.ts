import express, { json } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import 'express-async-errors'

import router from "./routes/index";
import errorHandler from "./middlewares/error.handler.middleware";

dotenv.config();

const app = express();

app.use(cors());
app.use(json());
app.use(router);
app.use(errorHandler); 


export default app;