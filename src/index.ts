import express, { Application, Request, Response } from 'express';
import { checkConnection } from './dbConfig';
import { adminRoutes } from './routes/adminRoutes';
import { authMiddleware } from './middleware/authMiddleware';
import { adminMiddleware } from './middleware/adminMiddleware';

import * as dotenv from 'dotenv';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 2003;

app.use(express.json());

// Mounting the admin routes
app.use('/admin', adminRoutes);

// Test route for verifying JWT and admin middleware
app.get('/admin/test', authMiddleware, adminMiddleware, (req: Request, res: Response) => {
  res.json({ message: 'Welcome, admin!' });
});

// Start the server and check the database connection
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  checkConnection();
});
