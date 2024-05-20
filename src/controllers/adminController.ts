import { Request, Response } from "express";
import { AppDataSource } from "../dbConfig";
import { userBook } from "../models/userBook";

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
    res.status(500).json({ message: "cannot delete data" });
    console.log(error);
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
      return res
        .status(400)
        .json({
          message:
            "Invalid update data. Ensure all fields are correctly formatted.",
        });
    }

    const userRepo = AppDataSource.getRepository(userBook);
    const userBook = await userRepo.findOneBy({ UB_ID });
    if (!userBook) {
      return res.status(404).json({ message: "User not found" });
    }
    Object.assign(userBook, update);
    await userRepo.save(userBook);
    return res.status(200).json({ message: "updated successfully " });
  } catch (error) {
    res.status(500).json({ message: "cannot update data" });
    console.log(error);
  }
};
