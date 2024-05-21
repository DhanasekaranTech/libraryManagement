import { Request, Response } from 'express';
import { UserBook } from '../models/UserBook';
import { AppDataSource } from '../dbConfig';

export const getUserBooks = async (req: Request, res: Response) => {
  try {
    const userBookRepository = AppDataSource.getRepository(UserBook);
    const userBooks = await userBookRepository.find({ relations: ['user', 'book'] });
    res.json(userBooks);
  } catch (error) {
    console.error('Error fetching user books:', error);
    res.status(500).json({ message: 'Error fetching user books' });
  }
};

