import { Request, Response } from 'express';
import { AppDataSource } from "../dbConfig";
import { User } from '../model/User';
import { userBook } from "../models/userBook";
import { book } from "../models/book";
import { validateData } from "./ValidateData"


//Get All data from userBook table

export const getUserBooks = async (req: Request, res: Response) => {
  try {
    const userBookRepo = AppDataSource.getRepository(User);
    const userBooks = await userBookRepo.find();
    return res.status(200).json(userBooks);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Cannot retrieve data" });
  }
};


// Route to show book
export const showbook = async (req: Request, res: Response) => {
  const bookRepository = AppDataSource.getRepository(book);
  try {
    const books = await bookRepository.find();
    console.log("showed all book");
    return res.json(books);
  } catch (error) {
    console.error("Error to add book", error);
    return res.status(500).json({ status: 500 , message: "Internal Server Error" });
  }
};

// Route to add a new book
export const addnewbook  = async (req: Request, res: Response) => {
  const bookRepository = AppDataSource.getRepository(book);
  try {
    const { bookName } = req.body;
    const newBook = bookRepository.create(req.body); 
    const result = await bookRepository.save(newBook);
    console.log("Record added successfully");
    return res.status(201).json({ status: 201, message: 'Record added successfully', });
  } catch (error) {
    console.error('Error while adding book:', error);
    return res.status(500).json({ status: 500, message: 'Failed to add record', });
  }
};

  // Route to get a book by ID
  export const deletebook = async (req: Request, res: Response) => {
    const bookRepository = AppDataSource.getRepository(book);
    try {
      const bookId = parseInt(req.params.id);
      const book = await bookRepository.findOneBy({ bookId }); 
      if (!book) {
        return res.status(404).json({ status: 404, message: 'Book not found' });
      }
      await bookRepository.delete(bookId);
      console.log("Record deleted successfully");
      return res.status(200).json({ status: 200, message: 'Record deleted successfully' });
    } catch (error) {
      console.error('Error while deleting book:', error);
      return res.status(500).json({ status: 500, message: 'Failed to delete record', });
    }
  };
//delete data in userBook table
export const deleteUB = async (req: Request, res: Response) => {
  try {
    const UB_ID = parseInt(req.params.id);
    if (isNaN(UB_ID)) {
      return res
        .status(400)
        .json({ message: "Invalid UB_ID. It must be an integer." });
    }
    const userBookRepo = AppDataSource.getRepository(User);
    const userBook = await userBookRepo.findOneBy({ id: UB_ID });
    if (!userBook) {
      return res.status(404).json({ message: "Book not found" });
    }
    await userBookRepo
      .createQueryBuilder()
      .delete()
      .from(User)
      .where({ id: UB_ID })
      .execute();
    return res.status(200).json({ message: "Book deleted" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "cannot delete data" });
  }
};

//update data in userBook table
export const updateUB = async (req: Request, res: Response) => {
  try {
    const UB_ID = parseInt(req.params.id);
    const update = req.body;
    if (isNaN(UB_ID)) {
      return res
        .status(400)
        .json({ message: "Invalid UB_ID. It must be an integer." });
    }
    if (!validateData(update)) {
      return res.status(400).json({
        message:
          "Invalid update data. Ensure all fields are correctly formatted.",
      });
    }

    const userRepo = AppDataSource.getRepository(User);
    const userBook = await userRepo.findOneBy({ id: UB_ID });
    if (!userBook) {
      return res.status(404).json({ message: "User not found" });
    }
    Object.assign(userBook, update);
    await userRepo.save(userBook);
    return res.status(200).json({ message: "updated successfully " });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "cannot update data" });
  }
};
