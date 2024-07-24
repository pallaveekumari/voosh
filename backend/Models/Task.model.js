const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  column: { type: String, required: true },
  userID:{type:String,required:true}
});

const UserModel = mongoose.model('user',userSchema);

module.exports={
    UserModel
}