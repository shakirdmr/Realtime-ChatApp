import mongoose from 'mongoose';

// Define the schema
const UserSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    trim: true
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    required: true
  },
  profilePic:{
    type:String,
    default:""
  }
}); 


// Create the model
const UserModel = mongoose.model('User', UserSchema);

export default UserModel;
