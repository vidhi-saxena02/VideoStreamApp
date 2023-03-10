const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  video: {
    type: mongoose.Schema.ObjectId,
    ref: "Video",
    required: true,
  },
  comment: {
    type: String,
    required: [true, "Please enter a comment"],
    maxLength: [1000, "Comment cannot exceed 1000 characters"],
    minLength: [1, "Comment must be at least 1 characters"],
  },
  likes: {
    type: Number,
    default: 0,
  },
  dislikes: {
    type: Number,
    default: 0,
  },
  replies: {
    type: [String],
    default: [],
  },
  replyCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Comment = mongoose.model("Comment", CommentSchema);
module.exports = Comment;
