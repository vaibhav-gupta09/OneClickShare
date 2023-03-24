import express from 'express'
import router from './routes/routes.js';
import cors from 'cors'
const app = express();
import DBConnection from './database/db.js';

app.use(cors());
app.use('/', router);

const PORT = 8080;

DBConnection();
app.listen(PORT, ()=> console.log(`server is running at port = ${PORT}`));

