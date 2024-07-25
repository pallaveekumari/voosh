// const {taskModel} = require("../Models/Task.model");
// require("dotenv").config();
// const jwt=require("jsonwebtoken")

// //update the task
// const createTask = async (req, res) => {
//     // let token = req.headers.authentication.split(" ")[1];
//     const payload = req.body;
//     try {
//       if (payload.content.length == 0 || payload.content.length > 300) {
//         res.status(400).json({ msg: "Invalid content" });
//       }
//       jwt.verify(token, process.env.SECRET, async (err, decoded) => {
//         if (err) {
//           res.status(400).json({ msg: "Something went wrong" });
//         } else {
//           const users = await postModel({ ...payload, user_id: decoded.user_id });
//           await users.save();
//           res.status(200).json({ msg: "post created successfully" });
//         }
//       });
//     } catch (err) {
//       res.status(400).send({ msg: "Something went wrong" });
//     }
//   };

//   //update the task by id

//   const updateTask = async (req, res) => {
//     const { id } = req.params;
//     const { content } = req.body;
  
//     try {
//       if (content.length == 0 || content.length > 300) {
//         res.status(404).send({ msg: "Invalid content" });
//       } else {
//         await postModel.findByIdAndUpdate(
//           { _id: id },
//           { content: content, updated_at: Date.now() }
//         );
//       }
  
//       res.status(200).send({ msg: "Task updated successfully" });
//     } catch (err) {
//       res.status(400).send({ msg: "Task Not Found", error: err });
//     }
//   };

//   //delete the task by id 


//   const deleteTask = async (req, res) => {
//     const { id } = req.params;
  
//     try {
//       await postModel.findByIdAndDelete({ _id: id });
//       res.status(200).send({ msg: "Deleted task Successfully" });
//     } catch (err) {
//       res.status(400).send({ msg: "Task Not Found", error: err });
//     }
//   };

//   // get all tasks
// const getAllTasks = async (req, res) => {
//     try {
//       const data = await postModel.find();
//       res.status(200).json({ msg: "all tasks", data: data });
//     } catch (err) {
//       res.status(400).json({ msg: "something went wrong" });
//     }
//   };

//   module.exports={
//     createTask,
//     updateTask,
//     deleteTask,
//     getAllTasks
//   }

const { taskModel } = require("../Models/Task.model");
require("dotenv").config();
const jwt = require("jsonwebtoken");

// Create a new task
const createTask = async (req, res) => {
  const payload = req.body;
  try {
    if (!payload.title || !payload.description || payload.description.length > 300) {
      return res.status(400).json({ msg: "Invalid content" });
    }

    const newTask = new taskModel({
      ...payload,
      userID: req.user.userId, 
    });

    await newTask.save();
    res.status(200).json({ msg: "Task created successfully" });
  } catch (err) {
    res.status(500).json({ msg: "Something went wrong", error: err.message });
  }
};

// Update a task by id
// const updateTask = async (req, res) => {
//   const { id } = req.params;
//   const { content } = req.body;

//   try {
//     if (!content || content.length > 300) {
//       return res.status(400).send({ msg: "Invalid content" });
//     }

//     const task = await taskModel.findByIdAndUpdate(
//       id,
//       { content: content, updated_at: Date.now() },
//       { new: true }
//     );

//     if (!task) {
//       return res.status(404).send({ msg: "Task not found" });
//     }

//     res.status(200).send({ msg: "Task updated successfully", task });
//   } catch (err) {
//     res.status(500).send({ msg: "Something went wrong", error: err.message });
//   }
// };

const updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, description, taskdetails } = req.body;
  
    try {
      // Validate inputs
      if (!title || !description || !taskdetails) {
        return res.status(400).send({ msg: "All fields are required" });
      }
  
      // Find and update the task
      const task = await taskModel.findByIdAndUpdate(
        id,
        { title, description, taskdetails, updated_at: Date.now() },
        { new: true } // Return the updated document
      );
  
      if (!task) {
        return res.status(404).send({ msg: "Task not found" });
      }
  
      res.status(200).send({ msg: "Task updated successfully", task });
    } catch (err) {
      res.status(500).send({ msg: "Something went wrong", error: err.message });
    }
  };
  

// Delete a task by id
const deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await taskModel.findByIdAndDelete(id);

    if (!task) {
      return res.status(404).send({ msg: "Task not found" });
    }

    res.status(200).send({ msg: "Deleted task successfully" });
  } catch (err) {
    res.status(500).send({ msg: "Something went wrong", error: err.message });
  }
};

// Get all tasks
const getAllTasks = async (req, res) => {
  try {
    const tasks = await taskModel.find();
    res.status(200).json({ msg: "All tasks", data: tasks });
  } catch (err) {
    res.status(500).json({ msg: "Something went wrong", error: err.message });
  }
};

module.exports = {
  createTask,
  updateTask,
  deleteTask,
  getAllTasks
};
