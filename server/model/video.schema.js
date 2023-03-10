const mongoose = require("mongoose");

const VideoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter a title"],
    maxLength: [100, "Title cannot exceed 100 characters"],
    minLength: [3, "Title must be at least 3 characters"],
  },

  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },

  description: {
    type: String,
    required: [true, "Please enter a description"],
    maxLength: [1000, "Description cannot exceed 1000 characters"],
    minLength: [3, "Description must be at least 3 characters"],
  },

  imgUrl: {
    type: String,
    required: true,
  },
  videoUrl: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    default: [],
  },
  likes: {
    type: Number,
    default: 0,
  },
  dislikes: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Video = mongoose.model("Video", VideoSchema);
module.exports = Video;
