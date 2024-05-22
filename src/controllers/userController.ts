import { Request, Response } from "express";
import { AppDataSource } from "../dbConfig";
import { User } from "../models/userTable";
import { Book } from "../models/bookTable";
import { UserBook } from "../models/userBookTable";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';





export const signUp = async (req: Request, res: Response) => {
  try{
  const { username, password } = req.body;
  const userRepository = AppDataSource.getRepository(User);
  if (!username || typeof username !== 'string' || !password || typeof password !== 'string') {
    return res.status(400).json({ message: 'Username and password are required and must be strings' });
  }
  const existingUser = await userRepository.findOne({ where: { username } });

  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = userRepository.create({ username, password: hashedPassword });
  await userRepository.save(user);

  res.status(201).json({ message: 'User created' });
}catch (error) {
  console.error('Error creating user:', error);
  return res.status(500).json({ message: 'Error creating user', error });
}
};


export const signIn = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    if (
      !username ||
      typeof username !== "string" ||
      !password ||
      typeof password !== "string"
    ) {
      return res.status(400).json({
        message: "Username and password are required and must be strings",
      });
    }
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOne({ where: { username } });
    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user.id,role:user.role }, "SECRET_KEY", {
      expiresIn: "1h",
    });
    
    res.status(200).json({ message: `account sigin successfully   ${token} ` });
  } catch (error) {
    console.error("Error signing in:", error);
    return res.status(500).json({ message: "Error signing in", error });
  }
};

export const book = async (req: Request, res: Response) => {
  try {
    return res.status(200).json({ message: "protected data" });
  } catch (err) {
    return res.status(300).json({ message: "access denied" });
  }
};









export const viewBooks = async (req: Request, res: Response) => {
  try {
    const bookRepository = AppDataSource.getRepository(Book);
    const books = await bookRepository.find();
    res.status(200).json(books);
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({ message: "Books not found" });
  }
};





export const borrowBook = async (req: Request, res: Response) => {
  const { userId, bookId, startdate , enddate} = req.body;

  if (!userId || !bookId || !startdate || !enddate) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const userRepository = AppDataSource.getRepository(User);
    const bookRepository = AppDataSource.getRepository(Book);
    const userBookRepository = AppDataSource.getRepository(UserBook);

    const user = await userRepository.findOne(userId);
    const book = await bookRepository.findOne(bookId);

    if (!user || !book) {
      return res.status(400).json({ message: "Invalid user or book" });
    }

    const newUserBook = userBookRepository.create({ userId, bookId,startdate,  enddate });
    await userBookRepository.save(newUserBook);

    res.status(201).json({ message: "Book borrowed successfully" });
  } catch (error) {
    console.error("Error borrowing book:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};





export const viewBorrowedBooks = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;
    const userBookRepository = AppDataSource.getRepository(UserBook);
  const userBooks = await userBookRepository.find({ where: { userId: { ID: userId  } }, relations: ['book'] });

  res.status(201).json(userBooks);
  } catch (error) {
    console.error("Error borrowed books:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};