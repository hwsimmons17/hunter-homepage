import dbConnect from "../../../utils/dbConnect";
import Post from "../../../models/Post";

dbConnect();

export default async (req, res) => {
  const {
    query: { slug },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const post = await Post.findOne({ slug });

        if (!post) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: post });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "PUT":
      try {
        const post = await Post.findOneAndUpdate({ slug }, req.body, {
          new: true,
          runValidators: true,
        });

        if (!Post) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: post });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "DELETE":
      try {
        const deletedPost = await Post.deleteOne({ slug });

        if (!deletedPost) {
          return res.status(400).json({ success: false });
        }

        return res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
  }
};
