import generateTokenAndSetCookie from "../Utils/generateTokenAndSetCookie.js";
import UserModel from "../models/user.model.js";
import bcrypt from "bcrypt";

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const doesUserExsist = await UserModel.findOne({ username: username });

    if (!doesUserExsist)
      return res
        .status(200)
        .json({ result: false, message: "Username is Invalid" });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      doesUserExsist.password
    );

    if (!isPasswordCorrect)
      return res
        .status(200)
        .json({ result: false, message: "PASSWORD IS INORRECT" });

    await generateTokenAndSetCookie(doesUserExsist._id, res);

    doesUserExsist.password = null;
    return res.status(200).json({ result: true, message: doesUserExsist });
  } catch (error) {
    return res.status(500).json({ result: false, message: error.message });
  }
};

export const signUp = async (req, res) => {
  try {
    const { fullname, username, password, confirmPassword, gender } = req.body;

    if (password != confirmPassword)
      return res.status(200).send({
        success: false,
        message: "password and confirm password dont match",
      });

    const user = await UserModel.findOne({ username: username });
    if (user)
      return res
        .status(200)
        .send({ success: false, message: "Username already registered" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const malePic = `https://avatar.iran.liara.run/public/boy?username=${fullname}`;
    const femalePic = `https://avatar.iran.liara.run/public/girl?username=${fullname}`;

    const newUser = new UserModel({
      fullname,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? malePic : femalePic,
    });
    await newUser.save();

    await generateTokenAndSetCookie(newUser._id, res);

    return res.status(200).send({ success: true, message: newUser });
  } catch (error) {
    res
      .status(400)
      .send({ success: false, message: "ERROR CREATING NEW USER" + error });
  }
};

export const logout = (req, res) => {
  try {
    if (req.cookies.jwt) {

      console.log("\n\n\n req.cookies.jwt = ")
      console.log(req.cookies.jwt)

      
      res.cookie("jwt", "", { maxAge: 0 });
      res
        .status(200)
        .json({ result: true, message: "Logged Out Successfully" });
    } else
      res
        .status(200)
        .json({
          result: false,
          message: "NO COOKIE SET ( Already Logged Out )",
        });
  } catch (error) {
    res.status(400).json({ result: false, message: "Error " + error });
  }
};
