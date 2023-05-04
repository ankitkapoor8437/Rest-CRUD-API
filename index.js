import express from "express";
import usersRoutes from "./routes/users.js";
import bodyParser from 'body-parser';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', usersRoutes)

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(PORT, () => {
    console.log(`Example app listening on port: http://localhost:${PORT}`)
  })