import { Product, User } from "./models";
import { connectToDB } from "./utils";


export const fetchUsers = async (q, page) => {
  
    const regex = new RegExp(q, "i"); // case insensitive
    const ITEM_PER_PAGE = 2; //TODO: increase if you need to show more users per page if you have many users

    try {
      await connectToDB();
      const count = await User.find({username:{ $regex: regex }}).count(); // count all users to use in pagination
      const users = await User.find({username:{ $regex: regex }}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1)); // to skip the first 2 users in page 2
      return {count, users};
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch users!");
    }
  };


  export const fetchProducts = async (q, page) => {
  
    const regex = new RegExp(q, "i"); // case insensitive
    const ITEM_PER_PAGE = 2; //TODO: increase if you need to show more users per page if you have many users

    try {
      await connectToDB();
      const count = await Product.find({title:{ $regex: regex }}).count(); // count all users to use in pagination
      const products = await Product.find({title:{ $regex: regex }}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1)); // to skip the first 2 users in page 2
      return {count, products};
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch users!");
    }
  };