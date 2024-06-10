import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const generateTokenAndSetCookie =  (newUserID, res) => {

  console.log(newUserID);


    const MY_TOKEN =  jwt.sign({newUserID}, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.cookie("jwt", MY_TOKEN, { maxAge: 20 * 24 * 60 * 60 * 1000 });
};

export default generateTokenAndSetCookie;