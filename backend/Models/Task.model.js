const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  column: { type: String, required: true },
  userID:{ type: mongoose.Schema.Types.ObjectId,
    ref: "User"},
    // created_at: { type: Date, default: Date.now },
    // updated_at: { type: Date, default: Date.now }
});

const taskModel = mongoose.model('Task',taskSchema);

module.exports={
    taskModel
}