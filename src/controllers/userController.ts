import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { AppDataSource } from '../dbConfig';
import { User } from '../models/User';
import {config} from 'dotenv';

config();

const userRepository = AppDataSource.getRepository(User);

//SIGNUP NEW USER

export async function createUser(req: Request, res: Response): Promise<Response> {
  try {
    const { username, password } = req.body;
    if (!username || typeof username !== 'string' || !password || typeof password !== 'string') {
      return res.status(400).json({ message: 'Username and password are required and must be strings' });
    }

    const existingUser = await userRepository.findOne({ where: { username } });
    if (existingUser) {
      return res.status(409).json({ message: 'Username has already been taken' }); 
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User(username, hashedPassword);
    const newUser = await userRepository.save(user);

    return res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    return res.status(500).json({ message: 'Error creating user', error });
  }
}


//sign-in module

export async function signIn(req: Request, res: Response): Promise<Response> {
    try {
      const { username, password } = req.body;
      if (!username || typeof username !== 'string' || !password || typeof password !== 'string') {
        return res.status(400).json({ message: 'Username and password are required and must be strings' });
      }
      
      //whether check if user are in the table or not
      const user = await userRepository.findOne({ where: { username } });

      if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }
      
      /whether check if given password are matched with in the table or not/
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }
  
      / Generate JWT token/
      const token = jwt.sign({ userId: user.userid, username: user.username }, process.env.SECRET_KEY as string, { expiresIn: '1h' });
  
      return res.status(200).json({ token });
    } catch (error) {
      console.error('Error signing in:', error);
      return res.status(500).json({ message: 'Error signing in', error });
    }
  }
  
 