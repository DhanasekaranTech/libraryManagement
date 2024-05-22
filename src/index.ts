import express, { Application, Request, Response } from 'express';
import { checkConnection } from './dbConfig';
import { adminRoutes } from './routes/adminRoutes';

import * as dotenv from 'dotenv';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 2003;

app.use(express.json());

app.use('/admin', adminRoutes);


// Start the server and check the database connection
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  checkConnection();
});
