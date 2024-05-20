import { Request, Response } from "express";
import { AppDataSource } from "../dbConfig";
import {userBook} from "../models/userBook";


//delete data in userBook table
export const deleteUB = async (req: Request, res: Response) => {
  try {
    const UB_ID = parseInt(req.params.id);

    const userBookRepo = AppDataSource.getRepository(userBook);
    const userBook = await userBookRepo.findOneBy({ UB_ID });
    if (!userBook) {
      return res.status(404).json({ message: "Book not found" });
    }
    await userBookRepo
      .createQueryBuilder()
      .delete()
      .from(userBook)
      .where({ UB_ID })
      .execute();
    return res.status(200).json({ message: "Book deleted" });
  } catch (error) {
    throw new Error("unable to delete");
  }
};


//update data in userBook table
export const updateUB = async (req: Request, res: Response) => {
  try {
    const UB_ID = parseInt(req.params.id);
    const update = req.body;
    const userRepo = AppDataSource.getRepository(userBook);
    const userBook = await userRepo.findOneBy({ UB_ID });
    if (!userBook) {
      return res.status(404).json({ message: "User not found" });
    }
    Object.assign(userBook, update);
    await userRepo.save(userBook);
    return res.status(200).json({ message: "updated successfully " });
  } catch (error) {
    throw new Error("can update user");
  }
};
