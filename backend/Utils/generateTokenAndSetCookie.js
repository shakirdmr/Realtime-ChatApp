import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const generateTokenAndSetCookie = (newUserID, res) => {


  try {
    const MY_TOKEN = jwt.sign({ newUserID }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    // res.cookie("jwt", MY_TOKEN, {
    //   maxAge: 20 * 24 * 60 * 60 * 1000,
    //   httpOnly: true, // Cookie cannot be accessed via JavaScript (for security)
    //   secure: process.env.NODE_ENV === 'production', // Send cookie over HTTPS in production
    //   sameSite: 'None' // Allow cross-origin requests
    // });
    

    res.cookie("jwt", MY_TOKEN, {
      maxAge: 60 * 24 * 60 * 60 * 1000,
      // days * HourInADay* Minutes * Sec * Miliseconds
      httpOnly:true,
      sameSite:"strict",
      domain: 'localhost', // Set the domain appropriately
      path: '/' // Set the path appropriately
  });


   
  } catch (error) {
    return res.status(200).send({ success: false, message: "ERROR "+error.message });

  }
};

export default generateTokenAndSetCookie;
