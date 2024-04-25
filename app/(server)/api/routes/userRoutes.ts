import express from "express";
import User from "../../models/usersModel";

const userRouter = express.Router();

userRouter.post("/", async (req: express.Request, res: express.Response) => {
  res.send(await User.find({}));
});


export default userRouter