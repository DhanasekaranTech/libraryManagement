import { Request, Response } from "express";
import { AppDataSource } from "../dbConfig";
import { book } from "../models/book";
const bookRepository = AppDataSource.getRepository(book);
if (
  typeof bookId === "number" &&
  typeof bookName === "string" 
  
) {
  return true;
}
return false;
};
const bookRepository = AppDataSource.getRepository(book);
export const get= async (req: Request, res: Response) => {
  try {
    const books = await bookRepository.find();
    console.log("showed all book");
    return res.json(books);
  } catch (error) {
    console.log("can not show");
    return res.status(500).json({ error: "Internal Server Error" });
  }
};


// Route to add a new book
export const post= async (req: Request, res: Response) => {
  try {
    const newBook = bookRepository.create(req.body); 
    const result = await bookRepository.save(newBook);
    console.log("Record added successfully");
    return res.status(201).json({ status: true, message: 'Record added successfully', result });
  } catch (error) {
    console.error('Error while adding book:', error);
    return res.status(500).json({ status: false, message: 'Failed to add record', error });
  }
};

  // Route to get a book by ID
  export const del =async (req: Request, res: Response) => {
    try {
      const bookId = parseInt(req.params.id);
      const book = await bookRepository.findOneBy({ bookId }); 
      if (!book) {
        return res.status(404).json({ status: false, message: 'Book not found' });
      }
      await bookRepository.delete(bookId);
      console.log("Record deleted successfully");
      return res.status(200).json({ status: true, message: 'Record deleted successfully' });
    } catch (error) {
      console.error('Error while deleting book:', error);
      return res.status(500).json({ status: false, message: 'Failed to delete record', error });
    }
  };
  
  