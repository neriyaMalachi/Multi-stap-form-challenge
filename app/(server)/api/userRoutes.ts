import express from "express";
import User from "../models/usersModel";

const userRouters = express.Router();

  userRouters.post(
    "/conectBackend",
    async (req: express.Request, res: express.Response) => {
      console.log("backend in !!!", req.body);

      res.send(await User.find({}));
    }
  )



export default userRouters;
