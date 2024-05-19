// import { Request,Response } from "express";
// import { DataSource } from "typeorm";
// import { AppDataSource } from "../dbConfig";


// const deleteUB = async(req:Request, res: Response)=>{
//     const {UB_ID} = req.params;
//     const userBookRepo =  AppDataSource.getRepository(userBook);
//      const userBook = await userBookRepository.findOneBy({ UBID });

//     await userBook.delete(UB_ID)
//     return res.status(204).json(userBookRepo)

// }


//   const updateUB = async(req:Request, res: Response)=>{
//     const {UB_ID} = req.params;
//     const updateData = req.body;
//     const userBookRepo =  AppDataSource.getRepository(userBook);
//      const userBook = await userBookRepository.findOneBy({ UBID });

//      
//    Object.assign(userBook, updateData);
//    await userBookRepository.save(userBook);
//    return userBook;
// }