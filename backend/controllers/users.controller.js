import UserModel from "../models/user.model.js";

export const AllUsersForHomeScreen = async (req, res) => {
  const myId = req.user._id;



  try {
    const AllUsers = await UserModel.find({ _id: { $ne: myId } });
    res.status(200).json({ result: true, message: AllUsers });
  } catch (error) {
    res.status(400).json({
      result: false,
      message: "Error in user.controller.js - " + error,
    });
  }
};
