import { Request, Response } from 'express';
import { AppDataSource } from "../dbConfig";
import { User } from '../entity/User';


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

// check whether entered datum are valid or not
const validateData = (data: any): boolean => {
  const { UB_ID, bookId, bookName, userId, userName, startdate, enddate } =
    data;

  if (
    typeof UB_ID === "number" &&
    typeof bookId === "number" &&
    typeof bookName === "string" &&
    typeof userId === "number" &&
    typeof userName === "string" &&
    new Date(startdate).toString() !== "Invalid Date" &&
    new Date(enddate).toString() !== "Invalid Date"
  ) {
    return true;
  }
  return false;
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
