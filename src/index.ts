<<<<<<< HEAD
import express, { Application, Request, Response } from 'express';
import { checkConnection } from './dbConfig';
import { adminRoutes } from './routes/adminRoutes';
import { authMiddleware } from './middleware/authMiddleware';
import { adminMiddleware } from './middleware/adminMiddleware';

import * as dotenv from 'dotenv';
=======
import express from "express";
import { Application, Request, Response } from "express";
import { AppDataSource, checkConnection } from "./dbConfig";

import * as dotenv from "dotenv";
>>>>>>> cbd8c70cc87c31b2625399501dc66adbf0c67a92

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 2003;

app.use(express.json());
<<<<<<< HEAD
=======
//app.use("/user", userRoutes);

>>>>>>> cbd8c70cc87c31b2625399501dc66adbf0c67a92

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
