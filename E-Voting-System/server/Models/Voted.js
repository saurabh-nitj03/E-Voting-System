import mongoose from "mongoose";

const voteSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  electionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"Election",
    required: true,
  }
});

const Voted = mongoose.model("Voted", voteSchema);
export default Voted;