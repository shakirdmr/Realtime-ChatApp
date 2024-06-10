import generateTokenAndSetCookie from "../Utils/generateTokenAndSetCookie.js";
import UserModel from "../models/user.model.js";
import bcrypt from "bcrypt";

export const login = async (req, res) => {
  const { username, password } = req.body;

  const doesUserExsist = await UserModel.findOne({ username: username });

  if (!doesUserExsist)
    res.send(400).json({ result: false, message: "Username is Invalid" });

  const isPasswordCorrect = bcrypt.compare(password, doesUserExsist.password);

  if (!isPasswordCorrect)
    res.send(400).json({ result: false, messgae: "PASSWORD IS INORRECT" });

  await generateTokenAndSetCookie(doesUserExsist._id, res);

  return res.status(200).send({ success: true, message: doesUserExsist });
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

    console.log("ERROR CREATING NEW USER ", error);
  }
};

export const logout = (req, res) => {

  if (req.cookies.jwt) {

    try {
      res.cookie("jwt", "", { maxAge: 0 });
      res
        .status(200)
        .json({ result: true, message: "Logged Out Successfully" });
    } catch (error) {
      res.status(400).json({ result: false, message: "Error " + error });
    }
  }
  else
  res.status(400).json({ result: false, message: "Already Logged Out" });


};
