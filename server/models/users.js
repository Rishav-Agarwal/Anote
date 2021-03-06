import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  picture: {
    type: String
  },
  username: {
    type: String
  },
  root: {
    type: String
  },
  userHandle: { type: String, default: 'Me' },
  setting: {
    fontSize: { type: Number, default: 12 },
    fontColor: { type: String, default: 'black' }
  }
});

export default mongoose.model('users', userSchema);
